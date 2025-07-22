import { useState } from "react"
import { ArrowLeft, Upload, X, AlertTriangle, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddSelfPacedContent({ courseData, onContentAdded, onBack }) {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "",
      description: "",
      category: "",
      price: "",
      thumbnail: null,
      videos: [],
    },
  ])

  const [uploadedVideos, setUploadedVideos] = useState([
    { id: 1, name: "Video 1.mp4", size: "0 KB of 120 KB", status: "uploading" },
    { id: 2, name: "Video 2.mp4", size: "20 KB of 120 KB", status: "complete" },
    { id: 3, name: "Video 3.mp4", size: "", status: "error" },
  ])

  const addSection = () => {
    setSections((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: "",
        description: "",
        category: "",
        price: "",
        thumbnail: null,
        videos: [],
      },
    ])
  }

  const handleContinue = () => {
    onContentAdded({
      sections,
      videos: uploadedVideos,
    })
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#4ECDC4] text-white flex items-center justify-center text-sm font-medium">
              ✓
            </div>
            <span className="font-medium text-gray-900">Course</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#4ECDC4] text-white flex items-center justify-center text-sm font-medium">
              2
            </div>
            <span className="font-medium text-gray-900">Add Course Content</span>
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
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-2xl font-bold">Add Course Content</h1>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={section.id} className="space-y-6">
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">SECTION {index + 1}</div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                  <Input placeholder="e.g. Introduction to Graphic Design" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Video Description</label>
                  <Textarea
                    placeholder="Learn the basics of graphic design, from tools to techniques"
                    className="min-h-[80px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Course Category</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select course category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price
                    <span className="ml-2 text-xs text-gray-500">Free</span>
                  </label>
                  <Input placeholder="e.g Stone" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail Image</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                    <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                    <Button variant="outline" size="sm">
                      Upload File
                    </Button>
                  </div>
                </div>

                {/* Video Upload Section */}
                <div>
                  <div className="border-2 border-dashed border-[#4ECDC4] rounded-lg p-8 text-center mb-4">
                    <div className="w-12 h-12 bg-[#4ECDC4] bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Upload className="w-6 h-6 text-[#4ECDC4]" />
                    </div>
                    <div className="text-[#4ECDC4] font-medium mb-1">Upload videos</div>
                    <div className="text-sm text-gray-500 mb-4">MP4, MOV formats, up to 100 MB</div>
                    <Button variant="outline">Browse Files</Button>
                  </div>

                  {/* Uploaded Videos List */}
                  <div className="space-y-3">
                    {uploadedVideos.map((video) => (
                      <div key={video.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                        <div className="w-6 h-6 flex-shrink-0">
                          {video.status === "complete" && (
                            <div className="w-full h-full bg-green-500 rounded text-white flex items-center justify-center text-xs">
                              ✓
                            </div>
                          )}
                          {video.status === "uploading" && (
                            <div className="w-full h-full border-2 border-orange-400 rounded flex items-center justify-center">
                              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                            </div>
                          )}
                          {video.status === "error" && <AlertTriangle className="w-full h-full text-red-500" />}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{video.name}</div>
                          {video.size && <div className="text-xs text-gray-500">{video.size}</div>}
                        </div>
                        <Button variant="ghost" size="sm">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Button variant="outline" onClick={addSection} className="w-full h-12 border-dashed bg-transparent">
              <Plus className="w-4 h-4 mr-2" />
              Add more section
            </Button>

            <Button onClick={handleContinue} className="w-full h-12 bg-[#4ECDC4] hover:bg-[#45b8b1] text-white">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
