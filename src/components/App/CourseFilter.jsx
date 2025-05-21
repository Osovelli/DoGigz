import { useState } from "react"
import { X, Check } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const CourseFilter = ({ isOpen, onClose, onApplyFilters }) => {
  // Price filter state
  const [priceRange, setPriceRange] = useState([100000])
  const [minPrice, setMinPrice] = useState("100,000")
  const [maxPrice, setMaxPrice] = useState("1,000,000")

  // Rating filter state
  const [rating, setRating] = useState(4)

  // Course type filter state
  const [courseTypes, setCourseTypes] = useState({
    "1-On-1": false,
    "Self Paced": true,
  })

  // Course category filter state
  const [categories, setCategories] = useState({
    Analyst: false,
    "Backend Developer": true,
    "Business Development": false,
    "Marketing & Communication": false,
    "Frontend Developer": false,
    "UX Designer": false,
    "Product Manager": false,
  })

  // Start date filter state
  const [startDate, setStartDate] = useState("Anytime")

  // Handle price slider change
  const handlePriceChange = (value) => {
    setPriceRange(value)
    setMinPrice(formatNumberWithCommas(value[0]))
  }

  // Format number with commas
  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  // Handle min price input change
  const handleMinPriceChange = (e) => {
    const value = e.target.value.replace(/,/g, "")
    if (value === "" || /^\d+$/.test(value)) {
      setMinPrice(formatNumberWithCommas(value))
      if (value !== "") {
        setPriceRange([Number.parseInt(value, 10)])
      }
    }
  }

  // Handle max price input change
  const handleMaxPriceChange = (e) => {
    const value = e.target.value.replace(/,/g, "")
    if (value === "" || /^\d+$/.test(value)) {
      setMaxPrice(formatNumberWithCommas(value))
    }
  }

  // Handle course type toggle
  const handleCourseTypeToggle = (type) => {
    setCourseTypes((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  // Handle category toggle
  const handleCategoryToggle = (category) => {
    setCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  // Handle apply filters
  const handleApplyFilters = () => {
    const filters = {
      priceRange: [Number.parseInt(minPrice.replace(/,/g, ""), 10), Number.parseInt(maxPrice.replace(/,/g, ""), 10)],
      rating,
      courseTypes: Object.keys(courseTypes).filter((type) => courseTypes[type]),
      categories: Object.keys(categories).filter((category) => categories[category]),
      startDate,
    }

    onApplyFilters(filters)
    onClose()
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="flex flex-row justify-between items-center mb-6">
          <SheetTitle>Filter</SheetTitle>
          {/* <SheetClose className="rounded-full h-8 w-8 flex items-center justify-center">
            <X size={18} />
          </SheetClose> */}
        </SheetHeader>

        <div className="space-y-8">
          {/* Price Filter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Price</h3>
            <Slider
              defaultValue={[100000]}
              value={priceRange}
              min={0}
              max={1000000}
              step={10000}
              onValueChange={handlePriceChange}
              className="mb-4"
            />
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₦</span>
                <input
                  type="text"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8e9d5] focus:border-transparent"
                />
              </div>
              <span className="text-gray-500">-</span>
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₦</span>
                <input
                  type="text"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8e9d5] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Rating</h3>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-2xl ${star <= rating ? "text-[#a8e9d5]" : "text-gray-300"}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Course Type Filter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Course type</h3>
            <div className="flex gap-4">
              {Object.keys(courseTypes).map((type) => (
                <button
                  key={type}
                  onClick={() => handleCourseTypeToggle(type)}
                  className={`px-4 py-2 rounded-md border ${
                    courseTypes[type] ? "bg-black text-white border-black" : "bg-white text-black border-gray-300"
                  }`}
                >
                  {type} {courseTypes[type] && <Check size={16} className="inline ml-1" />}
                </button>
              ))}
            </div>
          </div>

          {/* Course Category Filter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Course category</h3>
            <div className="space-y-3">
              {Object.keys(categories)
                .slice(0, 4)
                .map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={categories[category]}
                      onCheckedChange={() => handleCategoryToggle(category)}
                      className="data-[state=checked]:bg-[#a8e9d5] data-[state=checked]:text-black border-gray-300"
                    />
                    <Label htmlFor={`category-${category}`} className="flex-1">
                      {category} <span className="text-gray-500">(39)</span>
                    </Label>
                  </div>
                ))}
              <button className="text-gray-600 hover:underline">See All</button>
            </div>
          </div>

          {/* Start Date Filter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Start date</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Anytime",
                "Starting in 24 hours",
                "Starting in a Week",
                "Starting in 1 Month",
                "Starting in 3 Month",
              ].map((date) => (
                <button
                  key={date}
                  onClick={() => setStartDate(date)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    startDate === date ? "bg-[#a8e9d5] text-black" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          {/* Apply Filters Button */}
          <button
            onClick={handleApplyFilters}
            className="w-full py-3 rounded-full bg-[#a8e9d5] text-black font-medium hover:bg-[#98d9c5] transition-colors"
          >
            Apply filters
          </button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CourseFilter
