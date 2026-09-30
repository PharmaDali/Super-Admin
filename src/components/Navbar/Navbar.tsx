import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export interface NavbarProps {
  name: string
  role: string
}

const Navbar: React.FC<NavbarProps> = ({ name, role }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    setIsDropdownOpen(false)
    navigate('/')
  }

  const handleProfile = () => {
    setIsDropdownOpen(false)
    navigate('/profile')
  }

  return (
    <header className="flex justify-end items-center px-6 py-4 bg-[#48AAD9] sticky top-0 z-10 w-full shadow-md box-border">
      <div className="flex items-center gap-3 relative" ref={dropdownRef}>
        <div className="flex flex-col items-end justify-center">
          <span className="text-[rgba(4, 4, 4, 0.8)] font-bold text-[15px] leading-[1.2]">{name}</span>
          <span className="text-[rgba(4, 4, 4, 0.8)] text-[13px] leading-[1.2]">{role}</span>
        </div>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[rgba(255,255,255,0.15)] transition-colors border-none bg-transparent cursor-pointer"
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute top-[calc(100%+8px)] right-0 bg-[#323642] border border-[rgba(255,255,255,0.1)] rounded-md shadow-lg min-w-[200px] py-2 z-50">
            <button
              onClick={handleProfile}
              className="w-full text-left px-4 py-2 text-[#e2e8f0] hover:bg-[rgba(255,255,255,0.05)] transition-colors text-[14px]"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-red-400 hover:bg-[rgba(255,255,255,0.05)] transition-colors text-[14px] border-t border-[rgba(255,255,255,0.05)]"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
