import { useState } from "react"
import { useParams, useLocation, Link } from "react-router-dom"
import { ChevronRight, Star, MapPin, Calendar, DollarSign, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import ApplyGigSheet from "@/components/Case/ApplyGigSheet"

export default function GigDetailPage() {
  const { gigId } = useParams()
  const location = useLocation()
  const { gigTitle } = location.state || { gigTitle: "Virtual Assistance for Data Entry and Scheduling Tasks" }

  const [selectedImage, setSelectedImage] = useState(0)
  const [expandedSections, setExpandedSections] = useState({
    about: true,
    poster: true,
    details: true,
  })
  const [isApplySheetOpen, setIsApplySheetOpen] = useState(false)

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Handle apply now button click
  const handleApplyNow = () => {
    setIsApplySheetOpen(true)
  }

  // Sample gig data
  const gigData = {
    id: gigId || "3",
    title: gigTitle,
    price: "$ 120,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi libero, sagittis vitae sem in, tincidunt consequat nibh. Mauris rhoncus magna ac nibh convallis posuere. Ut rutrum velit non sem bibendum, vitae mollis sem dapibus. Nam nisi lacus, tincidunt aliquam eros ac, tempor rhoncus tellus. Nam pharetra, mauris nec ultrices auctor.",
    tags: ["UX Design", "Graphics Design", "Product Design"],
    poster: {
      name: "John Doe",
      rating: 3.5,
      reviews: 128,
      avatar: "/image 3.png",
    },
    details: {
      location: "Software and hardware",
      locationDetail: "Gig location",
      datePosted: "Mon, 22 April",
      dateDetail: "Date Posted",
      amount: "$2,000",
      amountDetail: "Amount",
    },
    images: [
      "/Image 1.png",
      "/image 5.1.png",
      "/Image 4.png",
      "/image 8.jpg",
      "/image 2.png",
    ],
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center text-sm mb-6">
        <Link to="/my-case" className="text-gray-500 hover:text-gray-700">
          My Case
        </Link>
        <ChevronRight size={16} className="mx-2 text-gray-400" />
        <Link to="/my-case" className="text-gray-500 hover:text-gray-700">
          Gigs
        </Link>
        <ChevronRight size={16} className="mx-2 text-gray-400" />
        <span className="text-gray-900 truncate max-w-[300px]">{gigData.title}</span>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Main Image */}
        <div className="md:col-span-2 relative">
          <img
            src={gigData.images[selectedImage] || "/placeholder.svg"}
            alt={gigData.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 right-4 text-white text-5xl font-bold opacity-70">DC</div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 gap-2 h-[400px]">
          {gigData.images.slice(1, 5).map((image, index) => (
            <div key={index} className="relative" onClick={() => setSelectedImage(index + 1)}>
              <img
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
              />
              {index === 3 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg cursor-pointer">
                  <span className="text-white font-medium">See all 14 photos</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Gig Title and Price */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{gigData.title}</h1>
        <p className="text-xl text-gray-700 font-medium">{gigData.price}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {gigData.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 px-3 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* About the gig */}
      <div className="border rounded-lg mb-4 overflow-hidden">
        <div
          className="flex justify-between items-center p-4 cursor-pointer bg-white"
          onClick={() => toggleSection("about")}
        >
          <h2 className="text-lg font-medium">About the gig</h2>
          <ChevronUp
            size={20}
            className={`transition-transform ${expandedSections.about ? "" : "transform rotate-180"}`}
          />
        </div>
        {expandedSections.about && (
          <div className="p-4 border-t">
            <p className="text-gray-700 mb-4">{gigData.description}</p>
            <button className="text-gray-600 hover:underline">See more</button>
          </div>
        )}
      </div>

      {/* Gig Poster */}
      <div className="border rounded-lg mb-4 overflow-hidden">
        <div
          className="flex justify-between items-center p-4 cursor-pointer bg-white"
          onClick={() => toggleSection("poster")}
        >
          <h2 className="text-lg font-medium">Gig Poster</h2>
          <ChevronUp
            size={20}
            className={`transition-transform ${expandedSections.poster ? "" : "transform rotate-180"}`}
          />
        </div>
        {expandedSections.poster && (
          <div className="p-4 border-t">
            <div className="flex items-center">
              <img
                src={gigData.poster.avatar || "/placeholder.svg"}
                alt={gigData.poster.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p className="font-medium">{gigData.poster.name}</p>
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-400 mr-1" />
                  <span className="text-gray-700">
                    {gigData.poster.rating} ({gigData.poster.reviews})
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Gig Details */}
      <div className="border rounded-lg mb-6 overflow-hidden">
        <div
          className="flex justify-between items-center p-4 cursor-pointer bg-white"
          onClick={() => toggleSection("details")}
        >
          <h2 className="text-lg font-medium">Gig Details</h2>
          <ChevronUp
            size={20}
            className={`transition-transform ${expandedSections.details ? "" : "transform rotate-180"}`}
          />
        </div>
        {expandedSections.details && (
          <div className="p-4 border-t">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-3">
                  <MapPin size={20} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">{gigData.details.location}</p>
                  <p className="text-sm text-gray-500">{gigData.details.locationDetail}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-3">
                  <Calendar size={20} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">{gigData.details.datePosted}</p>
                  <p className="text-sm text-gray-500">{gigData.details.dateDetail}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-3">
                  <DollarSign size={20} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">{gigData.details.amount}</p>
                  <p className="text-sm text-gray-500">{gigData.details.amountDetail}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <Button variant="outline" className="px-6">
          Report Gig
        </Button>
        <Button 
        onClick={handleApplyNow}
        className="bg-[#a8e9d5] hover:bg-[#98d9c5] text-black px-6">
          Apply now
        </Button>
      </div>
      {/* Apply Gig Sheet */}
      <ApplyGigSheet isOpen={isApplySheetOpen} onClose={() => setIsApplySheetOpen(false)} gigTitle={gigData.title} />
    </div>
  )
}
