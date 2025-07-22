import { useState } from "react"
import { ArrowLeft, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreateCourse({ onCourseCreated }) {
  const [selectedType, setSelectedType] = useState("self-paced")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    thumbnail: null,
  })

  const handleSubmit = () => {
    onCourseCreated({
      ...formData,
      courseType: selectedType,
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
            <span className="font-medium text-gray-900">Course</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center text-sm">
              2
            </div>
            <span>Add Course Content</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center text-sm">
              3
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
            <h1 className="text-2xl font-bold">Create a New Course</h1>
          </div>

          <div className="space-y-6">
            <div>
              <Input
                placeholder="Course Title"
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                className="h-12"
              />
            </div>

            <div>
              <Textarea
                placeholder="Short Description"
                value={formData.description}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                className="min-h-[80px]"
              />
            </div>

            <div>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select course category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Course Type Selection */}
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedType("1-on-1")}
                className={`flex-1 p-4 rounded-lg border-2 text-left transition-all ${
                  selectedType === "1-on-1"
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200 bg-white text-gray-900 hover:border-gray-300"
                }`}
              >
                <div className="font-medium">1-On-1</div>
                {selectedType === "1-on-1" && <div className="text-xs mt-1 text-green-400">✓ Selected</div>}
              </button>
              <button
                onClick={() => setSelectedType("self-paced")}
                className={`flex-1 p-4 rounded-lg border-2 text-left transition-all ${
                  selectedType === "self-paced"
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200 bg-white text-gray-900 hover:border-gray-300"
                }`}
              >
                <div className="font-medium">Self Paced</div>
                {selectedType === "self-paced" && <div className="text-xs mt-1 text-green-400">✓ Selected</div>}
              </button>
            </div>

            <div className="text-sm text-gray-500">The course will be free</div>

            <div>
              <Input
                placeholder="Price"
                value={formData.price}
                onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
                className="h-12"
              />
            </div>

            {/* Thumbnail Upload */}
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <div className="text-[#4ECDC4] font-medium mb-1">Upload thumbnail image</div>
              <div className="text-sm text-gray-500 mb-4">PNG, JPG or GIF (max. 800x400px)</div>
              <Button variant="outline">Browse Files</Button>
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full h-12 bg-[#4ECDC4] hover:bg-[#45b8b1] text-white"
              disabled={!formData.title || !formData.description}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
