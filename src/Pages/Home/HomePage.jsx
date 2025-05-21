import { Link } from "react-router-dom"
import { Search } from "lucide-react"
import CourseCard from "@/components/App/CourseCard"

export default function HomePage() {
  // Sample course data
  const popularCourses = [
    {
      id: 1,
      title: "Mastering Digital Marketing",
      price: 98,
      image: "/image 2.png",
      courseType: "Self Paced Course",
    },
    {
      id: 2,
      title: "Photography & Photo Editing",
      price: 98,
      image: "/image 3.png",
      courseType: "1-on-1",
    },
    {
      id: 3,
      title: "Design Fundamentals",
      price: 98,
      image: "/image 5.1.png",
      courseType: "Self Paced Course",
    },
  ]

  return (
    <div className="p-4 lg:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {/* Hero Section */}
          <div className="relative rounded-lg overflow-hidden mb-8">
            <img
              src="home hero.jpg"
              alt="Hero background"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center p-6 md:p-10">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Level Up Your Skills. Land Your Next Gig.
              </h1>
              <p className="text-white/90 mb-4 max-w-2xl">
                Explore top-rated courses and exciting gig opportunities — all in one place.
              </p>

              <div className="relative max-w-xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8e9d5] focus:border-transparent bg-white"
                />
              </div>
            </div>
          </div>

          {/* Popular Courses */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Popular Courses</h2>
              <Link to="/all-courses" className="text-sm text-gray-600 hover:underline">
                See All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  price={course.price}
                  image={course.image}
                  courseType={course.courseType}
                />
              ))}
            </div>
          </div>

          {/* Exciting Gigs Opportunities */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Exciting Gigs Opportunities</h2>
              <Link to="/gigs" className="text-sm text-gray-600 hover:underline">
                See All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Gig Card 1 */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-xs text-green-600 mb-2">Created 2 days ago</div>
                <h3 className="font-medium text-lg mb-2">Dog Walker Needed</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus.
                  Quisque...
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    $1,120<span className="text-sm font-normal">.00</span>
                  </p>
                  <button className="text-sm px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-50">
                    View Gig
                  </button>
                </div>
              </div>

              {/* Gig Card 2 */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-xs text-green-600 mb-2">Created 2 days ago</div>
                <h3 className="font-medium text-lg mb-2">Lorem ipsum dolor sit amet</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus.
                  Quisque...
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    $1,120<span className="text-sm font-normal">.00</span>
                  </p>
                  <button className="text-sm px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-50">
                    View Gig
                  </button>
                </div>
              </div>

              {/* Gig Card 3 */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-xs text-green-600 mb-2">Created 2 days ago</div>
                <h3 className="font-medium text-lg mb-2">Looking for Delivery Driver</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus.
                  Quisque...
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    $1,120<span className="text-sm font-normal">.00</span>
                  </p>
                  <button className="text-sm px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-50">
                    View Gig
                  </button>
                </div>
              </div>

              {/* Gig Card 4 */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-xs text-green-600 mb-2">Created 2 days ago</div>
                <h3 className="font-medium text-lg mb-2">Math Tutor Required</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ultrices mi, a tempor lectus.
                  Quisque...
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    $1,120<span className="text-sm font-normal">.00</span>
                  </p>
                  <button className="text-sm px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-50">
                    View Gig
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          {/* Ongoing Gigs */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
            <h2 className="text-lg font-semibold mb-4">ONGOING GIGS</h2>

            <div className="space-y-4">
              {/* Ongoing Gig 1 */}
              <div className="border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-xs text-red-500">Ongoing</span>
                </div>
                <h3 className="font-medium mb-1">Math Tutor Required</h3>
                <div className="flex items-center justify-between">
                  <p className="text-gray-600">$120,000</p>
                  <button className="text-sm px-4 py-1 border border-gray-300 rounded-full hover:bg-gray-50">
                    View
                  </button>
                </div>
              </div>

              {/* Ongoing Gig 2 */}
              <div className="border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-xs text-red-500">Ongoing</span>
                </div>
                <h3 className="font-medium mb-1">Design Company Profile</h3>
                <div className="flex items-center justify-between">
                  <p className="text-gray-600">$120,000</p>
                  <button className="text-sm px-4 py-1 border border-gray-300 rounded-full hover:bg-gray-50">
                    View
                  </button>
                </div>
              </div>

              {/* Ongoing Gig 3 */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-xs text-red-500">Ongoing</span>
                </div>
                <h3 className="font-medium mb-1">Looking for Delivery Driver</h3>
                <div className="flex items-center justify-between">
                  <p className="text-gray-600">$120,000</p>
                  <button className="text-sm px-4 py-1 border border-gray-300 rounded-full hover:bg-gray-50">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Advertisement */}
          <div className="relative rounded-lg overflow-hidden h-96">
            <img
              src="/image 8.jpg"
              alt="Advertisement"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
              <p className="text-center">
                This is an
                <br />
                Advert Space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
