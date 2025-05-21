import { useState } from "react"
import AuthLayout from "@/components/Authentication/AuthLayout"
import CustomInput from "@/components/CustomInput"
import CustomButton from "@/components/CustomButton"
import SuccessModal from "@/components/Authentication/PasswordSuccessModal"
import ResetPasswordModal from "@/components/Authentication/ResetPasswordModal"
import { useNavigate } from "react-router-dom"

function ResetPassword() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Basic email validation
    if (!email) {
      setError("Email is required")
      return
    }

    // Add your password reset logic here
    try {
      // await sendResetLink(email)
      // Show success message or redirect

      // Show success modal
      setIsModalOpen(true)
    } catch (err) {
      setError("Failed to send reset link. Please try again.")
    }
  }

  const handleModalClose = () => {
    navigate("/confirm-password")
    setIsModalOpen(false)
  }

  return (
    <AuthLayout>
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">Reset Your Password</h1>
          <p className="text-muted-foreground">Enter your email to receive a reset link.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <CustomInput
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
          />

          <CustomButton 
          onClick={handleSubmit}
          type="submit" 
          className="w-full bg-black hover:bg-black/90"
          >
            Send Reset Link
          </CustomButton>
        </form>
      </div>
      <ResetPasswordModal isOpen={isModalOpen} onClose={handleModalClose} />
    </AuthLayout>
  )
}

export default ResetPassword

