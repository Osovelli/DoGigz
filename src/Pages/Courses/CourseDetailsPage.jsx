import { useState, useEffect } from "react"
import OneOnOneCourseDetail from "@/components/one-on-one-course-detail"
import SelfPacedCourseDetail from "@/components/self-paced-course-detail"

export default function Home() {
  const [courseData, setCourseData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Simulate fetching course data from API
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true)

        // Simulate API call - In real app, this would be:
        // const response = await fetch(`/api/courses/${courseId}`)
        // const data = await response.json()

        // Mock API response
        const mockApiResponse = {
          id: "course-123",
          title: "Introduction to Graphic Design",
          price: "120,000",
          type: "1-on-1", // This determines which component to show: "1-on-1" or "self-paced"
          image: "/placeholder.svg?height=400&width=800&text=Course+Hero+Image",
          tags: ["UX Design", "Graphics Design", "Product Design"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi libero, sagittis vitae sem in, tincidunt consequat nibh. Mauris rhoncus magna ac nibh convallis posuere. Ut rutrum velit non sem bibendum, vitae mollis sem dapibus. Nam nisl lacus, tincidunt aliquam eros ac, tempor rhoncus tellus. Nam pharetra, mauris nec ultrices auctor",
          tutor: {
            name: "John Doe",
            rating: 3.5,
            reviews: 128,
            avatar: "/placeholder.svg?height=40&width=40&text=JD",
          },
          rating: 4.5,
          totalReviews: 522,
        }

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setCourseData(mockApiResponse)
      } catch (err) {
        setError("Failed to load course data")
        console.error("Error fetching course:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchCourseData()
  }, []) // In real app, add courseId dependency: [courseId]

  // Demo function to simulate different course types
  const switchCourseType = (type) => {
    setCourseData((prev) => ({ ...prev, type }))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4ECDC4] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#4ECDC4] text-white rounded-lg hover:bg-[#45b8b1]"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (!courseData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Course not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Demo Toggle - Remove in production */}
        <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800 mb-2">
            <strong>Demo:</strong> In production, course type comes from API response. Current type:{" "}
            <strong>{courseData.type}</strong>
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => switchCourseType("1-on-1")}
              className={`px-3 py-1 text-sm rounded ${courseData.type === "1-on-1" ? "bg-[#4ECDC4] text-white" : "bg-gray-200"}`}
            >
              Simulate 1-on-1
            </button>
            <button
              onClick={() => switchCourseType("self-paced")}
              className={`px-3 py-1 text-sm rounded ${courseData.type === "self-paced" ? "bg-[#4ECDC4] text-white" : "bg-gray-200"}`}
            >
              Simulate Self-Paced
            </button>
          </div>
        </div>

        {/* Conditional rendering based on course type from API */}
        {courseData.type === "1-on-1" ? (
          <OneOnOneCourseDetail courseData={courseData} />
        ) : courseData.type === "self-paced" ? (
          <SelfPacedCourseDetail courseData={courseData} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">Unsupported course type: {courseData.type}</p>
          </div>
        )}
      </div>
    </div>
  )
}
