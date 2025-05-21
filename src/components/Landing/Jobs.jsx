import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"
import { register } from "swiper/element/bundle"

export function Jobs() {
  const swiperRef = useRef(null)

  useEffect(() => {
    // Register Swiper web component
    register()

    // Configure Swiper parameters
    const swiperEl = swiperRef.current

    const params = {
      //slidesPerView: 1.05,
      spaceBetween: 16,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
        },
        640: {
          slidesPerView: 2.2,
        },
        768: {
          slidesPerView: 3.2,
        },
        1024: {
          slidesPerView: 4.2,
        }
      },
      injectStyles: [
        `
          .swiper-wrapper {
            padding-bottom: 16px;
          }
        `,
      ],
    }

    // Assign parameters to Swiper element
    Object.assign(swiperEl, params)

    // Initialize Swiper
    swiperEl.initialize()
  }, [])

  const jobs = [
    {
      id: 1,
      title: "Graphic Designer",
      company: "Dribbble Inc.",
      location: "London",
      salary: "$500/project",
      logo: "G",
      logoColor: "bg-pink-500",
      bgColor: "bg-white",
    },
    {
      id: 2,
      title: "Social Media Manager",
      company: "Google Inc.",
      location: "Remote",
      salary: "$40/hr",
      logo: "G",
      logoColor: "bg-white",
      bgColor: "bg-emerald-100",
    },
    {
      id: 3,
      title: "Web Developer (Part-Time)",
      company: "Resources Inc.",
      location: "Washington",
      salary: "$1,500/month",
      logo: "f",
      logoColor: "bg-blue-500",
      bgColor: "bg-white",
    },
    {
      id: 4,
      title: "Web Developer (Part-Time)",
      company: "Resources Inc.",
      location: "Washington",
      salary: "$1,500/month",
      logo: "f",
      logoColor: "bg-blue-500",
      bgColor: "bg-white",
    },
    {
      id: 5,
      title: "Web Developer (Part-Time)",
      company: "Resources Inc.",
      location: "Washington",
      salary: "$1,500/month",
      logo: "f",
      logoColor: "bg-blue-500",
      bgColor: "bg-white",
    
    }
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Trending Opportunities Near You</h2>
          <Button
            variant="ghost"
            className="flex items-center gap-1 rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            <span>See all jobs</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <swiper-container ref={swiperRef} init="false">
          {jobs.map((job) => (
            <swiper-slide key={job.id}>
              <Card className={`overflow-hidden border shadow-sm ${job.bgColor}`}>
                <div className="p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${job.id === 2 ? "bg-white" : job.logoColor} ${job.id === 2 ? "text-red-500" : "text-white"}`}
                    >
                      {job.id === 2 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                      ) : job.id === 1 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-6 w-6"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
                        </svg>
                      ) : (
                        <span className="text-xl font-bold">{job.logo}</span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-medium">{job.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {job.location} • {job.company}
                  </p>

                  <div className="mt-6">
                    <span className="inline-block rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium">
                      {job.salary}
                    </span>
                  </div>
                </div>
              </Card>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  )
}
