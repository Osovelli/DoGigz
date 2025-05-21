import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import CustomRadioGroup from "@/components/CustomRadioGroup"
import CustomButton from "@/components/CustomButton"
import AuthLayout from "@/components/Authentication/AuthLayout"
import { Check } from "lucide-react"


const verificationOptions = [
  {
    value: "Driver's License",
    title: "Driver's License",
    description: "",
  },
  {
    value: "International Passport",
    title: "Passport Document Details",
    description: "",
  },
]

function DocumentVerification() {
  const [selectedMethod, setSelectedMethod] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedMethod) {
      navigate("/verification-details", {
        state: { type: selectedMethod },
      })
    }
  }

  const handleSkip = () => {
    navigate("/dashboard")
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
          <div className="">  
            <div className="mb-8">
              <h1 className="text-2xl font-semibold mb-2">Document verification</h1>
              <p className="text-muted-foreground">Securely verify your identity with either NIN or BVN.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <CustomRadioGroup
                value={selectedMethod}
                onValueChange={setSelectedMethod}
                items={verificationOptions}
                required
              />

              <div className="flex gap-4">
                <CustomButton 
                type="submit" 
                className="flex-1 bg-black hover:bg-black/90" 
                disabled={!selectedMethod}
                >
                  Continue
                </CustomButton>
                <CustomButton
                type="button" 
                variant="secondary" 
                className="flex-1 bg-gray-400 hover:bg-gray-400/90" onClick={handleSkip}
                >
                  Skip
                </CustomButton>
              </div>
            </form>
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
    </div>
  )
}

export default DocumentVerification