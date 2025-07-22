import { useState } from "react"
import { ArrowLeft, ChevronDown, ChevronUp, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import CustomModal from "../CustomModal"

export default function PreviewSelfPacedCourse({ courseData, onBack }) {
  const [expandedSections, setExpandedSections] = useState({
    about: false,
    tutor: false,
    content: true,
  })
  const [showModal, setShowModal] = useState(false)

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handlePublishCourse = () => {
    setShowModal(true)
  }

  const handleSubmitForReview = () => {
    setShowModal(false)
    // Handle course submission logic here
    console.log("Course submitted for review")
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
            <span className="font-medium text-gray-900">Course</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#4ECDC4] text-white flex items-center justify-center text-sm font-medium">
              ✓
            </div>
            <span className="font-medium text-gray-900">Add Course Content</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#4ECDC4] text-white flex items-center justify-center text-sm font-medium">
              3
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
            <h1 className="text-2xl font-bold">Review and Publish Your Course</h1>
          </div>

          <div className="space-y-6">
            {/* Course Preview Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Course thumbnail"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-gray-700 ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Introduction to Graphic Design</h2>
                <div className="text-lg font-semibold text-[#4ECDC4] mb-3">NGN 120,000</div>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">UX Design</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Graphics Design</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Product Design</span>
                </div>
              </div>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4">
              {/* About the course */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("about")}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-medium">About the course</span>
                  {expandedSections.about ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {expandedSections.about && (
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi libero, sagittis vitae sem in,
                      tincidunt consequat nibh. Mauris rhoncus magna ac nibh convallis posuere. Ut rutrum velit non sem
                      bibendum, vitae mollis sem dapibus. Nam nisl lacus, tincidunt aliquam eros ac, tempor rhoncus
                      tellus. Nam pharetra, mauris nec ultrices auctor
                    </p>
                    <button className="text-[#4ECDC4] text-sm mt-2">See more</button>
                  </div>
                )}
              </div>

              {/* Course Tutor */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("tutor")}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-medium">Course Tutor</span>
                  {expandedSections.tutor ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {expandedSections.tutor && (
                  <div className="px-4 pb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="John Doe"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>3.5 (128)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Course Content */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("content")}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-medium">Course Content</span>
                  {expandedSections.content ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {expandedSections.content && (
                  <div className="px-4 pb-4 space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-2">SECTION 1</div>
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                          <div key={item} className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-gray-600">{item}.</span>
                              <span className="text-sm">Title goes in here</span>
                              {item === 2 && <Play className="w-4 h-4 text-[#4ECDC4]" />}
                            </div>
                            <span className="text-xs text-gray-400">5:05</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-2">SECTION 2</div>
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                          <div key={item} className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-gray-600">{item}.</span>
                              <span className="text-sm">Title goes in here</span>
                            </div>
                            <span className="text-xs text-gray-400">5:05</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button onClick={handlePublishCourse} className="w-full h-12 bg-[#4ECDC4] hover:bg-[#45b8b1] text-white">
                Publish Course
              </Button>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 h-12 bg-transparent">
                  Cancel
                </Button>
                <Button variant="outline" className="flex-1 h-12 bg-transparent">
                  Save as draft
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Modal */}
      <CustomModal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Submit Your Course for Review</h2>
          <div className="text-gray-600 mb-6">
            Your course will be reviewed by our team to ensure it meets our quality standards. Once approved, it will be
            published and available for gig workers to enroll.
          </div>
          <div className="flex flex-col md:flex-row w-full gap-2">
            <button
              onClick={() => setShowModal(false)}
              className="py-3 px-4 rounded-lg w-full flex-shrink bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmitForReview}
              className="py-3 px-4 rounded-lg w-full flex-shrink bg-[#4ECDC4] hover:bg-[#45b8b1] text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </CustomModal>
    </div>
  )
}
