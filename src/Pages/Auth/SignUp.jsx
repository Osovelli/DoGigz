import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import CustomInput from "@/components/CustomInput"


export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const Navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handlesignup = (e) => { 
    e.preventDefault();
    // Handle signup logic here
    Navigate('/verify-email')
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">DoGigz</h1>
        <div className="flex items-center gap-4">
          <span>Already have an account?</span>
          <Link to="/signin" className="font-medium">
            Login
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Signup Form Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Create Your Account</h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <CustomInput label="First name" placeholder="First name" />
              <CustomInput label="Last name" placeholder="Last name" />
            </div>

            <div className="mb-4">
              <CustomInput label="Other name" placeholder="Other name" optional={true} />
            </div>

            <div className="mb-4">
              <CustomInput label="Phone number" placeholder="Phone number" type="tel" />
            </div>

            <div className="mb-4">
              <CustomInput label="Email" placeholder="Email" type="email" />
            </div>

            <div className="mb-4">
              <CustomInput
                label="Password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                rightIcon={
                  <button type="button" onClick={togglePasswordVisibility} className="pr-3">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                }
              />
            </div>

            <div className="mb-6">
              <CustomInput label="Referral code" placeholder="Referral code" optional={true} />
            </div>

            <Button 
            onClick={handlesignup}
            type="submit"
            disabled={false}
            loading={false}
            className="w-full bg-[#a8e9d5] hover:bg-[#98d9c5] text-black font-medium py-6 h-auto rounded-full mb-4"
            >
              Sign Up
            </Button>

            <div className="text-center mb-6">
              <span>Already have an account? </span>
              <Link to="/signin" className="font-medium">
                Login
              </Link>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              By signing up you confirm that you accept our{" "}
              <Link to="/terms" className="underline font-medium">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="underline font-medium">
                Privacy Policy
              </Link>
              .
            </p>
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
