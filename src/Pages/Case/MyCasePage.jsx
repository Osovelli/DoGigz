import { useState } from "react"
import { Search, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function MyCasePage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("gigs")
  const [activeStatus, setActiveStatus] = useState("ongoing")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  // Sample case data
  const caseData = [
    {
      id: 1,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fam...",
      price: 1120,
      status: "completed",
      tags: ["UX Design", "Graphics Design", "Product Design"],
    },
    {
      id: 2,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fam...",
      price: 1120,
      status: "completed",
      tags: ["UX Design", "Graphics Design", "Product Design"],
    },
    {
      id: 3,
      title: "Virtual Assistance for Data Entry and Scheduling Tasks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fam...",
      price: 1120,
      status: "completed",
      tags: ["UX Design", "Graphics Design", "Product Design"],
    },
    {
      id: 4,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fam...",
      price: 1120,
      status: "completed",
      tags: ["UX Design", "Graphics Design", "Product Design"],
    },
    {
      id: 5,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fam...",
      price: 1120,
      status: "ongoing",
      tags: ["UX Design", "Graphics Design", "Product Design"],
    },
  ]

  // Filter data based on active status and search query
  const filteredData = caseData.filter((item) => {
    return (
      item.status === activeStatus &&
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

  // Handle view gig click
  const handleViewGig = (gigId, gigTitle) => {
    // Navigate to the gig detail page with the gig ID
    navigate(`/gig-detail/${gigId}`, { state: { gigTitle } })
  }

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
            onClick={() => setActiveTab("gigs")}
          >
            Gigs
          </Button>
          <Button
            variant={activeTab === "courses" ? "default" : "outline"}
            className={`rounded-full ${activeTab === "courses" ? "bg-black text-white" : ""}`}
            onClick={() => setActiveTab("courses")}
          >
            Courses
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
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
              activeStatus === "ongoing" ? "border-b-2 border-black text-black" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveStatus("ongoing")}
          >
            Ongoing
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeStatus === "completed" ? "border-b-2 border-black text-black" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveStatus("completed")}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Case Items */}
      <div className="space-y-4">
        {paginatedData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-lg">{item.title}</h3>
              {item.status === "completed" && <span className="text-green-600 text-sm">Completed</span>}
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
                className="text-sm px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-50"
                onClick={() => handleViewGig(item.id, item.title)}
              >
                View Gig
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {filteredData.length > 0 && (
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-md border border-gray-300 disabled:opacity-50"
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
              className="p-2 rounded-md border border-gray-300 disabled:opacity-50"
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
