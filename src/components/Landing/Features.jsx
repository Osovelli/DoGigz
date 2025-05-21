import FeatureCard from "./FeatureCard";

export function Features() {
    return (
      <section className="py-12 md:py-16 lg:py-20">
        <div className="px-4 md:px-6">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Why Choose DoGigz?</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<UserIcon className="h-6 w-6" />}
              title="Find Gigs That Fit Your Lifestyle"
              description="Flexible, remote, and in-person opportunities."
            />
            <FeatureCard
              icon={<GraduationCapIcon className="h-6 w-6" />}
              title="Learn from Industry Experts"
              description="Level up with courses designed for real-world success."
            />
            <FeatureCard
              icon={<UsersIcon className="h-6 w-6" />}
              title="Connect with Professionals Worldwide"
              description="Build your network and collaborate with others."
              iconColor={'bg-basic'}
            />
            <FeatureCard
              icon={<LayoutDashboardIcon className="h-6 w-6" />}
              title="Manage Your Work in One Place"
              description="Seamlessly track gigs, payments, and progress."
            />
          </div>
        </div>
      </section>
    );
  }
  
  
  function UserIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  }
  
  function GraduationCapIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    );
  }
  
  function UsersIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  
  function LayoutDashboardIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    );
  }