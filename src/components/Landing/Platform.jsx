export function Platform() {
    return (
      <section className="bg-background py-12 md:py-16 lg:py-20">
        <div className="px-4 md:px-6">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Discover Opportunities in One Platform</h2>
          <div className="relative rounded-xl bg-green-50 md:h-screen p-32 bg-landing-platform bg-cover bg-no-repeat bg-center">
            <div className="absolute right-0 bottom-0 overflow-hidden rounded-lg">
              <img
                src="/platform image.png"
                alt="DoGigz Platform Mockup"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg p-4">
              <h3 className="mb-2 text-lg font-medium">Find Your Next Gig</h3>
              <p className="text-sm text-muted-foreground">
                Browse hundreds of gigs that match your skills and interests. Filter by location, salary, and more.
              </p>
            </div>
            <div className="rounded-lg p-4">
              <h3 className="mb-2 text-lg font-medium">Learn New Skills</h3>
              <p className="text-sm text-muted-foreground">
                Master in-demand skills with expert courses. Level up your profile to attract more opportunities.
              </p>
            </div>
            <div className="rounded-lg p-4">
              <h3 className="mb-2 text-lg font-medium">Connect & Collaborate</h3>
              <p className="text-sm text-muted-foreground">
                Expand your network, showcase your work, and collaborate with peers to grow your career.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  