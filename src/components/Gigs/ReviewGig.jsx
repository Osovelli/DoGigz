import { useState } from "react"
import { ArrowLeft, ChevronDown, ChevronUp, MapPin, Calendar, DollarSign, AlertCircle, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import CustomModal from "../CustomModal"

export default function ReviewGig({ gigData, onBack, onGigPosted }) {
  const [expandedSections, setExpandedSections] = useState({
    about: true,
    details: true,
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [walletBalance] = useState(1500) // Simulated wallet balance

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handlePostGig = () => {
    const gigAmount = Number.parseFloat(gigData.budget) || 0

    if (walletBalance < gigAmount) {
      setShowErrorModal(true)
    } else {
      setShowSuccessModal(true)
    }
  }

  const handleSuccessClose = () => {
    setShowSuccessModal(false)
    onGigPosted()
  }

  const handleRetry = () => {
    setShowErrorModal(false)
    handlePostGig()
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#4ECDC4] text-white flex items-center justify-center text-sm font-medium">
              ✓
            </div>
            <span className="font-medium text-gray-900">Post a Gig</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#4ECDC4] text-white flex items-center justify-center text-sm font-medium">
              2
            </div>
            <span className="font-medium text-gray-900">Review and Publish</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-2xl font-bold">Ready to get offers?</h1>
          </div>

          <div className="space-y-6">
            {/* About the gig */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection("about")}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-medium">About the gig</span>
                {expandedSections.about ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedSections.about && (
                <div className="px-4 pb-4 text-gray-600">
                  <h3 className="font-medium text-gray-900 mb-2">{gigData.title}</h3>
                  <p className="mb-4">{gigData.description}</p>
                  <button className="text-[#4ECDC4] text-sm">See more</button>
                </div>
              )}
            </div>

            {/* Gig Details */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection("details")}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-medium">Gig Details</span>
                {expandedSections.details ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedSections.details && (
                <div className="px-4 pb-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium">
                        {gigData.location === "on-site" ? "On-site work required" : "Remote work"}
                      </div>
                      <div className="text-sm text-gray-500">Gig location</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium">{gigData.datePosted}</div>
                      <div className="text-sm text-gray-500">Date Posted</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium">₦{gigData.budget}</div>
                      <div className="text-sm text-gray-500">Amount</div>
                    </div>
                  </div>

                  {gigData.skills && gigData.skills.length > 0 && (
                    <div>
                      <div className="font-medium mb-2">Required Skills</div>
                      <div className="flex flex-wrap gap-2">
                        {gigData.skills.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Wallet Balance Warning */}
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-red-700">
                The gig amount (₦{gigData.budget}) will be deducted from your wallet once the gig is posted. Please
                ensure your wallet has sufficient balance to proceed.
                <div className="mt-2 text-xs">Current wallet balance: ₦{walletBalance.toLocaleString()}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button variant="outline" onClick={onBack} className="flex-1 h-12 bg-transparent">
                Edit
              </Button>
              <Button onClick={handlePostGig} className="flex-1 h-12 bg-[#4ECDC4] hover:bg-[#45b8b1] text-white">
                Post gig
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <CustomModal isOpen={showSuccessModal} onClose={handleSuccessClose}>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Gig Posted Successfully</h2>
          <div className="text-gray-600 mb-6">
            Great job! Your gig is posted. We'll notify you when professionals apply.
          </div>
          <button
            onClick={handleSuccessClose}
            className="w-full py-3 px-4 rounded-lg bg-[#4ECDC4] hover:bg-[#45b8b1] text-white"
          >
            Continue
          </button>
        </div>
      </CustomModal>

      {/* Error Modal */}
      <CustomModal isOpen={showErrorModal} onClose={() => setShowErrorModal(false)}>
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Gig Not Posted</h2>
          <div className="text-gray-600 mb-6">
            Your gig couldn't be posted because your wallet balance is too low. Please add funds to proceed.
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowErrorModal(false)}
              className="flex-1 py-3 px-4 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              Fund wallet
            </button>
            <button
              onClick={handleRetry}
              className="flex-1 py-3 px-4 rounded-lg bg-[#4ECDC4] hover:bg-[#45b8b1] text-white"
            >
              Retry
            </button>
          </div>
        </div>
      </CustomModal>
    </div>
  )
}
