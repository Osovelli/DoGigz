import { Check } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const SuccessModal = ({ isOpen, onClose, applicationType, pointsUsed = 0 }) => {
  // Determine the success message based on application type
  const getMessage = () => {
    if (applicationType === "direct") {
      return "You have successfully applied for the gig."
    } else if (applicationType === "points") {
      return `Congratulations! You've successfully applied for this job using ${pointsUsed} points. Your application is now at the top of the gig poster's list.`
    }
    return "Your application has been submitted successfully."
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 border-none bg-white">
        <div className="flex flex-col items-center py-10 px-6">
          {/* Success Icon */}
          <div className="w-16 h-16 rounded-full bg-[#2ecc71] flex items-center justify-center mb-6">
            <Check className="text-white w-8 h-8" />
          </div>

          {/* Success Message */}
          <h2 className="text-2xl font-semibold mb-3 text-center">Application Successful</h2>
          <p className="text-gray-600 text-center mb-8">{getMessage()}</p>

          {/* Continue Button */}
          <Button
            onClick={onClose}
            className="w-full py-6 h-auto rounded-full bg-[#a8e9d5] hover:bg-[#98d9c5] text-black font-medium"
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SuccessModal
