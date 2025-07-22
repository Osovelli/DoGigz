import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import SignUp from "./Pages/Auth/SignUp"
import VerifyEmail from "./Pages/Auth/VerifyEmail"
import UserType from "./Pages/Auth/UserType"
import GigPreferences from "./Pages/Auth/GigPreference"
import IdentityVerification from "./Pages/Auth/IdentityVerification"
import DocumentVerification from "./Pages/Auth/DocumentVerification"
import VerificationDetails from "./Pages/Auth/VerificationDetails"
import LivenessCheck from "./Pages/Auth/LivenessCheck"
import CompleteProfile from "./Pages/Auth/CompleteProfile"
import JobPreferences from "./Pages/Auth/JobPreference"
import ResetPassword from "./Pages/Auth/ResetPassword"
//import CreateCourse from "./Pages/CreateCourse"
import MyCreations from "./Pages/MyCreation"
import CourseHistoryPage from "./Pages/CourseHistoryPage"
import WorkSamples from "./Pages/Account/WorkSample"
import Notification from "./Pages/Account/Notification"
import ChangePassword from "./Pages/Account/ChangePassword"
import HelpCenter from "./Pages/Account/HelpCenter"
import Terms from "./Pages/Account/Terms"
import Privacy from "./Pages/Account/Privacy"
import Landing from "./Pages/Landing/Landing"
import Login from "./Pages/Auth/Login"
import ConfirmPassword from "./Pages/Auth/ConfirmPassword"
import AppLayout from "./components/App/AppLayout"
import HomePage from "./Pages/Home/HomePage"
import AllCoursesPage from "./Pages/Home/AllCoursesPage"
import AccountLayout from "./components/App/AccountLayout"
import EditProfilePage from "./Pages/Account/EditProfilePage"
import WalletPage from "./Pages/Wallet/WalletPage"
import GigsPage from "./Pages/Explore/GigsPage"
import ExploreCoursesPage from "./Pages/Explore/ExploreCoursesPage"
import RewardsPage from "./Pages/Explore/RewardsPage"
import MyCasePage from "./Pages/Case/MyCasePage"
import Messages from "./Pages/Message/MessagesPage"
import GigDetailPage from "./Pages/Case/GigsDetailPage"
import VideoCallPage from "./Pages/VideoCallPage"
import CreateCoursePage from "./Pages/CreateCourse"
import CreateGigPage from "./Pages/CreateGig"
import OneOnOneCourseDetailsPage from "./Pages/OneOnOneCourseDetailsPage"




// View Transition wrapper
function ViewTransitionWrapper({ children }) {
  const location = useLocation()

  useEffect(() => {
    // Check if the browser supports View Transitions API
    if (!document.startViewTransition) {
      return
    }

    // Start a view transition
    document.startViewTransition(() => {
      // Force a reflow to ensure the transition is applied
      document.documentElement.scrollTop
    })
  }, [location])

  return children
}

function App() {
  return (
    <Router>
      <ViewTransitionWrapper>
      <Routes>
        {/* Auth routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/user-type" element={<UserType />} />
        <Route path="/gig-preferences" element={<GigPreferences />} />
        <Route path="/job-preferences" element={<JobPreferences />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/identity-verification" element={<IdentityVerification />} />
        <Route path="/document-verification" element={<DocumentVerification />} />
        <Route path="/verification-details" element={<VerificationDetails />} />
        <Route path="/liveness-check" element={<LivenessCheck />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />

        {/* DoGigz routes */}
        {/* Main routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* app routes */}
        <Route path="/dashboard" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="all-courses" element={<AllCoursesPage />} />
          <Route path="course-history" element={<CourseHistoryPage />} />
          <Route path="/dashboard/account" element={<AccountLayout />}>
            <Route index element={<EditProfilePage />} />
            <Route path="work-samples" element={<WorkSamples />} />
            <Route path="notification" element={<Notification />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="help-center" element={<HelpCenter />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
            {/* Add other account routes as needed */}
          </Route>
          <Route path="case" element={<MyCasePage />} />
          <Route path="creations" element={<MyCreations />} />
          <Route path="create-course" element={<CreateCoursePage />} />
          <Route path="create-gig" element={<CreateGigPage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="gigs" element={<GigsPage />} />
          <Route path="gig-detail/:gigId" element={<GigDetailPage />} />
          <Route path="courses" element={<ExploreCoursesPage />} />
          <Route path="course-detail/:courseId" element={<OneOnOneCourseDetailsPage />} />
          <Route path="rewards" element={<RewardsPage />} />
          
          <Route path="message" element={<Messages />} />
          <Route path="video-call/:id" element={<VideoCallPage videoOff={true} />} />
          <Route path="call/:id" element={<VideoCallPage videoOff={true} />} />
        </Route>

        </Routes>
      </ViewTransitionWrapper>
    </Router>
  )
}

export default App