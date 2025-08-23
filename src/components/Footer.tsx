import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800/50 border-t border-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Professional Portfolio Project. Built with React + TypeScript + Cloudflare.</p>
          <p className="mt-2">
            <a href="https://portfolio-hub.dev" className="text-blue-400 hover:text-blue-300 transition-colors">
              View Full Portfolio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}