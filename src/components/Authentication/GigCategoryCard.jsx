import { cn } from "@/lib/utils"
import { Palette, Pencil, Code, Video, Camera, PenTool, Shapes, Database, Headphones, FileText } from "lucide-react"

const iconMap = {
  "Graphic Design": Palette,
  "Content Writing": Pencil,
  "Web Development": Code,
  "Video Editing": Video,
  "Photography": Camera,
  "Copywriting": PenTool,
  "Logo Design": Shapes,
  "Data Entry": Database,
  "Virtual Assistance": Headphones,
  "Transcription": FileText,
}

function CategoryCard({ category, selected, onClick }) {
  const Icon = iconMap[category] || Palette

  const handleClick = (e) => {
    e.preventDefault() // Prevent form submission
    onClick(category)
  }

  return (
    <button
      type="button" // Explicitly set type to "button" to prevent form submission
      role="checkbox"
      aria-checked={selected}
      onClick={handleClick}
      className={cn(
        "w-full p-6 rounded-lg border transition-all duration-200",
        "hover:border-basic/50 hover:bg-basic/5",
        "flex flex-col items-center gap-4 text-center",
        selected && "border-x-emerald-400 hover:border-x-emerald-400 bg-emerald-300/10 hover:bg-emerald-300/20",
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center",
          "bg-white border transition-colors",
          selected && "border-primary",
        )}
      >
        <Icon className={cn("w-6 h-6", selected ? "text-primary" : "text-muted-foreground")} />
      </div>
      <span className="font-medium">{category}</span>
    </button>
  )
}

export default CategoryCard

