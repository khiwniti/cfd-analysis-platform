import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-white">
            Cfd Analysis Platform
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/demo" className="text-gray-300 hover:text-white transition-colors">
              Demo
            </Link>
            <Link to="/docs" className="text-gray-300 hover:text-white transition-colors">
              Docs
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}