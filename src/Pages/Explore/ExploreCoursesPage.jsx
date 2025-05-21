import { useState } from "react"
import { Search, Users, Clock, Star, ChevronDown, ChevronUp, Check } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ExploreCoursesPage() {
  // Filter states
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFilters, setExpandedFilters] = useState({
    skills: true,
    courseType: true,
    price: true,
    rating: true,
    startDate: true,
  })
  const [selectedSkills, setSelectedSkills] = useState({
    "Analyst": false,
    "Backend Developer": true,
    "Business Development": false,
    "Customer Service": false,
    "Frontend Developer": false,
    "UX Designer": false,
    "Product Manager": false,
  })
  const [courseType, setCourseType] = useState({
    "1-On-1": false,
    "Self Pace": true,
  })
  const [priceRange, setPriceRange] = useState({ min: "", max: "" })
  const [selectedRating, setSelectedRating] = useState(0)
  const [startDate, setStartDate] = useState("Anytime")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  // Sample courses data
  const allCourses = [
    {
      id: 1,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pell...",
      image: "Image 1.png",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      skills: ["Backend Developer"],
      type: "Self Pace",
    },
    {
      id: 2,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pell...",
      image: "image 2.png",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      skills: ["Backend Developer"],
      type: "Self Pace",
    },
    {
      id: 3,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pell...",
      image: "image 3.png",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      skills: ["Analyst"],
      type: "1-On-1",
    },
    {
      id: 4,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pell...",
      image: "Image 4.png",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      skills: ["Business Development"],
      type: "Self Pace",
    },
    {
      id: 5,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pell...",
      image: "Image 6.png",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      skills: ["Customer Service"],
      type: "Self Pace",
    },
    {
      id: 6,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pell...",
      image: "image 8.jpg",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      skills: ["Frontend Developer"],
      type: "1-On-1",
    },
    {
      id: 7,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pell...",
      image: "illustration.png",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      skills: ["UX Designer"],
      type: "Self Pace",
    },
    {
      id: 8,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pell...",
      image: "colleagues.png",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      skills: ["Product Manager"],
      type: "Self Pace",
    },
    {
      id: 9,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pell...",
      image: "image 5.1.png",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      skills: ["Backend Developer"],
      type: "Self Pace",
    },
    {
      id: 10,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pell...",
      image: "Image 1.png",
      learners: "2k",
      hours: 20,
      rating: 3.5,
      ratingCount: 128,
      price: 98,
      skills: ["Backend Developer"],
      type: "1-On-1",
    },
  ]

  // Filter courses based on selected filters
  const filteredCourses = allCourses.filter((course) => {
    // Search query filter
    if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Skills filter
    const selectedSkillKeys = Object.keys(selectedSkills).filter((key) => selectedSkills[key])
    if (selectedSkillKeys.length > 0 && !course.skills.some((skill) => selectedSkillKeys.includes(skill))) {
      return false
    }

    // Course type filter
    const selectedTypeKeys = Object.keys(courseType).filter((key) => courseType[key])
    if (selectedTypeKeys.length > 0 && !selectedTypeKeys.includes(course.type)) {
      return false
    }

    // Price range filter
    if (priceRange.min && course.price < Number.parseInt(priceRange.min)) {
      return false
    }
    if (priceRange.max && course.price > Number.parseInt(priceRange.max)) {
      return false
    }

    // Rating filter
    if (selectedRating > 0 && course.rating < selectedRating) {
      return false
    }

    // Start date filter (simplified for demo)
    if (startDate !== "Anytime") {
      // In a real app, you would check the course start date against the selected filter
      // For this demo, we'll just return true for all courses
    }

    return true
  })

  // Pagination
  const indexOfLastCourse = currentPage * itemsPerPage
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage)

  // Toggle filter sections
  const toggleFilter = (filter) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }))
  }

  // Handle skill selection
  const handleSkillChange = (skill) => {
    setSelectedSkills((prev) => ({
      ...prev,
      [skill]: !prev[skill],
    }))
  }

  // Handle course type selection
  const handleCourseTypeChange = (type) => {
    setCourseType((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  // Handle rating selection
  const handleRatingChange = (rating) => {
    setSelectedRating(rating === selectedRating ? 0 : rating)
  }

  // Handle start date selection
  const handleStartDateChange = (date) => {
    setStartDate(date)
  }

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery("")
    setSelectedSkills(
      Object.keys(selectedSkills).reduce((acc, key) => {
        acc[key] = false
        return acc
      }, {}),
    )
    setCourseType(
      Object.keys(courseType).reduce((acc, key) => {
        acc[key] = false
        return acc
      }, {}),
    )
    setPriceRange({ min: "", max: "" })
    setSelectedRating(0)
    setStartDate("Anytime")
  }

  // Apply filters
  const applyFilters = () => {
    // Filters are already applied in real-time
    // This function can be used for additional actions when applying filters
  }

  // Get skill count
  const getSkillCount = (skill) => {
    return allCourses.filter((course) => course.skills.includes(skill)).length
  }

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  // Get active filter count
  const getActiveFilterCount = () => {
    let count = 0

    // Count selected skills
    count += Object.values(selectedSkills).filter(Boolean).length

    // Count selected course types
    count += Object.values(courseType).filter(Boolean).length

    // Count price range if set
    if (priceRange.min || priceRange.max) count += 1

    // Count rating if set
    if (selectedRating > 0) count += 1

    // Count start date if not "Anytime"
    if (startDate !== "Anytime") count += 1

    return count
  }

  return (
    <div className="p-4 lg:p-6">
      <h1 className="text-3xl font-bold mb-6">Explore</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Course Listings */}
        <div className="lg:w-2/3">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8e9d5] focus:border-transparent"
            />
          </div>

          {/* Course Listings */}
          <div className="space-y-4">
            {currentCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg border border-gray-200 flex overflow-hidden">
                {/* Course Image */}
                <div className="w-1/3 max-w-[180px]">
                  <img
                    src={course.image || "/placeholder.svg?height=180&width=180"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Course Details */}
                <div className="p-4 flex-1">
                  <h3 className="font-medium text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{course.description}</p>

                  {/* Course Stats */}
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

                  {/* Price and View Button */}
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

            {/* No Results Message */}
            {filteredCourses.length === 0 && (
              <div className="bg-white rounded-lg p-8 text-center">
                <h3 className="text-lg font-medium mb-2">No courses found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
                <button onClick={clearAllFilters} className="px-4 py-2 bg-[#a8e9d5] rounded-md text-black">
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredCourses.length > 0 && (
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  Page {currentPage} of {totalPages} ({filteredCourses.length} courses)
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

                  {Array.from({ length: Math.min(5, totalPages) }).map((_, index) => {
                    const pageNumber = index + 1
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-8 h-8 flex items-center justify-center rounded-md ${
                          currentPage === pageNumber
                            ? "bg-[#a8e9d5] text-black font-medium"
                            : "border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    )
                  })}

                  {totalPages > 5 && <span className="mx-1">...</span>}

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
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Filters */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Filter</h2>
              {getActiveFilterCount() > 0 && (
                <span className="text-xs bg-[#a8e9d5] text-black px-2 py-1 rounded-full">
                  {getActiveFilterCount()} selected
                </span>
              )}
            </div>

            {/* Skills Filter */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFilter("skills")}>
                <h3 className="font-medium">Skills</h3>
                {expandedFilters.skills ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {expandedFilters.skills && (
                <div className="mt-3 space-y-2">
                  {Object.keys(selectedSkills).map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={`skill-${skill}`}
                        checked={selectedSkills[skill]}
                        onCheckedChange={() => handleSkillChange(skill)}
                        className="data-[state=checked]:bg-[#a8e9d5] data-[state=checked]:text-black border-gray-300"
                      />
                      <Label htmlFor={`skill-${skill}`} className="flex-1">
                        {skill} <span className="text-gray-500">({getSkillCount(skill)})</span>
                      </Label>
                    </div>
                  ))}
                  <button className="text-[#a8e9d5] hover:underline text-sm">See all</button>
                </div>
              )}
            </div>

            {/* Course Type Filter */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFilter("courseType")}
              >
                <h3 className="font-medium">Course Type</h3>
                {expandedFilters.courseType ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {expandedFilters.courseType && (
                <div className="mt-3">
                  <div className="flex flex-wrap gap-2">
                    <button
                      className={`px-4 py-2 rounded-md border ${
                        courseType["1-On-1"] ? "bg-white border-black" : "bg-white border-gray-300"
                      }`}
                      onClick={() => handleCourseTypeChange("1-On-1")}
                    >
                      1-On-1
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md border ${
                        courseType["Self Pace"] ? "bg-black text-white border-black" : "bg-white border-gray-300"
                      }`}
                      onClick={() => handleCourseTypeChange("Self Pace")}
                    >
                      Self Pace {courseType["Self Pace"] && <Check size={16} className="inline ml-1" />}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFilter("price")}>
                <h3 className="font-medium">Price</h3>
                {expandedFilters.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {expandedFilters.price && (
                <div className="mt-3">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Min"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                        className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8e9d5] focus:border-transparent"
                      />
                    </div>
                    <span className="text-gray-500">-</span>
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Max"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                        className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8e9d5] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Rating Filter */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFilter("rating")}>
                <h3 className="font-medium">Rating</h3>
                {expandedFilters.rating ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {expandedFilters.rating && (
                <div className="mt-3">
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleRatingChange(0)}
                      className={`text-sm px-2 py-1 ${selectedRating === 0 ? "font-medium" : ""}`}
                    >
                      Any
                    </button>
                    <button
                      onClick={() => handleRatingChange(2)}
                      className={`flex items-center ${selectedRating === 2 ? "font-medium" : ""}`}
                    >
                      <Star size={20} className={selectedRating >= 2 ? "text-yellow-400" : "text-gray-300"} />
                      <span className="ml-1">2 Star</span>
                    </button>
                    <button
                      onClick={() => handleRatingChange(3)}
                      className={`flex items-center ${selectedRating === 3 ? "font-medium" : ""}`}
                    >
                      <Star size={20} className={selectedRating >= 3 ? "text-yellow-400" : "text-gray-300"} />
                      <span className="ml-1">3 Star</span>
                    </button>
                    <button
                      onClick={() => handleRatingChange(4)}
                      className={`flex items-center ${selectedRating === 4 ? "font-medium" : ""}`}
                    >
                      <Star size={20} className={selectedRating >= 4 ? "text-yellow-400" : "text-gray-300"} />
                      <span className="ml-1">4 Star</span>
                    </button>
                    <button
                      onClick={() => handleRatingChange(5)}
                      className={`flex items-center ${selectedRating === 5 ? "font-medium" : ""}`}
                    >
                      <Star size={20} className={selectedRating >= 5 ? "text-yellow-400" : "text-gray-300"} />
                      <span className="ml-1">5 Star</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Start Date Filter */}
            <div className="mb-6">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFilter("startDate")}
              >
                <h3 className="font-medium">Start date</h3>
                {expandedFilters.startDate ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {expandedFilters.startDate && (
                <div className="mt-3 space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleStartDateChange("Anytime")}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        startDate === "Anytime" ? "bg-[#a8e9d5] text-black" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      Anytime
                    </button>
                    <button
                      onClick={() => handleStartDateChange("Starting in 24 hours")}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        startDate === "Starting in 24 hours" ? "bg-[#a8e9d5] text-black" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      Starting in 24 hours
                    </button>
                    <button
                      onClick={() => handleStartDateChange("Starting in a Week")}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        startDate === "Starting in a Week" ? "bg-[#a8e9d5] text-black" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      Starting in a Week
                    </button>
                    <button
                      onClick={() => handleStartDateChange("Starting in 1 Month")}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        startDate === "Starting in 1 Month" ? "bg-[#a8e9d5] text-black" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      Starting in 1 Month
                    </button>
                    <button
                      onClick={() => handleStartDateChange("Starting in 3 Month")}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        startDate === "Starting in 3 Month" ? "bg-[#a8e9d5] text-black" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      Starting in 3 Month
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Filter Action Buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 border-gray-300 hover:bg-gray-50 text-gray-700"
                onClick={clearAllFilters}
              >
                Clear All
              </Button>
              <Button className="flex-1 bg-[#a8e9d5] hover:bg-[#98d9c5] text-black" onClick={applyFilters}>
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
