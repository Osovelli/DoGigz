import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center rounded-3xl bg-[#f0f9f6] overflow-hidden">
            <div className="px-6 py-10 text-center w-full">
              <h3 className="text-2xl font-semibold mb-3">Showcase Your Skills</h3>
              <p className="mb-6 text-gray-700 max-w-md mx-auto">
                Let businesses and collaborators know you're available for gigs and learning opportunities.
              </p>
              <Button className="bg-[#a8e9d5] hover:bg-[#98d9c5] text-black font-medium px-8 py-6 h-auto rounded-full">
                Create an account
              </Button>
            </div>
            <div className="w-full mt-4">
              <img
                src="/cta1.png"
                alt="People collaborating"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-center rounded-3xl bg-[#f0f9f6] overflow-hidden">
            <div className="px-6 py-10 text-center w-full">
              <h3 className="text-2xl font-semibold mb-3">Collaborate with Professionals</h3>
              <p className="mb-6 text-gray-700 max-w-md mx-auto">
                Build your network, gain insights, and collaborate with people who can help you grow.
              </p>
              <Button className="bg-[#a8e9d5] hover:bg-[#98d9c5] text-black font-medium px-8 py-6 h-auto rounded-full">
                Find Gigs & Courses
              </Button>
            </div>
            <div className="w-full mt-4">
              <img
                src="/cta2.png"
                alt="Professional collaboration"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}