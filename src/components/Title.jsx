import React from 'react'

const Title = ({ judul, text }) => {
  return (
    <div className="text-center mb-12 md:mb-16 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold mb-4 leading-snug">
        {judul}
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        {text}
      </p>
    </div>
  )
}

export default Title
