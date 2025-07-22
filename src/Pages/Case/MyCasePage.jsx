import { useState } from "react"
import { Search, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function MyCasePage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("gigs")
  const [activeGigStatus, setActiveGigStatus] = useState("ongoing")
  const [activeCourseStatus, setActiveCourseStatus] = useState("ongoing")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  // Sample gig data
  const gigData = [
    {
      id: 1,
      title: "Virtual Assistance for Data Entry and Scheduling Tasks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fam...",
      price: 1120,
      status: "ongoing",
      tags: ["Virtual Assistant", "Data Entry", "Scheduling"],
      type: "gig",
    },
    {
      id: 2,
      title: "Dog Walker Needed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fam...",
      price: 850,
      status: "completed",
      tags: ["Pet Care", "Walking", "Part-time"],
      type: "gig",
    },
    {
      id: 3,
      title: "Looking for Delivery Driver",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fam...",
      price: 2500,
      status: "ongoing",
      tags: ["Delivery", "Driver", "Transportation"],
      type: "gig",
    },
    {
      id: 4,
      title: "Math Tutor Required",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fam...",
      price: 1800,
      status: "completed",
      tags: ["Education", "Math", "Tutoring"],
      type: "gig",
    },
  ]

  // Sample course data
  const courseData = [
    {
      id: 1,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fam...",
      price: 299,
      status: "ongoing",
      tags: ["Data Analytics", "Google", "Certification"],
      type: "course",
      progress: 65,
    },
    {
      id: 2,
      title: "Mastering Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fam...",
      price: 199,
      status: "completed",
      tags: ["Digital Marketing", "SEO", "Social Media"],
      type: "course",
      progress: 100,
    },
    {
      id: 3,
      title: "Photography & Photo Editing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fam...",
      price: 149,
      status: "ongoing",
      tags: ["Photography", "Photo Editing", "Creative"],
      type: "course",
      progress: 30,
    },
    {
      id: 4,
      title: "Design Fundamentals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fam...",
      price: 249,
      status: "completed",
      tags: ["UX Design", "Graphics Design", "Product Design"],
      type: "course",
      progress: 100,
    },
  ]

  // Get current data based on active tab
  const getCurrentData = () => {
    return activeTab === "gigs" ? gigData : courseData
  }

  // Get current status based on active tab
  const getCurrentStatus = () => {
    return activeTab === "gigs" ? activeGigStatus : activeCourseStatus
  }

  // Filter data based on active status and search query
  const filteredData = getCurrentData().filter((item) => {
    return (
      item.status === getCurrentStatus() &&
      (searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setCurrentPage(1) // Reset to first page when switching tabs
    setSearchQuery("") // Clear search when switching tabs
  }

  // Handle status change
  const handleStatusChange = (status) => {
    if (activeTab === "gigs") {
      setActiveGigStatus(status)
    } else {
      setActiveCourseStatus(status)
    }
    setCurrentPage(1) // Reset to first page when changing status
  }

  // Handle view item click
  const handleViewItem = (itemId, itemTitle) => {
    if (activeTab === "gigs") {
      navigate(`/dashboard/gig-detail/${itemId}`, { state: { gigTitle: itemTitle } })
    } else {
      navigate(`/dashboard/course-detail/${itemId}`, { state: { courseTitle: itemTitle } })
    }
  }

  // Render gig card
  const renderGigCard = (item) => (
    <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-lg">{item.title}</h3>
        {item.status === "completed" && <span className="text-green-600 text-sm">Completed</span>}
        {item.status === "ongoing" && <span className="text-blue-600 text-sm">Ongoing</span>}
      </div>
      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag, index) => (
          <span key={index} className="text-xs bg-gray-100 px-3 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">
          ${item.price.toLocaleString()}
          <span className="text-sm font-normal">.00</span>
        </p>
        <button
          className="text-sm px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
          onClick={() => handleViewItem(item.id, item.title)}
        >
          View Gig
        </button>
      </div>
    </div>
  )

  // Render course card
  const renderCourseCard = (item) => (
    <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-lg">{item.title}</h3>
        <div className="flex items-center gap-2">
          {item.status === "completed" && <span className="text-green-600 text-sm">Completed</span>}
          {item.status === "ongoing" && <span className="text-blue-600 text-sm">In Progress</span>}
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{item.description}</p>

      {/* Progress Bar for Courses */}
      {item.status === "ongoing" && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-500">Progress</span>
            <span className="text-xs text-gray-500">{item.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag, index) => (
          <span key={index} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">
          ${item.price.toLocaleString()}
          <span className="text-sm font-normal">.00</span>
        </p>
        <button
          className="text-sm px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
          onClick={() => handleViewItem(item.id, item.title)}
        >
          {item.status === "ongoing" ? "Continue Course" : "View Course"}
        </button>
      </div>
    </div>
  )

  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">My Case</h1>
        <p className="text-gray-600">Track and manage all your ongoing gigs and courses in one place.</p>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <Button
            variant={activeTab === "gigs" ? "default" : "outline"}
            className={`rounded-full ${activeTab === "gigs" ? "bg-black text-white" : ""}`}
            onClick={() => handleTabChange("gigs")}
          >
            Gigs ({gigData.length})
          </Button>
          <Button
            variant={activeTab === "courses" ? "default" : "outline"}
            className={`rounded-full ${activeTab === "courses" ? "bg-black text-white" : ""}`}
            onClick={() => handleTabChange("courses")}
          >
            Courses ({courseData.length})
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8e9d5] focus:border-transparent"
          />
        </div>
      </div>

      {/* Status Tabs */}
      <div className="mb-6">
        <div className="flex space-x-2 border-b border-gray-200">
          <button
            className={`px-4 py-2 font-medium ${
              getCurrentStatus() === "ongoing"
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleStatusChange("ongoing")}
          >
            {activeTab === "gigs" ? "Ongoing Gigs" : "In Progress"}
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              getCurrentStatus() === "completed"
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleStatusChange("completed")}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="space-y-4">
        {paginatedData.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              {activeTab === "gigs" ? (
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6"
                  />
                </svg>
              ) : (
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              )}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No {getCurrentStatus()} {activeTab} found
            </h3>
            <p className="text-gray-500">
              {searchQuery
                ? `No ${activeTab} match your search criteria.`
                : `You don't have any ${getCurrentStatus()} ${activeTab} yet.`}
            </p>
          </div>
        ) : (
          paginatedData.map((item) => (activeTab === "gigs" ? renderGigCard(item) : renderCourseCard(item)))
        )}
      </div>

      {/* Pagination */}
      {filteredData.length > 0 && (
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Page {currentPage} of {totalPages} • {filteredData.length} {activeTab} found
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-md border border-gray-300 disabled:opacity-50 hover:bg-gray-50"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: Math.min(5, totalPages) }).map((_, index) => {
              const pageNumber = index + 1
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-8 h-8 flex items-center justify-center rounded-md ${
                    currentPage === pageNumber ? "bg-gray-200 font-medium" : "border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {pageNumber}
                </button>
              )
            })}
            {totalPages > 5 && <span className="mx-1">...</span>}
            {totalPages > 5 && (
              <button
                onClick={() => handlePageChange(totalPages)}
                className={`w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50`}
              >
                {totalPages}
              </button>
            )}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-md border border-gray-300 disabled:opacity-50 hover:bg-gray-50"
            >
              <ChevronRight size={16} />
            </button>
            <div className="ml-4 relative">
              <select
                value={`${itemsPerPage} / page`}
                onChange={(e) => {
                  // Handle items per page change if needed
                }}
                className="appearance-none pl-3 pr-8 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8e9d5] focus:border-transparent"
              >
                <option value="8 / page">8 / page</option>
                <option value="16 / page">16 / page</option>
                <option value="24 / page">24 / page</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown size={14} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
