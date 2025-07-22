import { useState } from "react"
import { ArrowLeft, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CreateGig({ onGigCreated }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    timing: "on-date",
    location: "on-site",
    budget: "",
    skills: [],
  })

  const [skillInput, setSkillInput] = useState("")
  const [selectedImages, setSelectedImages] = useState([])

  const sampleImages = [
    "/image 1.png",
    "/image 2.png",
    "/placeholder.svg?height=80&width=80&text=Work1",
    "/placeholder.svg?height=80&width=80&text=Work2",
    "/placeholder.svg?height=80&width=80&text=Person3",
    "/placeholder.svg?height=80&width=80&text=Person4",
    "/placeholder.svg?height=80&width=80&text=Work3",
    "/placeholder.svg?height=80&width=80&text=Work4",
  ]

  const suggestedSkills = ["Graphic Design", "Content Writing", "Photography", "Data Entry"]

  const addSkill = (skill) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }))
    }
    setSkillInput("")
  }

  const removeSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }))
  }

  const toggleImageSelection = (imageIndex) => {
    setSelectedImages((prev) =>
      prev.includes(imageIndex) ? prev.filter((i) => i !== imageIndex) : [...prev, imageIndex],
    )
  }

  const handleSubmit = () => {
    onGigCreated({
      ...formData,
      selectedImages,
      datePosted: "Mon, 22 April",
    })
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#4ECDC4] text-white flex items-center justify-center text-sm font-medium">
              1
            </div>
            <span className="font-medium text-gray-900">Post a Gig</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center text-sm">
              2
            </div>
            <span>Review and Publish</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-2xl font-bold">Post a Gig</h1>
          </div>

          <div className="space-y-6">
            {/* Gig Title */}
            <div>
              <Input
                placeholder="Gig title"
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                className="h-12"
              />
              <div className="text-right text-xs text-gray-400 mt-1">Maximum of 70 characters</div>
            </div>

            {/* Gig Description */}
            <div>
              <Textarea
                placeholder="Gig description"
                value={formData.description}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                className="min-h-[120px]"
              />
              <div className="text-right text-xs text-gray-400 mt-1">Maximum of 2,000 characters</div>
            </div>

            {/* When do you need this done? */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">When do you need this done?</label>
              <div className="flex gap-4">
                {[
                  { value: "on-date", label: "On date" },
                  { value: "before-date", label: "Before date" },
                  { value: "flexible", label: "I'm flexible" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFormData((prev) => ({ ...prev, timing: option.value }))}
                    className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                      formData.timing === option.value
                        ? "bg-[#4ECDC4] text-white border-[#4ECDC4]"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Where do you need it done? */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Where do you need it done?</label>
              <div className="flex gap-4">
                {[
                  { value: "on-site", label: "On Site" },
                  { value: "remote", label: "Remote" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFormData((prev) => ({ ...prev, location: option.value }))}
                    className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                      formData.location === option.value
                        ? "bg-[#4ECDC4] text-white border-[#4ECDC4]"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Take a picture */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Take a picture (Optional)</label>
              <div className="text-xs text-gray-500 mb-4">
                Help gig workers understand what needs to be done. Add up to 5 pictures
              </div>

              <div className="grid grid-cols-4 gap-3 mb-4">
                <button className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors">
                  <Plus className="w-6 h-6 text-gray-400" />
                </button>

                {sampleImages.map((image, index) => (
                  <div key={index} className="relative">
                    <button
                      onClick={() => toggleImageSelection(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImages.includes(index)
                          ? "border-[#4ECDC4] ring-2 ring-[#4ECDC4] ring-opacity-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Sample ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                    {selectedImages.includes(index) && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <X className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Gig Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What is your budget?</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
                <Input
                  placeholder="0.00"
                  value={formData.budget}
                  onChange={(e) => setFormData((prev) => ({ ...prev, budget: e.target.value }))}
                  className="h-12 pl-8"
                />
              </div>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Fill (1152)</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Fill (836)</span>
              </div>
            </div>

            {/* Required Skills */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Required Skills</label>
              <div className="text-xs text-gray-500 mb-3">
                Add specific skills or expertise you're looking for in a gig worker.
              </div>

              <div className="relative mb-3">
                <Input
                  placeholder="Search skills..."
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addSkill(skillInput)}
                  className="h-10"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {formData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#4ECDC4] text-white text-sm rounded-full flex items-center gap-2"
                  >
                    {skill}
                    <button onClick={() => removeSkill(skill)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {suggestedSkills.map((skill, index) => (
                  <button
                    key={index}
                    onClick={() => addSkill(skill)}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-6">
              <Button variant="outline" className="flex-1 h-12 bg-transparent">
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                className="flex-1 h-12 bg-[#4ECDC4] hover:bg-[#45b8b1] text-white"
                disabled={!formData.title || !formData.description || !formData.budget}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
