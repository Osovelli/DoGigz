import { useState } from "react"
import CreateCourse from "@/components/Course/CreateCourse"
import AddSelfPacedContent from "@/components/Course/AddSelfPacedContent"
import AddOneOnOneContent from "@/components/Course/AddOneOnOneContent"
import PreviewSelfPacedCourse from "@/components/Course/PreviewSelfPacedCourse"
import PreviewOneOnOneCourse from "@/components/Course/PreviewOneOnOneCourse"

export default function CreateCoursePage() {
  const [currentStep, setCurrentStep] = useState("create")
  const [courseType, setCourseType] = useState("")
  const [courseData, setCourseData] = useState({})

  const handleCourseCreated = (data) => {
    setCourseData(data)
    setCourseType(data.courseType)

    if (data.courseType === "self-paced") {
      setCurrentStep("add-self-paced-content")
    } else if (data.courseType === "1-on-1") {
      setCurrentStep("add-one-on-one-content")
    }
  }

  const handleContentAdded = (contentData) => {
    setCourseData((prev) => ({ ...prev, ...contentData }))

    if (courseType === "self-paced") {
      setCurrentStep("preview-self-paced")
    } else if (courseType === "1-on-1") {
      setCurrentStep("preview-one-on-one")
    }
  }

  const handleBackToCreate = () => {
    setCurrentStep("create")
    setCourseType("")
    setCourseData({})
  }

  const handleBackToContent = () => {
    if (courseType === "self-paced") {
      setCurrentStep("add-self-paced-content")
    } else if (courseType === "1-on-1") {
      setCurrentStep("add-one-on-one-content")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentStep === "create" && <CreateCourse onCourseCreated={handleCourseCreated} />}

      {currentStep === "add-self-paced-content" && (
        <AddSelfPacedContent courseData={courseData} onContentAdded={handleContentAdded} onBack={handleBackToCreate} />
      )}

      {currentStep === "add-one-on-one-content" && (
        <AddOneOnOneContent courseData={courseData} onContentAdded={handleContentAdded} onBack={handleBackToCreate} />
      )}

      {currentStep === "preview-self-paced" && (
        <PreviewSelfPacedCourse courseData={courseData} onBack={handleBackToContent} />
      )}

      {currentStep === "preview-one-on-one" && (
        <PreviewOneOnOneCourse courseData={courseData} onBack={handleBackToContent} />
      )}
    </div>
  )
}
