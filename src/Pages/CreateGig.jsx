import { useState } from "react"
import CreateGig from "@/components/Gigs/CreateGig"
import ReviewGig from "@/components/Gigs/ReviewGig"

export default function CreateGigPage() {
  const [currentStep, setCurrentStep] = useState("create")
  const [gigData, setGigData] = useState({})

  const handleGigCreated = (data) => {
    setGigData(data)
    setCurrentStep("review")
  }

  const handleBackToCreate = () => {
    setCurrentStep("create")
  }

  const handleGigPosted = () => {
    setCurrentStep("create")
    setGigData({})
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentStep === "create" && <CreateGig onGigCreated={handleGigCreated} />}
      {currentStep === "review" && (
        <ReviewGig gigData={gigData} onBack={handleBackToCreate} onGigPosted={handleGigPosted} />
      )}
    </div>
  )
}
