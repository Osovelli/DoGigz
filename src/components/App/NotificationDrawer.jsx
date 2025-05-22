import { X, Bell, Check } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

// Sample notification data
const initialNotifications = [
  {
    id: 1,
    title: "Your call has been confirmed",
    description: "Your call with John Doe has been scheduled for tomorrow at 2 PM.",
    time: "5 min ago",
    read: false,
  },
  {
    id: 2,
    title: "You have a new message!",
    description: "Sarah sent you a message regarding the project deadline.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    title: "Your subscription is expiring soon!",
    description: "Your premium subscription will expire in 3 days. Renew now to avoid interruption.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 4,
    title: "Payment received",
    description: "You received a payment of $250 for your gig.",
    time: "Yesterday",
    read: true,
  },
  {
    id: 5,
    title: "New course available",
    description: "A new course on UI/UX design is now available.",
    time: "2 days ago",
    read: true,
  },
]

export default function NotificationDrawer({ isOpen, onClose }) {
  const [notifications, setNotifications] = useState(initialNotifications)

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const unreadCount = notifications.filter((notification) => !notification.read).length

  return (
    <div
      className={cn(
        "fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Bell size={20} />
          <h2 className="text-lg font-semibold">Notifications</h2>
          {unreadCount > 0 && (
            <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-red-500 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-sm text-gray-600 hover:text-gray-900"
              aria-label="Mark all as read"
            >
              <span className="flex items-center gap-1">
                <Check size={16} />
                Mark all read
              </span>
            </button>
          )}
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close notifications">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="overflow-y-auto h-full pb-20">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 text-gray-500">
            <Bell size={40} className="mb-2 opacity-50" />
            <p>No notifications</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={cn(
                  "p-4 hover:bg-gray-50 transition-colors cursor-pointer",
                  !notification.read && "bg-blue-50",
                )}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start gap-3">
                  {!notification.read && <span className="flex h-2 w-2 mt-1.5 rounded-full bg-blue-500" />}
                  <div className={cn("grid gap-1", notification.read && "ml-5")}>
                    <p className="font-medium text-sm">{notification.title}</p>
                    <p className="text-sm text-gray-600">{notification.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
