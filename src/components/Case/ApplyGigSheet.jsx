import { useState } from "react"
import { X, Minus, Plus } from "lucide-react"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import SuccessModal from "./SuccessModal"

const ApplyGigSheet = ({ isOpen, onClose, gigTitle }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [pointsAmount, setPointsAmount] = useState(12)
  const totalPoints = 500 // This would come from user data in a real app
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
  }

  const handlePointsChange = (amount) => {
    const newAmount = Math.max(0, Math.min(totalPoints, pointsAmount + amount))
    setPointsAmount(newAmount)
  }

  const handlePointsInputChange = (e) => {
    const value = Number.parseInt(e.target.value) || 0
    setPointsAmount(Math.max(0, Math.min(totalPoints, value)))
  }

  const handleContinue = () => {
    if (selectedOption) {
      setIsSubmitting(true)

      // Simulate API call with a timeout
      setTimeout(() => {
        setIsSubmitting(false)
        setShowSuccessModal(true)
      }, 1000)
    }
  }

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false)
    onClose() // Close the apply sheet after success

    // Reset the form state
    setSelectedOption(null)
    setPointsAmount(12)
  }

  return (
    <>
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-md p-0 overflow-auto">
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold">How would you like to apply?</h2>
              {/* <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button> */}
            </div>

            {/* Apply Options */}
            <div className="space-y-4">
              {/* Apply Directly Option */}
              <div
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedOption === "direct"
                    ? "border-[#a8e9d5] bg-[#a8e9d5]/10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => handleOptionSelect("direct")}
              >
                <h3 className="font-medium mb-1">Apply Directly</h3>
                <p className="text-sm text-gray-600">Submit your application to the job poster.</p>
              </div>

              {/* Apply Using Points Option */}
              <div
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedOption === "points"
                    ? "border-[#a8e9d5] bg-[#a8e9d5]/10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => handleOptionSelect("points")}
              >
                <h3 className="font-medium mb-1">Apply Using Points</h3>
                <p className="text-sm text-gray-600">
                  Use points to increase visibility and improve your chances by being listed on top of the applicant
                  list.
                </p>

                {/* Points Input - Only shown when this option is selected */}
                {selectedOption === "points" && (
                  <div className="mt-4">
                    <div className="flex items-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePointsChange(-1)
                        }}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50"
                      >
                        <Minus size={16} />
                      </button>
                      <input
                        type="text"
                        value={pointsAmount}
                        onChange={handlePointsInputChange}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full h-8 border-y border-gray-300 text-center focus:outline-none focus:ring-1 focus:ring-[#a8e9d5]"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePointsChange(1)
                        }}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Your Points Balance: {totalPoints} points</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer with Continue Button */}
          <div className="mt-auto p-6">
              <Button
                onClick={handleContinue}
                disabled={!selectedOption || isSubmitting}
                className="w-full py-6 h-auto rounded-full bg-[#a8e9d5] hover:bg-[#98d9c5] text-black font-medium"
              >
                {isSubmitting ? "Submitting..." : "Continue"}
              </Button>
            </div>
        </div>
      </SheetContent>
    </Sheet>
    {/* Success Modal */}
    <SuccessModal
    isOpen={showSuccessModal}
    onClose={handleSuccessModalClose}
    applicationType={selectedOption}
    pointsUsed={selectedOption === "points" ? pointsAmount : 0}
  />
  </>
  )
}

export default ApplyGigSheet
