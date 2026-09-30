import React, { useState } from 'react'

const Profile: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: 'Denmar',
    email: 'denmar@pharmadali.com',
    phoneNumber: '09123456789',
    role: 'Superman',
    branch: 'Headquarters',
  })
  
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send an API request to save the user data
    setIsSuccessModalOpen(true)
  }

  return (
    <div className="flex flex-col w-full h-full flex-1 min-h-0 text-sm font-[var(--font-primary)]">
      {/* Header Title */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="m-0 text-[clamp(1.8rem,3vw,2.6rem)] font-regular text-white tracking-wide">
          My Profile
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Details Form */}
        <div className="md:col-span-2 bg-[#424754] rounded-[16px] p-6 lg:p-8 shadow-lg border border-[rgba(255,255,255,0.04)]">
          <h2 className="text-[#8ccfed] text-lg font-bold mb-6 border-b border-[rgba(255,255,255,0.08)] pb-3">Personal Information</h2>
          
          <form onSubmit={handleSave} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-[#8ccfed] mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#404554] text-gray-100 placeholder:text-gray-400 px-4 py-3 rounded-[8px] text-sm focus:outline-none focus:ring-1 focus:ring-[#48aad9] transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-[#8ccfed] mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#404554] text-gray-100 placeholder:text-gray-400 px-4 py-3 rounded-[8px] text-sm focus:outline-none focus:ring-1 focus:ring-[#48aad9] transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-[#8ccfed] mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full bg-[#404554] text-gray-100 placeholder:text-gray-400 px-4 py-3 rounded-[8px] text-sm focus:outline-none focus:ring-1 focus:ring-[#48aad9] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8ccfed] mb-1.5">Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  disabled
                  className="w-full bg-[#353945] text-gray-400 px-4 py-3 rounded-[8px] text-sm cursor-not-allowed border border-transparent"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-[#8ccfed] mb-1.5">Branch</label>
                <input
                  type="text"
                  name="branch"
                  value={formData.branch}
                  disabled
                  className="w-full bg-[#353945] text-gray-400 px-4 py-3 rounded-[8px] text-sm cursor-not-allowed border border-transparent"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4 mt-6 border-t border-[rgba(255,255,255,0.08)]">
              <button
                type="submit"
                className="bg-[#48aad9] hover:bg-[#3ba0d0] text-white font-medium px-8 py-2.5 rounded-[8px] transition-colors shadow text-sm"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* Profile Card / Avatar area */}
        <div className="md:col-span-1 bg-[#424754] rounded-[16px] p-6 lg:p-8 shadow-lg border border-[rgba(255,255,255,0.04)] flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 rounded-full bg-[#48aad9] flex items-center justify-center text-white text-5xl font-bold mb-4 shadow-xl border-4 border-[#323642]">
            {formData.fullName.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-xl font-bold text-white mb-1">{formData.fullName}</h2>
          <p className="text-[#8ccfed] text-sm mb-4">{formData.role}</p>
          
          <div className="w-full bg-[#383d4a] rounded-[10px] p-4 mt-2 border border-white/5 text-left space-y-2 text-xs">
             <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-gray-400">Status</span>
                <span className="text-[#4ade80] font-medium">Active</span>
             </div>
             <div className="flex justify-between items-center pt-1">
                <span className="text-gray-400">Member Since</span>
                <span className="text-white font-medium">Sept 2026</span>
             </div>
          </div>
        </div>
      </div>

      {/* Changes Saved Successfully Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/65 p-4 animate-fade-in">
          <div className="bg-[#292d37] w-full max-w-[440px] rounded-[20px] p-8 shadow-2xl border border-[rgba(255,255,255,0.05)] text-center">
            <div className="w-16 h-16 rounded-full bg-[#00c853]/20 border-2 border-[#00c853] flex items-center justify-center mx-auto mb-5 text-[#00c853]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 className="text-white text-2xl font-bold mb-3">Changes Saved Successfully</h2>
            <p className="text-gray-300 text-sm mb-8">
              Your profile information has been updated.
            </p>
            <div>
              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full py-3 px-4 rounded-[10px] bg-[#00c853] hover:bg-[#00b048] text-white font-semibold transition-colors text-sm cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
