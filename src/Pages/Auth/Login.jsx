import { useState } from "react"
import { useNavigate } from "react-router-dom"
import CustomButton from "@/components/CustomButton"
import { Link } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"
import CustomInput from "@/components/CustomInput"
import { Button } from "@/components/ui/button"
import AuthLayout from "@/components/Authentication/AuthLayout"

export default function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loginError, setLoginError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }

    // Clear general login error when user makes changes
    if (loginError) {
      setLoginError("")
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address must be in the right format"
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (!/(?=.*\d)(?=.*[!@#$%^&*])/.test(formData.password)) {
      newErrors.password = "Password must contain at least one number and one special character"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, check if email is admin@giggerz.com and password is Admin@123
      if (formData.email === "admin@giggerz.com" && formData.password === "Admin@123") {
        // Store auth token or user info in localStorage/sessionStorage
        localStorage.setItem("adminAuth", "true")
        navigate("/admin")
      } else {
        // Check if email exists (in a real app, this would be a server response)
        if (formData.email !== "admin@giggerz.com") {
          setLoginError("Email is not registered")
        } else {
          setLoginError("Password is incorrect")
        }
      }
    } catch (error) {
      setLoginError("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <AuthLayout className="min-h-screen flex flex-col">
      {/* Header */}
      {/* <header className="p-4 flex justify-end items-center">
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Already have an account?</span>
          <Link to="/login" className="font-medium">
            Login
          </Link>
        </div>
      </header>
 */}
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md flex flex-col items-center">
          {/* Logo */}
          {/* <h1 className="text-3xl font-semibold text-[#4a9d7e] mb-10">DoGigz</h1> */}

          {/* Login Form */}
          <div className="w-full text-center mb-8">
            <h2 className="text-2xl font-semibold mb-1">Login to Your Account</h2>
            <p className="text-gray-500">Enter your details to continue.</p>
          </div>

          {loginError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">{loginError}</div>
          )}

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <CustomInput 
            label="Email" 
            id="email" 
            name="email" 
            type="text" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Email"
            error={errors.email}
            />

            <CustomInput
              label="Password"
              id="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              rightIcon={
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="pr-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              }
            />

            <div className="flex justify-start">
              <Link to="/forgot-password" className="text-sm text-gray-500 hover:text-gray-700">
                Forgot your password?
              </Link>
            </div>

            <CustomButton className="w-full bg-[#a8e9d5] hover:bg-[#98d9c5] text-black font-medium py-6 h-auto rounded-full mt-4">
              Sign In
            </CustomButton>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">New to DoGigz?</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 font-medium py-6 h-auto rounded-full"
              asChild
            >
              <Link to="/signup">Create account</Link>
            </Button>
          </form>
        </div>
      </main>
    </AuthLayout>
  )
}
