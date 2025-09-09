import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          
          {/* Foto */}
          <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 max-h-[500px] md:max-h-[650px] lg:max-h-[700px]">
            <img
              src="profile.jpg"
              alt="Zaki's Profile"
              className="rounded-2xl shadow-xl object-top object-cover w-full h-full"
            />
          </div>

          {/* Konten */}
          <div className="w-full lg:w-1/2 animate-fade-in-up text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About Me
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Saya seorang pengembang full-stack yang penuh semangat dengan pengalaman lebih dari 3 tahun dalam menciptakan solusi digital yang berdampak nyata. Perjalanan saya di dunia teknologi dimulai dengan rasa ingin tahu tentang cara kerja berbagai hal, dan telah berkembang menjadi karier yang didedikasikan untuk membangun aplikasi inovatif.
            </p>

            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Saya percaya pada kode yang bersih, desain yang berpusat pada pengguna, dan pembelajaran berkelanjutan. Setiap proyek adalah kesempatan untuk memecahkan masalah kompleks dan memberikan nilai luar biasa bagi klien dan pengguna.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8 text-sm sm:text-base md:text-lg">
              <div>
                <h4 className="font-semibold text-blue-500 mb-2">Education</h4>
                <p className="text-gray-600">Mahasiswa Universitas Teknologi Yogyakarta</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-500 mb-2">Experience</h4>
                <p className="text-gray-600">2+ Tahun Pengalaman</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-500 mb-2">Location</h4>
                <p className="text-gray-600">Indonesia</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-500 mb-2">Availability</h4>
                <p className="text-gray-600">Terbuka untuk Proyek</p>
              </div>
            </div>

            {/* Tombol CV */}
            <a
              href={`${import.meta.env.BASE_URL}Sultan_Zacky_Hermawan_CV.pdf`}
              target='_blank'
              className="inline-flex items-center text-base sm:text-lg font-semibold text-blue-500 hover:text-purple-500"
            >
              Download CV <i className="fas fa-download ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
