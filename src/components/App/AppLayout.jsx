import { useState } from "react"
import { Outlet, NavLink, Link, useNavigate } from "react-router-dom"
import {
  Home,
  Search,
  Briefcase,
  PenTool,
  Wallet,
  MessageSquare,
  User,
  Bell,
  ChevronDown,
  ChevronRight,
  LogOut,
  Settings,
  UserCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import NotificationDrawer from "./NotificationDrawer"
import UserProfileDrawer from "./UserProfileDrawer"

export default function AppLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMenus, setExpandedMenus] = useState({
    explore: false,
    myCase: false,
    myCreations: false,
  })
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState(false)
  const [isUserProfileDrawerOpen, setIsUserProfileDrawerOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  const handleSignout = () => {
    navigate("/signin")
  }

  const toggleNotificationDrawer = () => {
    setIsNotificationDrawerOpen(!isNotificationDrawerOpen)
    // Close other drawers when opening this one
    if (!isNotificationDrawerOpen) {
      setIsUserProfileDrawerOpen(false)
      setIsUserMenuOpen(false)
    }
  }

  const toggleUserProfileDrawer = () => {
    setIsUserProfileDrawerOpen(!isUserProfileDrawerOpen)
    // Close other drawers when opening this one
    if (!isUserProfileDrawerOpen) {
      setIsNotificationDrawerOpen(false)
      setIsUserMenuOpen(false)
    }
  }

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen)
    // Close drawers when toggling menu
    if (!isUserMenuOpen) {
      setIsNotificationDrawerOpen(false)
      setIsUserProfileDrawerOpen(false)
    }
  }

  return (
    <div className="flex max-h-screen bg-white">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-300 lg:translate-x-0 lg:static lg:w-64",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <Link to="/" className="text-2xl font-bold">
            DoGigz
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                isActive && "bg-[#a8e9d5] text-gray-900",
              )
            }
          >
            <Home size={20} />
            <span>Home</span>
          </NavLink>

          {/* Explore Menu with Submenu */}
          <div>
            <div
              className={cn(
                "flex items-center justify-between gap-3 px-4 py-3 rounded-md hover:bg-gray-100 transition-colors cursor-pointer",
                expandedMenus.explore && "text-black rounded-t-md rounded-b-none",
              )}
              onClick={() => toggleMenu("explore")}
            >
              <div className="flex items-center gap-3">
                <Search size={20} />
                <span>Explore</span>
              </div>
              <ChevronDown size={16} className={cn("transition-transform", expandedMenus.explore && "rotate-180")} />
            </div>

            {/* Submenu Items */}
            {expandedMenus.explore && (
              <div className="ml-10 space-y-1 mt-1">
                <NavLink
                  to="/gigs"
                  className={({ isActive }) =>
                    cn(
                      "block py-2 px-2 rounded-md hover:bg-gray-100 transition-colors",
                      isActive && "bg-[#a8e9d5] text-gray-900",
                    )
                  }
                >
                  Gigs
                </NavLink>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    cn(
                      "block py-2 px-2 rounded-md hover:bg-gray-100 transition-colors",
                      isActive && "bg-[#a8e9d5] text-gray-900",
                    )
                  }
                >
                  Courses
                </NavLink>
                <NavLink
                  to="/rewards"
                  className={({ isActive }) =>
                    cn(
                      "block py-2 px-2 rounded-md hover:bg-gray-100 transition-colors",
                      isActive && "bg-[#a8e9d5] text-gray-900",
                    )
                  }
                >
                  Rewards
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/case"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                isActive && "bg-[#a8e9d5] text-gray-900",
              )
            }
          >
            <Briefcase size={20} />
            <span>Case</span>
          </NavLink>

          <NavLink
            to="/creations"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                isActive && "bg-[#a8e9d5] text-gray-900",
              )
            }
          >
            <PenTool size={20} />
            <span>Creations</span>
          </NavLink>

          <NavLink
            to="/wallet"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                isActive && "bg-[#a8e9d5] text-gray-900",
              )
            }
          >
            <Wallet size={20} />
            <span>Wallet</span>
          </NavLink>

          <NavLink
            to="/message"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                isActive && "bg-[#a8e9d5] text-gray-900",
              )
            }
          >
            <MessageSquare size={20} />
            <span>Messages</span>
          </NavLink>

          <NavLink
            to="/account"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                isActive && "bg-[#a8e9d5] text-gray-900",
              )
            }
          >
            <User size={20} />
            <span>Account</span>
          </NavLink>
        </nav>

        {/* User Profile at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <img src="/avatar.jpeg" alt="User profile" className="w-10 h-10 rounded-full object-cover" />
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">Abayomi Oluwu</p>
              <p className="text-xs text-gray-500 truncate">abayomioluwu@DoGigz.com</p>
            </div>
            <button className="text-gray-500" onClick={handleSignout} aria-label="Sign out">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 border-b border-gray-200 flex items-center justify-between px-4 lg:px-8">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
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
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8e9d5] focus:border-transparent"
              />
            </div>
          </div>

          <span className="md:hidden text-2xl font-bold">Dogigz</span>

          {/* User menu */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button
              className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full"
              onClick={toggleNotificationDrawer}
              aria-label="Notifications"
              aria-expanded={isNotificationDrawerOpen}
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" aria-hidden="true"></span>
            </button>

            {/* User Profile Dropdown */}
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={toggleUserMenu}
                aria-expanded={isUserMenuOpen}
                aria-haspopup="true"
              >
                <img src="/avatar.jpeg" alt="User profile" className="w-8 h-8 rounded-full object-cover" />
                <span className="hidden lg:inline-block font-medium">Abayomi</span>
                <ChevronDown
                  size={16}
                  className={cn(
                    "hidden lg:inline-block text-gray-500 transition-transform",
                    isUserMenuOpen && "rotate-180",
                  )}
                />
              </div>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <button
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={toggleUserProfileDrawer}
                  >
                    <UserCircle size={16} />
                    <span>View Profile</span>
                  </button>
                  <Link
                    to="/settings"
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <Settings size={16} />
                    <span>Settings</span>
                  </Link>
                  <hr className="my-1 border-gray-200" />
                  <button
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    onClick={handleSignout}
                  >
                    <LogOut size={16} />
                    <span>Sign out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>

      {/* Notification Drawer */}
      <NotificationDrawer isOpen={isNotificationDrawerOpen} onClose={() => setIsNotificationDrawerOpen(false)} />

      {/* User Profile Drawer */}
      <UserProfileDrawer isOpen={isUserProfileDrawerOpen} onClose={() => setIsUserProfileDrawerOpen(false)} />

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Overlay for drawers on mobile */}
      {(isNotificationDrawerOpen || isUserProfileDrawerOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            setIsNotificationDrawerOpen(false)
            setIsUserProfileDrawerOpen(false)
          }}
        ></div>
      )}
    </div>
  )
}
