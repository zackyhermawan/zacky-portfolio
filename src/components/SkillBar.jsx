import React from 'react'

const SkillBar = ({ skill, percent }) => {
  return (
    <div>
      <div className="flex justify-between text-sm sm:text-base lg:text-lg mb-2">
        <span className="font-semibold text-gray-900">{skill}</span>
        <span className="text-primary font-semibold text-purple-600">
          {percent}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 sm:h-3 rounded-full skill-bar"
          style={{ width: percent }}
        ></div>
      </div>
    </div>
  )
}

export default SkillBar
