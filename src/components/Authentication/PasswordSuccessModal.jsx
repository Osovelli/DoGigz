import { Button } from "@/components/ui/button"
import CustomModal from "../CustomModal"



function PasswordSuccessModal({ isOpen, onClose }) {
  return (
    <CustomModal isOpen={isOpen} onOpenChange={onClose}>
        <div className="text-center">
            <div className="text-center p-6">
                {/* Illustration */}
                <div className="mb-6">
                    <img
                        src="/success logo.png"
                        alt=""
                        className="w-24 h-24 mx-auto"
                    />
                </div>

                {/* Content */}
                <h2 className="text-2xl font-semibold mb-2">Password Reset Successful</h2>
                <p className="text-muted-foreground mb-6">
                Your password has been reset successfully. You can now log in with your new password.
                </p>

                {/* Button */}
                <Button onClick={onClose} className="w-full bg-gray-100 text-gray-900 hover:bg-gray-200" variant="secondary">
                Sign in
                </Button>
            </div>
        </div>
    </CustomModal>
  )
}

export default PasswordSuccessModal

