import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

export function Courses() {
  const courses = [
    {
      id: 1,
      title: "Mastering Digital Marketing",
      price: "$98.00",
      image: "/Image 1.png",
      courseType: "Self Paced Course",
    },
    {
      id: 2,
      title: "Photography & Photo Editing",
      price: "$98.00",
      image: "/image 2.png",
      courseType: "1-on-1",
    },
    {
      id: 3,
      title: "Design Fundamentals",
      price: "$98.00",
      image: "/image 3.png",
      courseType: "Self Paced Course",
    },
    {
      id: 4,
      title: "Design Fundamentals",
      price: "$98.00",
      image: "/Image 4.png",
      courseType: "Self Paced Course",
    },
    {
      id: 5,
      title: "Mastering Digital Marketing",
      price: "$98.00",
      image: "/image 5.1.png",
      courseType: "Self Paced Course",
    },
    {
      id: 6,
      title: "Photography & Photo Editing",
      price: "$98.00",
      image: "/Image 6.png",
      courseType: "1-on-1",
    },
    {
      id: 7,
      title: "Design Fundamentals",
      price: "$98.00",
      image: "/image 3.png",
      courseType: "Self Paced Course",
    },
    {
      id: 8,
      title: "Design Fundamentals",
      price: "$98.00",
      image: "/Image 6.png",
      courseType: "Self Paced Course",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Level Up Your Skills</h2>
          <Button
            variant="ghost"
            className="flex items-center gap-1 rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            <span>See all jobs</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div key={course.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-xs font-medium">
                  {course.courseType}
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-medium">{course.title}</h3>
                <p className="mt-1 text-gray-900">{course.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
