import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Logo / Brand */}
          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Portfolio<span className="text-accent">.</span>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-8 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base px-2">
            Creating digital experiences that inspire and deliver results
          </p>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:space-x-6 mb-8">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Skills</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2024 Zacky. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
