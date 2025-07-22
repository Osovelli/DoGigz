import { useState } from "react"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddOneOnOneContent({ courseData, onContentAdded, onBack }) {
  const [selectedDay, setSelectedDay] = useState("")
  const [selectedTimes, setSelectedTimes] = useState([])
  const [selectedDate, setSelectedDate] = useState("")
  const [classTitle, setClassTitle] = useState("")

  const timeSlots = ["Available all day", "12 AM", "1 AM", "2 AM", "3 AM", "4 AM"]

  const toggleTimeSlot = (time) => {
    if (time === "Available all day") {
      setSelectedTimes(selectedTimes.includes(time) ? [] : [time])
    } else {
      setSelectedTimes((prev) =>
        prev.includes(time) ? prev.filter((t) => t !== time) : [...prev.filter((t) => t !== "Available all day"), time],
      )
    }
  }

  const handleContinue = () => {
    onContentAdded({
      schedule: {
        day: selectedDay,
        times: selectedTimes,
        date: selectedDate,
        classTitle,
      },
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
            <span className="font-medium text-gray-900">Set Your Availability</span>
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

          <div className="space-y-6">
            <div>
              <Select value={selectedDay} onValueChange={setSelectedDay}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monday">Monday</SelectItem>
                  <SelectItem value="tuesday">Tuesday</SelectItem>
                  <SelectItem value="wednesday">Wednesday</SelectItem>
                  <SelectItem value="thursday">Thursday</SelectItem>
                  <SelectItem value="friday">Friday</SelectItem>
                  <SelectItem value="saturday">Saturday</SelectItem>
                  <SelectItem value="sunday">Sunday</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Time slots/ day (Kindly select multiple time slots)
              </label>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => toggleTimeSlot(time)}
                    className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                      selectedTimes.includes(time)
                        ? "bg-[#4ECDC4] text-white border-[#4ECDC4]"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Select value={selectedDate} onValueChange={setSelectedDate}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-02-01">February 1, 2024</SelectItem>
                  <SelectItem value="2024-02-02">February 2, 2024</SelectItem>
                  <SelectItem value="2024-02-03">February 3, 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Input
                placeholder="Class Title"
                value={classTitle}
                onChange={(e) => setClassTitle(e.target.value)}
                className="h-12"
              />
            </div>

            <Button variant="outline" className="w-full h-12 border-dashed bg-transparent">
              <Plus className="w-4 h-4 mr-2" />
              Add more section
            </Button>

            <Button
              onClick={handleContinue}
              className="w-full h-12 bg-[#4ECDC4] hover:bg-[#45b8b1] text-white"
              disabled={!selectedDay || selectedTimes.length === 0}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
