
import Footer from '@/components/Footer'
import { CTA } from '@/components/Landing/CallToAction'
import { Courses } from '@/components/Landing/Courses'
import { Features } from '@/components/Landing/Features'
import { Header } from '@/components/Landing/Header'
import { Hero } from '@/components/Landing/Hero'
import { Jobs } from '@/components/Landing/Jobs'
import { Platform } from '@/components/Landing/Platform'
import React from 'react'

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Features />
          <Platform />
          <Jobs />
          <Courses />
          <CTA />
        </main>
        <Footer />
      </div>
  )
}
