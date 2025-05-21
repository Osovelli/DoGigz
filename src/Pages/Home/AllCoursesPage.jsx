import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Search, Filter, Users, Clock, Star, X } from "lucide-react"
import CourseFilter from "@/components/App/CourseFilter"

export default function AllCoursesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState(null)
  const [filteredCourses, setFilteredCourses] = useState([])
  const totalPages = 16

  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Google Data Analytics Course",
      image: "/image 3.png",
      courseType: "Self Paced Course",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucib.",
    },
    {
      id: 2,
      title: "Google Data Analytics Course",
      image: "/image 2.png",
      courseType: "Self Paced Course",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucib.",
    },
    {
      id: 3,
      title: "Google Data Analytics Course",
      image: "/image 5.1.png",
      courseType: "Self Paced Course",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucib.",
    },
    {
      id: 4,
      title: "Google Data Analytics Course",
      image: "/Image 6.png",
      courseType: "Self Paced Course",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucib.",
    },
    {
      id: 5,
      title: "Google Data Analytics Course",
      image: "/smiling.png",
      courseType: "Self Paced Course",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucib.",
    },
    {
      id: 6,
      title: "Google Data Analytics Course",
      image: "/colleagues.png",
      courseType: "Self Paced Course",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucib.",
    },
    {
      id: 7,
      title: "Google Data Analytics Course",
      image: "/music image.png",
      courseType: "Self Paced Course",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucib.",
    },
    {
      id: 8,
      title: "Google Data Analytics Course",
      image: "/Frame 1.png",
      courseType: "Self Paced Course",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucib.",
    },
    {
      id: 9,
      title: "Google Data Analytics Course",
      image: "/placeholder.svg?height=200&width=400",
      courseType: "Self Paced Course",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames ac ante ipsum primis in faucib.",
    },
  ]

  // Initialize filtered courses with all courses
  useEffect(() => {
    setFilteredCourses(courses)
  }, [])

  // Apply filters when activeFilters changes
  useEffect(() => {
    if (!activeFilters) {
      setFilteredCourses(courses)
      return
    }

    const filtered = courses.filter((course) => {
      // Filter by price
      if (course.price < activeFilters.priceRange[0] / 1000 || course.price > activeFilters.priceRange[1] / 1000) {
        return false
      }

      // Filter by rating
      if (course.rating < activeFilters.rating) {
        return false
      }

      // Filter by course type
      if (activeFilters.courseTypes.length > 0 && !activeFilters.courseTypes.includes(course.courseType)) {
        return false
      }

      // Filter by category
      if (activeFilters.categories.length > 0 && !activeFilters.categories.includes(course.category)) {
        return false
      }

      return true
    })

    setFilteredCourses(filtered)
  }, [activeFilters])

  // Handle filter application
  const handleApplyFilters = (filters) => {
    setActiveFilters(filters)
    setCurrentPage(1) // Reset to first page when filters change
  }


  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      // If total pages is less than or equal to max visible pages, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // Always include first page
      pageNumbers.push(1)

      // Calculate start and end of visible page range
      let startPage = Math.max(2, currentPage - 1)
      let endPage = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if we're near the beginning or end
      if (currentPage <= 2) {
        endPage = 4
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 3
      }

      // Add ellipsis if needed before middle pages
      if (startPage > 2) {
        pageNumbers.push("...")
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }

      // Add ellipsis if needed after middle pages
      if (endPage < totalPages - 1) {
        pageNumbers.push("...")
      }

      // Always include last page
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo(0, 0)
    }
  }

  // Get active filter count
  const getActiveFilterCount = () => {
    if (!activeFilters) return 0

    let count = 0
    if (activeFilters.priceRange[0] > 0 || activeFilters.priceRange[1] < 1000000) count++
    if (activeFilters.rating > 0) count++
    if (activeFilters.courseTypes.length > 0) count++
    if (activeFilters.categories.length > 0) count++
    if (activeFilters.startDate !== "Anytime") count++

    return count
  }


  return (
    <div className="p-4 lg:p-6 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Courses</h1>
        <Link to="/course-history" className="text-gray-600 hover:underline">
          Course History
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8e9d5] focus:border-transparent"
          />
        </div>
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 relative"
        >
          <Filter size={18} />
          <span>Filter</span>
          {getActiveFilterCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#a8e9d5] text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {getActiveFilterCount()}
            </span>
          )}
        </button>
      </div>

      {/* Active Filters */}
      {activeFilters && getActiveFilterCount() > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {activeFilters.priceRange[0] > 0 || activeFilters.priceRange[1] < 1000000 ? (
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <span>
                Price: ₦{activeFilters.priceRange[0].toLocaleString()} - ₦{activeFilters.priceRange[1].toLocaleString()}
              </span>
              <button
                onClick={() => {
                  setActiveFilters({
                    ...activeFilters,
                    priceRange: [0, 1000000],
                  })
                }}
                className="ml-1 text-gray-500 hover:text-gray-700"
              >
                <X size={14} />
              </button>
            </div>
          ) : null}

          {activeFilters.rating > 0 && (
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <span>Rating: {activeFilters.rating}+ ★</span>
              <button
                onClick={() => {
                  setActiveFilters({
                    ...activeFilters,
                    rating: 0,
                  })
                }}
                className="ml-1 text-gray-500 hover:text-gray-700"
              >
                <X size={14} />
              </button>
            </div>
          )}

          {activeFilters.courseTypes.length > 0 && (
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <span>Type: {activeFilters.courseTypes.join(", ")}</span>
              <button
                onClick={() => {
                  setActiveFilters({
                    ...activeFilters,
                    courseTypes: [],
                  })
                }}
                className="ml-1 text-gray-500 hover:text-gray-700"
              >
                <X size={14} />
              </button>
            </div>
          )}

          {activeFilters.categories.length > 0 && (
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <span>Category: {activeFilters.categories.join(", ")}</span>
              <button
                onClick={() => {
                  setActiveFilters({
                    ...activeFilters,
                    categories: [],
                  })
                }}
                className="ml-1 text-gray-500 hover:text-gray-700"
              >
                <X size={14} />
              </button>
            </div>
          )}

          {activeFilters.startDate !== "Anytime" && (
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <span>{activeFilters.startDate}</span>
              <button
                onClick={() => {
                  setActiveFilters({
                    ...activeFilters,
                    startDate: "Anytime",
                  })
                }}
                className="ml-1 text-gray-500 hover:text-gray-700"
              >
                <X size={14} />
              </button>
            </div>
          )}

          <button onClick={() => setActiveFilters(null)} className="text-sm text-gray-600 hover:underline">
            Clear all
          </button>
        </div>
      )}


      {/* Course Grid - Desktop View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredCourses.slice(0, itemsPerPage).map((course) => (
          <div key={course.id} className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <div className="relative">
              <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
              <div className="absolute top-3 left-3 bg-white/90 text-xs px-2 py-1 rounded-md">{course.courseType}</div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg mb-3">{course.title}</h3>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{course.learners} learners</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{course.hours} hrs</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-400" />
                  <span>
                    {course.rating} ({course.ratingCount})
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">
                  ${course.price}
                  <span className="text-sm font-normal">.00</span>
                </p>
                <button className="text-sm px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-50">
                  View Course
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Course List - Mobile View */}
      <div className="md:hidden space-y-4 mb-8">
        {filteredCourses.slice(0, itemsPerPage).map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg overflow-hidden border border-gray-200 flex flex-col sm:flex-row"
          >
            <div className="relative sm:w-1/3">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-48 sm:h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/90 text-xs px-2 py-1 rounded-md">{course.courseType}</div>
            </div>
            <div className="p-4 sm:w-2/3">
              <h3 className="font-medium text-lg mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{course.description}</p>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{course.learners} learners</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{course.hours} hrs</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-400" />
                  <span>
                    {course.rating} ({course.ratingCount})
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">
                  ${course.price}
                  <span className="text-sm font-normal">.00</span>
                </p>
                <button className="text-sm px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-50">
                  View Course
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Course List - Mobile View */}
      <div className="md:hidden space-y-4 mb-8">
        {filteredCourses.slice(0, itemsPerPage).map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg overflow-hidden border border-gray-200 flex flex-col sm:flex-row"
          >
            <div className="relative sm:w-1/3">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-48 sm:h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/90 text-xs px-2 py-1 rounded-md">{course.courseType}</div>
            </div>
            <div className="p-4 sm:w-2/3">
              <h3 className="font-medium text-lg mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{course.description}</p>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{course.learners} learners</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{course.hours} hrs</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-400" />
                  <span>
                    {course.rating} ({course.ratingCount})
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">
                  ${course.price}
                  <span className="text-sm font-normal">.00</span>
                </p>
                <button className="text-sm px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-50">
                  View Course
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredCourses.length === 0 && (
        <div className="bg-white rounded-lg p-8 text-center">
          <h3 className="text-lg font-medium mb-2">No courses found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
          <button onClick={() => setActiveFilters(null)} className="px-4 py-2 bg-[#a8e9d5] rounded-md text-black">
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4">
        <div className="text-sm text-gray-500 mb-4 sm:mb-0">
          Page {currentPage} of {totalPages}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => (typeof page === "number" ? handlePageChange(page) : null)}
              className={`w-8 h-8 flex items-center justify-center rounded-md ${
                currentPage === page ? "bg-[#a8e9d5] text-black font-medium" : "border border-gray-300 hover:bg-gray-50"
              } ${typeof page !== "number" ? "cursor-default" : ""}`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div className="ml-4 relative">
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="appearance-none pl-3 pr-8 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8e9d5] focus:border-transparent"
            >
              <option value={8}>8 / page</option>
              <option value={12}>12 / page</option>
              <option value={16}>16 / page</option>
              <option value={24}>24 / page</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Filter Sheet */}
      <CourseFilter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} onApplyFilters={handleApplyFilters} />
    </div>
  )
}
