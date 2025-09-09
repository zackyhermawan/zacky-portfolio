import React from 'react'
import Title from './Title'

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        
        <Title
          judul="What I Offer"
          text="Saya membantu bisnis dan personal membangun kehadiran digital yang profesional."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
          <div className="p-5 sm:p-6 bg-white rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-500">Web Development</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Pembuatan website modern, responsif, cepat, dan mudah digunakan.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="text-lg sm:text-xl font-semibold text-green-500">UI/UX Design</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Desain antarmuka yang menarik dengan pengalaman pengguna yang nyaman.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500">Maintenance</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Perawatan & update website agar selalu aman dan up-to-date.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
