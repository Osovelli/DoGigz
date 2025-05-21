import { useState, useRef } from "react"
import { Search, Play, Trophy, Download, ChevronRight, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function RewardsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showVideoPlayer, setShowVideoPlayer] = useState(false)
  const [videoCompleted, setVideoCompleted] = useState(false)
  const [rewardClaimed, setRewardClaimed] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)
  const videoRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [completedTasks, setCompletedTasks] = useState({
    video: false,
    game: false,
    download: false,
  })

  // Sample video URL - replace with your actual video
  const videoUrl = "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"

  // Handle video time update to track progress
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setVideoProgress(progress)

      // Mark video as completed when it reaches the end (or close to it)
      if (progress > 95 && !videoCompleted) {
        setVideoCompleted(true)
      }
    }
  }

  // Handle video end
  const handleVideoEnd = () => {
    setVideoCompleted(true)
  }

  // Claim reward
  const handleClaimReward = () => {
    setRewardClaimed(true)
    setCompletedTasks((prev) => ({ ...prev, video: true }))

    // Close video player after a delay
    setTimeout(() => {
      setShowVideoPlayer(false)
    }, 2000)
  }

  // Close video player
  const handleCloseVideo = () => {
    setShowVideoPlayer(false)
    setVideoProgress(0)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  // Watch video task
  const handleWatchVideo = () => {
    setShowVideoPlayer(true)
    setVideoCompleted(false)
    setRewardClaimed(false)
  }

  // Sample reward tasks
  const rewardTasks = [
    {
      id: 1,
      title: "Watch a video for 15 minutes",
      points: 50,
      icon: <Play className="text-white" size={20} />,
      action: handleWatchVideo,
      completed: completedTasks.video,
    },
    {
      id: 2,
      title: "A game task",
      points: 50,
      icon: <Trophy className="text-white" size={20} />,
      action: () => alert("Game task clicked"),
      completed: completedTasks.game,
    },
    {
      id: 3,
      title: "A download task",
      points: 50,
      icon: <Download className="text-white" size={20} />,
      action: () => alert("Download task clicked"),
      completed: completedTasks.download,
    },
  ]

  // Filter tasks based on search query
  const filteredTasks = rewardTasks.filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="p-4 lg:p-6">
      <h1 className="text-3xl font-bold mb-6">Explore</h1>

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

      {/* Reward Tasks */}
      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
            onClick={task.action}
          >
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full ${task.completed ? "bg-green-500" : "bg-black"} flex items-center justify-center mr-4`}
              >
                {task.completed ? <Check className="text-white" size={20} /> : task.icon}
              </div>
              <div>
                <h3 className="font-medium">{task.title}</h3>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-[#a8e9d5] mr-1"></div>
                  <span className="text-sm">+{task.points}</span>
                </div>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        ))}

        {filteredTasks.length === 0 && (
          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-lg font-medium mb-2">No tasks found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
            <button onClick={() => setSearchQuery("")} className="px-4 py-2 bg-[#a8e9d5] rounded-md text-black">
              Clear search
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-500">Page 1 of 16</div>
        <div className="flex items-center gap-1">
          <button disabled={true} className="p-2 rounded-md border border-gray-300 disabled:opacity-50">
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

          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-md ${
                currentPage === page ? "bg-[#a8e9d5] text-black font-medium" : "border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}

          <span className="mx-1">...</span>

          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50">
            16
          </button>

          <button className="p-2 rounded-md border border-gray-300">
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

      {/* Video Player Modal */}
      {showVideoPlayer && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-3xl overflow-hidden">
            <div className="p-4 flex justify-between items-center border-b">
              <h3 className="font-medium text-lg">Watch video to earn 50 points</h3>
              <button onClick={handleCloseVideo} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            <div className="relative">
              <video
                ref={videoRef}
                src={videoUrl}
                controls
                className="w-full aspect-video"
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
                autoPlay
              />

              {/* Progress indicator */}
              <div className="p-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{Math.round(videoProgress)}%</span>
                </div>
                <Progress value={videoProgress} className="h-2" />
              </div>
            </div>

            <div className="p-4 border-t">
              {videoCompleted ? (
                rewardClaimed ? (
                  <div className="flex items-center justify-center text-green-600 py-2">
                    <Check size={20} className="mr-2" />
                    <span>Reward claimed! +50 points added to your account</span>
                  </div>
                ) : (
                  <Button onClick={handleClaimReward} className="w-full bg-[#a8e9d5] hover:bg-[#98d9c5] text-black">
                    Claim 50 Points
                  </Button>
                )
              ) : (
                <p className="text-center text-gray-600">Watch the complete video to claim your reward</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
