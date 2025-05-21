import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Calendar, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AuthLayout from "@/components/Authentication/AuthLayout"
import CustomButton from "@/components/CustomButton"

// Sample countries data
const countries = [
  { value: "ng", label: "Nigeria" },
  { value: "gh", label: "Ghana" },
  { value: "ke", label: "Kenya" },
  // Add more countries as needed
]

function IdentityVerification() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nationality: "",
    dateOfBirth: "",
    address: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your verification logic here
    navigate("/document-verification")
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
          <div className="mb-8">
            <h1 className="text-2xl font-semibold mb-2">Identity Verification</h1>
            {/* <p className="text-muted-foreground">Verify your identity to build trust with gig seekers.</p> */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nationality */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Nationality</label>
                <Select
                  value={formData.nationality}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, nationality: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Date of birth</label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Enter DOB"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData((prev) => ({ ...prev, dateOfBirth: e.target.value }))}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Residential Address */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Residential Address</label>
                <Input
                  value={formData.address}
                  onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                  placeholder="Search building name or street name"
                  className="mb-2"
                />
                <p className="text-sm text-muted-foreground">e.g, 112, Mobolaji bank anthony street, Ikeja</p>
              </div>

              {/* BVN Information */}
              <div className="space-y-3 py-4">
                <p className="text-sm text-muted-foreground">
                  Giggerz wants to access your BVN Information. By clicking Continue, you agree to allow Giggerz to:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-foreground" />
                    Process your personal details
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-foreground" />
                    Process your contact information
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-foreground" />
                    Process your document information
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <CustomButton type="submit" className="flex-1 bg-black hover:bg-black/90">
                  Continue
                </CustomButton>
                <CustomButton type="button" variant="secondary" className="flex-1" onClick={handleSkip}>
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

export default IdentityVerification

