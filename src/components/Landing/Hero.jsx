import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Hero() {
  return (
    <section className="relative bg-background py-12 md:py-20 md:h-screen lg:py-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-background/10">
        {/* This is a placeholder for shadow effect, we'd normally use a real image */}
        <img src="/hero image.jpg" className="object-cover w-full h-full" />
      </div>
      <div className="relative z-10 mx-auto flex flex-col items-center px-4 text-center md:px-6 lg:px-8">
        <h1 className="mb-4 text-2xl text-slate-700 font-bold tracking-tight md:text-5xl lg:text-6xl">
          Gain <span className="text-[#F2FCB2]">Skills</span>. <span className="text-[#DBFAD1]">Get Gigs.</span>
          <br />
          Grow Your <span className="text-basic">Career</span>.
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/80">
          Master in-demand skills with expert-led courses and connect with real gig
          opportunities that fit your passion. Level up for a rewarding experience.
        </p>
        <div className="relative mb-8 w-full max-w-md">
          <Input
            type="text"
            placeholder="Job title, keyword or company"
            className="h-12 rounded-md bg-black text-white pr-12 shadow-sm border-1 focus:ring-2 focus:ring-basic focus:ring-offset-0"
            aria-label="Search for jobs, gigs, or courses"
          />
          <Button
            size="icon"
            className="absolute right-1 top-1 h-10 w-10 rounded-full bg-basic text-black hover:bg-basic-Default/80"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
