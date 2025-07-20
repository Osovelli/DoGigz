import { X, CheckCircle, XCircle } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import CustomButton from "../CustomButton"

function ConversionResultModal({ isOpen, onClose, success, points, amount }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-6">
        <div className="flex items-center justify-center mb-2">
          <h2 className="text-2xl font-bold text-center">{success ? "Conversion Successful" : "Conversion Failed"}</h2>
          {/* <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button> */}
        </div>

        <div className="flex flex-col items-center py-6">
          {success ? (
            <>
              {/* <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div> */}
              <img src="/success logo.png" className="h-32 w-32" alt="conversion success" />
              <h3 className="text-xl font-semibold mb-2">ConVersion Successfull</h3>
              <p className="text-gray-600 text-center mb-4">
                You have successfully converted {points} points to NGN {amount.toLocaleString()}.
              </p>
            </>
          ) : (
            <>
              {/* <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <XCircle className="h-10 w-10 text-red-600" />
              </div> */}
              <img src="/failed logo.png" className="h-20 w-20" alt="conversion failed" />
              <h3 className="text-xl font-semibold mb-2">Conversion Failed</h3>
              <p className="text-gray-600 text-center mb-4">
                We couldn't process your conversion at this time. Please try again later or contact support if the
                problem persists.
              </p>
            </>
          )}
        </div>

        <CustomButton 
        className="w-full bg-black hover:bg-black/90" 
        size="lg" 
        onClick={onClose}
        >
          {success ? "Done" : "Try Again"}
        </CustomButton>
      </DialogContent>
    </Dialog>
  )
}

export default ConversionResultModal
