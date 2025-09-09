import { useState } from 'react';
import Title from './Title'
import emailjs from 'emailjs-com'

const Contact = () => {

   const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      await emailjs.send(
        "service_fggp58p",
        "template_6gdasip",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "iPMGFQk7ehA9UKYe_"
      );

      // reset form
      setForm({ name: "", email: "", message: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Gagal mengirim pesan ❌");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        <Title 
          judul="Let's Work Together" 
          text="Siap mewujudkan ide Anda? Mari diskusikan proyek Anda dan ciptakan sesuatu yang luar biasa." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-10 sm:mt-12">
          
          <div className="animate-fade-in-up">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">Get In Touch</h3>
            
            <form id="contact-form" className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label className="block text-sm md:text-base font-semibold mb-2 text-gray-800">Name</label>
                <input 
                  type="text" 
                  name="name"  // <--- harus "name"
                  value={form.name}
            onChange={handleChange}
                  className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base" 
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm md:text-base font-semibold mb-2 text-gray-800">Email</label>
                <input 
                  type="email" 
                  name="email"  // <--- harus "email"
                  value={form.email}
            onChange={handleChange}
                  className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base" 
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm md:text-base font-semibold mb-2 text-gray-800">Message</label>
                <textarea 
                  rows="5"
                  name="message"  // <--- sesuai template
                  value={form.message}
            onChange={handleChange}
                  className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base" 
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 flex justify-center items-center
              ${loading ? "bg-gray-400" : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500"}`}
          >
            {loading ? "Mengirim..." : "Send Message"}
          </button>
            </form>
          </div>

          {success && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform scale-100 transition duration-300 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="text-xl font-bold mt-4 text-green-500">Berhasil Terkirim!</h2>
            <p className="text-gray-600 mt-2">Pesan Anda sudah berhasil dikirim ✅</p>
          </div>
        </div>
      )}


          <div className="animate-fade-in-up w-full">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start sm:items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <i className="fas fa-envelope text-blue-500 text-base sm:text-lg"></i>
                </div>
                <div className="text-sm sm:text-lg">
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600 break-words">sultanzacky318@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <i className="fas fa-phone text-blue-500 text-base sm:text-lg"></i>
                </div>
                <div className="text-sm sm:text-lg">
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">082221002987</div>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <i className="fas fa-map-marker-alt text-blue-500 text-base sm:text-lg"></i>
                </div>
                <div className="text-sm sm:text-lg">
                  <div className="font-semibold text-gray-900">Location</div>
                  <div className="text-gray-600">Indonesia</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">Follow Me</h4>
              <div className="flex flex-wrap gap-3">
                <a href="https://github.com/zackyhermawan" target='_blank' className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 text-black rounded-full flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/sultan-zacky-hermawan" target='_blank' className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 text-black rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com/zackyhermawann_" target='_blank' className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 text-black rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/Sultanzakii" target='_blank' className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 text-black rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
