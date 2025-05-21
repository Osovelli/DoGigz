"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CustomButton from "@/components/CustomButton"

export default function EditProfilePage() {
  const [profileImage, setProfileImage] = useState("/john smith.jpg")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    bio: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Show success message or redirect
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Edit Profile</h2>

      <form onSubmit={handleSubmit}>
        {/* Profile Image */}
        <div className="flex justify-start mb-8">
          <div className="relative">
            <img
              src={profileImage || "/placeholder.svg"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <input type="file" id="profile-image" accept="image/*" className="hidden" onChange={handleImageChange} />
            <label
              htmlFor="profile-image"
              className="absolute bottom-0 right-0 bg-white rounded-full p-1 border cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </label>
          </div>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <Input
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div>
            <Input
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div>
            <Input
              name="otherName"
              placeholder="Other name (optional)"
              value={formData.otherName}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
        </div>

        {/* Age and Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Select value={formData.age} onValueChange={(value) => handleSelectChange("age", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Age" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                  <SelectItem key={age} value={age.toString()}>
                    {age}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Phone and Email */}
        <div className="space-y-4 mb-4">
          <div>
            <Input
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="mb-6">
          <Textarea
            name="bio"
            placeholder="Brief bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="w-full h-32"
          />
        </div>

        {/* Submit Button */}
        <CustomButton
          type="submit"
          className="w-full bg-[#a8e9d5] hover:bg-[#98d9c5] text-black font-medium py-6 h-auto rounded-full"
        >
          Save
        </CustomButton>
      </form>
    </div>
  )
}
