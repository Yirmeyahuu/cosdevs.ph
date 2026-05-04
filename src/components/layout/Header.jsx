import React from 'react'

export default function Header() {
  return (
    <header className="w-full bg-brandBlue-dark py-6 px-8 flex items-center justify-between shadow">
      <div className="text-2xl text-white tracking-wide">
        COS Devs
      </div>
      <div className="text-brandBlue-medium text-lg">
        Innovative Solutions for Your Business
      </div>
      {/* Add quick actions or user profile here if needed */}
    </header>
  )
}