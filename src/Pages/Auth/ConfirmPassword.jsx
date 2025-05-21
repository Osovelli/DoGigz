import { useState } from "react"
import AuthLayout from "@/components/Authentication/AuthLayout"
import CustomInput from "@/components/CustomInput"
import CustomButton from "@/components/CustomButton"
import { Eye, EyeOff } from "lucide-react"
import PasswordSuccessModal from "@/components/Authentication/PasswordSuccessModal"
import { useNavigate } from "react-router-dom"

function ConfirmPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors({
        ...error,
        [name]: "",
      })
    }

    // Clear general login error when user makes changes
    /* if (loginError) {
      setLoginError("")
    } */
  }

  const validateForm = () => {
    const newErrors = {}

    // Email validation
   /*  if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address must be in the right format"
    } */

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
    setError("")

    // Basic email validation
    /* if (!password) {
      setError("Password is required")
      return
    }
 */
    // Add your password reset logic here
    try {
      // await sendResetLink(email)
      // Show success message or redirect
      console.log("Form submitted successfully")
      // Show success modal
      setIsModalOpen(true)
    } catch (err) {
      setError("Failed to send reset link. Please try again.")
    }
  }


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    // Optionally redirect to login or home page
    navigate("/signin")
  }

  return (
    <AuthLayout>
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">Reset Your Password</h1>
          {/* <p className="text-muted-foreground">Enter your email to receive a reset link.</p> */}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <CustomInput        
            id="password"
            placeholder="New Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
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
          <CustomInput        
            id="confirmPassword"
            placeholder="Confrim Password"
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
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

          <CustomButton 
          type="submit" 
          className="w-full bg-black hover:bg-black/90"
          >
            Reset Password
          </CustomButton>
        </form>
      </div>
      <PasswordSuccessModal isOpen={isModalOpen} onClose={handleModalClose} />
    </AuthLayout>
  )
}

export default ConfirmPassword

