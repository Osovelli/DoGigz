import { X, Mail, Phone, MapPin, Calendar, Edit, Camera } from "lucide-react"
import { cn } from "@/lib/utils"

export default function UserProfileDrawer({ isOpen, onClose }) {
  // Sample user data
  const user = {
    name: "Abayomi Oluwu",
    email: "abayomioluwu@DoGigz.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    bio: "UI/UX Designer and Frontend Developer with 5+ years of experience creating user-centered designs for web and mobile applications.",
    skills: ["UI/UX Design", "React", "JavaScript", "Figma", "User Research"],
    stats: {
      completedGigs: 24,
      activeCases: 3,
      earnings: "$4,250",
    },
  }

  return (
    <div
      className={cn(
        "fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Profile</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close profile">
          <X size={20} />
        </button>
      </div>

      <div className="overflow-y-auto h-full pb-20">
        {/* Profile Header */}
        <div className="relative">
          <div className="h-32 bg-gradient-to-r from-[#a8e9d5] to-[#7fd3c0]"></div>
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <img
                src="/avatar.jpeg"
                alt="User profile"
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
              <button
                className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full border border-gray-200 text-gray-600 hover:text-gray-900"
                aria-label="Change profile picture"
              >
                <Camera size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="mt-16 px-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold">{user.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{user.bio}</p>
            <button className="mt-3 flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mx-auto">
              <Edit size={14} />
              Edit Profile
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-lg font-bold">{user.stats.completedGigs}</p>
              <p className="text-xs text-gray-600">Completed Gigs</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-lg font-bold">{user.stats.activeCases}</p>
              <p className="text-xs text-gray-600">Active Cases</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-lg font-bold">{user.stats.earnings}</p>
              <p className="text-xs text-gray-600">Earnings</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mb-6">
            <h4 className="font-medium text-sm text-gray-500">CONTACT INFORMATION</h4>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gray-500" />
              <span className="text-sm">{user.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gray-500" />
              <span className="text-sm">{user.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-gray-500" />
              <span className="text-sm">{user.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={16} className="text-gray-500" />
              <span className="text-sm">Joined {user.joinDate}</span>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h4 className="font-medium text-sm text-gray-500 mb-3">SKILLS</h4>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-[#a8e9d5] bg-opacity-20 text-gray-800 rounded-full text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
