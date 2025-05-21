import { useState } from "react"
import { Menu } from "lucide-react"
import { Outlet } from "react-router-dom"
import CustomButton from "../CustomButton"
import Sidebar from "./Sidebar"

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <CustomButton
        variant="ghost"
        size="icon"
        className="top-4 left-4 z-50 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-6 w-6 text-black/40" />
      </CustomButton>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="lg:pl-64">
        <main className="p-4 md:p-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout