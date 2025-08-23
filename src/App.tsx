import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/docs" element={<DocsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Cfd Analysis Platform
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Computational Fluid Dynamics analysis platform with 3D visualization and WebAssembly processing
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
            Try Demo
          </button>
          <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            View Docs
          </button>
        </div>
      </div>
    </div>
  )
}

function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-8">Demo</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <p className="text-gray-300">Demo functionality coming soon...</p>
      </div>
    </div>
  )
}

function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-8">Documentation</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <p className="text-gray-300">Documentation coming soon...</p>
      </div>
    </div>
  )
}

export default App