import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthLayout from "@/components/Authentication/AuthLayout"
import { Button } from "@/components/ui/button"
import { Camera, Check } from "lucide-react"
import SuccessModal from "@/components/Authentication/PasswordSuccessModal"
import CustomButton from "@/components/CustomButton"

const STATES = {
  INITIAL: "initial",
  CAMERA_ACTIVE: "camera_active",
  PHOTO_CAPTURED: "photo_captured",
}

function LivenessCheck() {
  const [checkState, setCheckState] = useState(STATES.INITIAL)
  const [cameraError, setCameraError] = useState(null)
  const [capturedImage, setCapturedImage] = useState(null)
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const shutterRef = useRef(new Audio("/shutter.mp3"))
  const navigate = useNavigate()
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const initializeCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      })
      
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        // Wait for video to be ready
        await new Promise((resolve) => {
          videoRef.current.onloadedmetadata = () => {
            resolve()
          }
        })
        // Start playing the video
        await videoRef.current.play()
      }
      setCheckState(STATES.CAMERA_ACTIVE)
    } catch (err) {
      console.error("Error accessing camera:", err)
      setCameraError(
        err.name === "NotAllowedError"
          ? "Camera access denied. Please enable camera access to continue."
          : "Unable to access camera. Error: " + err.message
      )
    }
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
  }

  const capturePhoto = () => {
    if (videoRef.current) {
      try {
        shutterRef.current.play().catch(console.error)

        const canvas = document.createElement("canvas")
        const video = videoRef.current
        
        // Set canvas dimensions to match video dimensions
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        
        const ctx = canvas.getContext("2d")
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

        const imageData = canvas.toDataURL("image/jpeg", 0.8)
        setCapturedImage(imageData)
        stopCamera()
        setCheckState(STATES.PHOTO_CAPTURED)
      } catch (err) {
        console.error("Error capturing photo:", err)
        setCameraError("Failed to capture photo: " + err.message)
      }
    }
  }

  // Clean up camera on unmount
  useEffect(() => {
    return () => {
      stopCamera()
    }
  }, []) // Remove stopCamera from dependencies to avoid recreation

  const handleSkip = () => {
    navigate("/dashboard")
  }

  const handleButtonClick = () => {
    switch (checkState) {
      case STATES.INITIAL:
        initializeCamera()
        break
      case STATES.CAMERA_ACTIVE:
        capturePhoto()
        break
      case STATES.PHOTO_CAPTURED:
        console.log("Captured image:", capturedImage)
        // Show success modal instead of navigating directly
        setShowSuccessModal(true)
        break
      default:
        break
    }
  }

  const handleModalClose = () => {
    setShowSuccessModal(false)
  }

  const getButtonText = () => {
    switch (checkState) {
      case STATES.INITIAL:
        return "Start"
      case STATES.CAMERA_ACTIVE:
        return "Capture"
      case STATES.PHOTO_CAPTURED:
        return "Continue"
      default:
        return "Start"
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">DoGigz</h1>
        <div className="flex items-center gap-4">
          <span>Already have an account?</span>
          <Link to="/login" className="font-medium">
            Login
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Signup Form Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-start">
          <div className="w-full max-w-md">
          <div className="mb-8">  
            <div className="mb-8">
              <h1 className="text-2xl font-semibold mb-2">Liveness check</h1>
              <p className="text-muted-foreground">
                We will compare the photo in your document with your selfie to confirm your identity.
              </p>
            </div>
            <div className="space-y-6">
            <div className="relative aspect-[4/3] max-w-md mx-auto">
              {checkState === STATES.INITIAL ? (
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                  {cameraError ? (
                    <div className="text-center p-4">
                      <Camera className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{cameraError}</p>
                    </div>
                  ) : (
                    <img
                      src="/liveness check.png"
                      alt="Camera illustration"
                      className="object-cover"
                    />
                  )}
                </div>
              ) : checkState === STATES.CAMERA_ACTIVE ? (
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 z-10">
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary" />
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary" />
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary" />
                  </div>
                  <video 
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ) : (
                <img
                  src={capturedImage}
                  alt="Captured selfie"
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>

            <div className="flex gap-4">
              <CustomButton onClick={handleButtonClick} className="flex-1 bg-black hover:bg-black/90" disabled={cameraError}>
                {getButtonText()}
              </CustomButton>
              <Button variant="secondary" className="flex-1" onClick={handleSkip}>
                Skip
              </Button>
            </div>
          </div>
          </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 bg-[#f9f9f9] p-8 flex flex-col items-center justify-center">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Find Gigs. Learn Skills. Build Your Future with DoGigs</h2>
            <p className="text-lg mb-6 text-gray-700">
              Join thousands of individuals who have found gigs and gained new skills to grow their careers.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-[#a8e9d5] rounded-full p-1">
                  <Check size={16} className="text-black" />
                </div>
                <p>Explore gig opportunities that match your skills and schedule</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-[#a8e9d5] rounded-full p-1">
                  <Check size={16} className="text-black" />
                </div>
                <p>Learn new skills from industry experts</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-[#a8e9d5] rounded-full p-1">
                  <Check size={16} className="text-black" />
                </div>
                <p>Connect with a supportive community of gig seekers and learners</p>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-lg mb-4">
                <span className="font-medium">With </span>
                <span className="text-[#4a9d7e] font-bold">DoGigs</span>
                <span>
                  , I found freelance projects that fit my schedule and took courses that helped me level up my skills.
                  Now, I'm earning more and working on projects I love.
                </span>
              </p>
              <div className="flex items-center gap-2">
                <p className="font-bold">Alex Johnson</p>
                <p className="text-gray-600">Freelance Designer</p>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <img
                src="/signup.jpg"
                alt="Freelancer testimonial"
                className="rounded-t-full w-64 h-64 object-cover"
              />
            </div>

            <p className="text-center text-gray-700">
              Discover your next opportunity. Whether you're looking to earn extra income or gain new skills, DoGigs is
              here to help you succeed.
            </p>
          </div>
        </div>
      </main>
      {/* Success Modal */}
      <SuccessModal isOpen={showSuccessModal} onClose={handleModalClose} />
    </div>
  )
}

export default LivenessCheck