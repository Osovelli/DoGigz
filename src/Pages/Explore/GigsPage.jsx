import { useState } from "react"
import { Search, ChevronDown, ChevronUp } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function GigsPage() {
  // Filter states
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFilters, setExpandedFilters] = useState({
    gigCategory: true,
    price: true,
    timePosted: true,
    skills: false,
    experience: false,
  })
  const [selectedCategories, setSelectedCategories] = useState({
    Analyst: false,
    "Backend Developer": true,
    "Business Development": false,
    "Customer Service": false,
    "Frontend Developer": false,
    "UX Designer": false,
    "Product Manager": false,
  })
  const [priceRange, setPriceRange] = useState({ min: "", max: "" })
  const [timePosted, setTimePosted] = useState({
    "last 24 hours": false,
    "3 days ago": false,
    "1 week": false,
    "1 Month": false,
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)

  // Sample gigs data
  const allGigs = [
    {
      id: 1,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames...",
      price: 1120,
      createdDays: 2,
      tags: ["UX Design", "Graphics Design", "Product Design"],
      category: "Backend Developer",
    },
    {
      id: 2,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames...",
      price: 1120,
      createdDays: 2,
      tags: ["UX Design", "Graphics Design", "Product Design"],
      category: "Backend Developer",
    },
    {
      id: 3,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames...",
      price: 1120,
      createdDays: 2,
      tags: ["UX Design", "Graphics Design", "Product Design"],
      category: "Analyst",
    },
    {
      id: 4,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames...",
      price: 1120,
      createdDays: 5,
      tags: ["UX Design", "Graphics Design", "Product Design"],
      category: "Business Development",
    },
    {
      id: 5,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames...",
      price: 1120,
      createdDays: 2,
      tags: ["UX Design", "Graphics Design", "Product Design"],
      category: "Customer Service",
    },
    {
      id: 6,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames...",
      price: 1120,
      createdDays: 2,
      tags: ["UX Design", "Graphics Design", "Product Design"],
      category: "Frontend Developer",
    },
    {
      id: 7,
      title: "Google Data Analytics Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus. Quisque eget tellus nec mi venenatis condimentum. Sed rhoncus pellentesque bibendum. Curabitur a lacinia tellus. Interdum et malesuada fames...",
      price: 1120,
      createdDays: 2,
      tags: ["UX Design", "Graphics Design", "Product Design"],
      category: "UX Designer",
    },
  ]

  // Filter gigs based on selected filters
  const filteredGigs = allGigs.filter((gig) => {
    // Search query filter
    if (searchQuery && !gig.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Category filter
    const selectedCategoryKeys = Object.keys(selectedCategories).filter((key) => selectedCategories[key])
    if (selectedCategoryKeys.length > 0 && !selectedCategoryKeys.includes(gig.category)) {
      return false
    }

    // Price range filter
    if (priceRange.min && gig.price < Number.parseInt(priceRange.min)) {
      return false
    }
    if (priceRange.max && gig.price > Number.parseInt(priceRange.max)) {
      return false
    }

    // Time posted filter
    const selectedTimeKeys = Object.keys(timePosted).filter((key) => timePosted[key])
    if (selectedTimeKeys.length > 0) {
      if (selectedTimeKeys.includes("last 24 hours") && gig.createdDays > 1) {
        return false
      }
      if (selectedTimeKeys.includes("3 days ago") && gig.createdDays > 3) {
        return false
      }
      if (selectedTimeKeys.includes("1 week") && gig.createdDays > 7) {
        return false
      }
      if (selectedTimeKeys.includes("1 Month") && gig.createdDays > 30) {
        return false
      }
    }

    return true
  })

  // Pagination
  const indexOfLastGig = currentPage * itemsPerPage
  const indexOfFirstGig = indexOfLastGig - itemsPerPage
  const currentGigs = filteredGigs.slice(indexOfFirstGig, indexOfLastGig)
  const totalPages = Math.ceil(filteredGigs.length / itemsPerPage)

  // Toggle filter sections
  const toggleFilter = (filter) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }))
  }

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  // Handle time posted selection
  const handleTimePostedChange = (time) => {
    setTimePosted((prev) => ({
      ...prev,
      [time]: !prev[time],
    }))
  }

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery("")
    setSelectedCategories(
      Object.keys(selectedCategories).reduce((acc, key) => {
        acc[key] = false
        return acc
      }, {}),
    )
    setPriceRange({ min: "", max: "" })
    setTimePosted(
      Object.keys(timePosted).reduce((acc, key) => {
        acc[key] = false
        return acc
      }, {}),
    )
  }

  // Apply filters
  const applyFilters = () => {
    // Filters are already applied in real-time
    // This function can be used for additional actions when applying filters
  }

  // Count selected filters
  const getSelectedFilterCount = () => {
    let count = 0

    // Count selected categories
    count += Object.values(selectedCategories).filter(Boolean).length

    // Count price range if set
    if (priceRange.min || priceRange.max) count += 1

    // Count selected time posted options
    count += Object.values(timePosted).filter(Boolean).length

    return count
  }

  // Get category count
  const getCategoryCount = (category) => {
    return allGigs.filter((gig) => gig.category === category).length
  }

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <div className="p-4 lg:p-6">
      <h1 className="text-3xl font-bold mb-6">Explore</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Gig Listings */}
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

          {/* Gig Listings */}
          <div className="space-y-4">
            {currentGigs.map((gig) => (
              <div key={gig.id} className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="text-xs text-green-600 mb-2">Created {gig.createdDays} days ago</div>
                <h3 className="font-medium text-lg mb-2">{gig.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{gig.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {gig.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    ${gig.price}
                    <span className="text-sm font-normal">.00</span>
                  </p>
                  <button className="text-sm px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-50">
                    View Gig
                  </button>
                </div>
              </div>
            ))}

            {/* No Results Message */}
            {filteredGigs.length === 0 && (
              <div className="bg-white rounded-lg p-8 text-center">
                <h3 className="text-lg font-medium mb-2">No gigs found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
                <button onClick={clearAllFilters} className="px-4 py-2 bg-[#a8e9d5] rounded-md text-black">
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredGigs.length > 0 && (
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  Page {currentPage} of {totalPages} ({filteredGigs.length} gigs)
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
              {getSelectedFilterCount() > 0 && (
                <span className="text-xs bg-[#a8e9d5] text-black px-2 py-1 rounded-full">
                  {getSelectedFilterCount()} selected
                </span>
              )}
            </div>

            {/* Gig Category Filter */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFilter("gigCategory")}
              >
                <h3 className="font-medium">Gig Category</h3>
                {expandedFilters.gigCategory ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {expandedFilters.gigCategory && (
                <div className="mt-3 space-y-2">
                  {Object.keys(selectedCategories).map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories[category]}
                        onCheckedChange={() => handleCategoryChange(category)}
                        className="data-[state=checked]:bg-[#a8e9d5] data-[state=checked]:text-black border-gray-300"
                      />
                      <Label htmlFor={`category-${category}`} className="flex-1">
                        {category} <span className="text-gray-500">({getCategoryCount(category)})</span>
                      </Label>
                    </div>
                  ))}
                  <button className="text-[#a8e9d5] hover:underline text-sm">See all</button>
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

            {/* Time Posted Filter */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFilter("timePosted")}
              >
                <h3 className="font-medium">Time Posted</h3>
                {expandedFilters.timePosted ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {expandedFilters.timePosted && (
                <div className="mt-3 space-y-2">
                  {Object.keys(timePosted).map((time) => (
                    <div key={time} className="flex items-center space-x-2">
                      <Checkbox
                        id={`time-${time}`}
                        checked={timePosted[time]}
                        onCheckedChange={() => handleTimePostedChange(time)}
                        className="data-[state=checked]:bg-[#a8e9d5] data-[state=checked]:text-black border-gray-300"
                      />
                      <Label htmlFor={`time-${time}`} className="flex-1">
                        {time}
                      </Label>
                    </div>
                  ))}
                </div>
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
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="skill-javascript"
                      className="data-[state=checked]:bg-[#a8e9d5] data-[state=checked]:text-black border-gray-300"
                    />
                    <Label htmlFor="skill-javascript" className="flex-1">
                      JavaScript <span className="text-gray-500">(24)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="skill-python"
                      className="data-[state=checked]:bg-[#a8e9d5] data-[state=checked]:text-black border-gray-300"
                    />
                    <Label htmlFor="skill-python" className="flex-1">
                      Python <span className="text-gray-500">(18)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="skill-react"
                      className="data-[state=checked]:bg-[#a8e9d5] data-[state=checked]:text-black border-gray-300"
                    />
                    <Label htmlFor="skill-react" className="flex-1">
                      React <span className="text-gray-500">(15)</span>
                    </Label>
                  </div>
                  <button className="text-[#a8e9d5] hover:underline text-sm">See all</button>
                </div>
              )}
            </div>

            {/* Experience Level Filter */}
            <div className="mb-6">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFilter("experience")}
              >
                <h3 className="font-medium">Experience Level</h3>
                {expandedFilters.experience ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {expandedFilters.experience && (
                <div className="mt-3 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="exp-entry"
                      className="data-[state=checked]:bg-[#a8e9d5] data-[state=checked]:text-black border-gray-300"
                    />
                    <Label htmlFor="exp-entry" className="flex-1">
                      Entry Level <span className="text-gray-500">(42)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="exp-intermediate"
                      className="data-[state=checked]:bg-[#a8e9d5] data-[state=checked]:text-black border-gray-300"
                    />
                    <Label htmlFor="exp-intermediate" className="flex-1">
                      Intermediate <span className="text-gray-500">(28)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="exp-expert"
                      className="data-[state=checked]:bg-[#a8e9d5] data-[state=checked]:text-black border-gray-300"
                    />
                    <Label htmlFor="exp-expert" className="flex-1">
                      Expert <span className="text-gray-500">(15)</span>
                    </Label>
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
