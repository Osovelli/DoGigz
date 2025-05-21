"use client"

import { useState, useEffect } from "react"
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom"
import { Bell, FileText, HelpCircle, LogOut, Lock, User } from "lucide-react"
import { cn } from "@/lib/utils"

// Updated account navigation items with sections
const accountItems = {
  general: [
    { icon: User, label: "Edit Profile", href: "/account" },
    { icon: FileText, label: "Work Samples", href: "/account/work-samples" },
    { icon: Bell, label: "Notification", href: "/account/notification" },
    { icon: Lock, label: "Login and security", href: "/account/security" },
  ],
  others: [
    { icon: HelpCircle, label: "Help Center", href: "/account/help-center" },
    { icon: FileText, label: "Terms & Conditions", href: "/account/terms" },
    { icon: FileText, label: "Privacy Policy", href: "/account/privacy" },
  ],
}

function AccountLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState("Edit Profile")

  // Set active section based on current route
  useEffect(() => {
    const path = location.pathname

    // Check in general section
    const generalItem = accountItems.general.find(
      (item) => item?.href === path || (path === "/account" && item?.href === "/account"),
    )

    if (generalItem) {
      setActiveSection(generalItem.label)
      return
    }

    // Check in others section
    const otherItem = accountItems.others.find((item) => item?.href === path)

    if (otherItem) {
      setActiveSection(otherItem.label)
    }
  }, [location])

  const handleLogout = () => {
    // Add logout logic here
    navigate("/signin")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column - Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg border p-0 overflow-hidden">
              {/* Profile Card */}
              <div className="relative">
                <img
                  src="/john smith.jpg"
                  alt="Profile background"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h2 className="text-2xl font-bold uppercase">John Smith</h2>
                  <p className="text-sm">johnsmith@dogigz.com</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center py-4 px-6">
                <div>
                  <div className="text-xs text-muted-foreground">Review</div>
                  <div className="font-medium">4.5/5.0</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Jobs count</div>
                  <div className="font-medium">46</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Joined</div>
                  <div className="font-medium">2022</div>
                </div>
              </div>

              {/* Bio */}
              <div className="px-6 pb-4">
                <h3 className="font-medium mb-2">Bio</h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at massa mi. Aliquam in hendrerit urna.
                  Pelle sit amet sapien...
                </p>
              </div>

              {/* General Section */}
              <div className="px-6 py-4">
                <h3 className="font-medium mb-2">General</h3>
                <nav className="space-y-1">
                  {accountItems.general.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition-colors",
                        activeSection === item.label ? "text-primary" : "text-gray-600 hover:bg-gray-100",
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Others Section */}
              <div className="px-6 py-4 border-t">
                <h3 className="font-medium mb-2">Others</h3>
                <nav className="space-y-1">
                  {accountItems.others.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition-colors",
                        activeSection === item.label ? "text-primary" : "text-gray-600 hover:bg-gray-100",
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Logout Button */}
              <div className="px-6 py-4 border-t">
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm rounded-lg transition-colors bg-red-50 text-red-500 hover:bg-red-100"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Content Area */}
          <div className="md:col-span-3 bg-white rounded-lg border p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
