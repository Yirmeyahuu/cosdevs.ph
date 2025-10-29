import { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xovpdlzz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-brandBlue-darkest via-brandBlue-dark to-cyan-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center animate-pageFadeIn"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-blue-200/80 max-w-2xl mx-auto">
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Left Side: Contact Information */}
            <div className="p-8 md:p-12 bg-slate-800/30">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-blue-200/90 mb-8">
                Fill out the form and our team will get back to you within 24 hours. Or, reach out to us directly through one of the channels below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-500/10 p-3 rounded-full">
                    <HiOutlinePhone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-lg text-white">(+63) 908 560 8811</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-500/10 p-3 rounded-full">
                    <HiOutlineMail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-lg text-white">contact@cosdevs.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-500/10 p-3 rounded-full">
                    <HiOutlineLocationMarker className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-lg text-white">Bacolod City, Negros Island, Philippines, 6100</span>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success/Error Message */}
                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-400/30 rounded-2xl text-green-400 animate-fadeIn">
                    <CheckCircle size={20} className="flex-shrink-0" />
                    <span className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-400/30 rounded-2xl text-red-400 animate-fadeIn">
                    <AlertCircle size={20} className="flex-shrink-0" />
                    <span className="text-sm font-medium">Oops! Something went wrong. Please try again.</span>
                  </div>
                )}

                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="peer w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
                    placeholder="Your Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 text-cyan-400 text-sm font-medium bg-brandBlue-darkest px-2 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-200/50 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:bg-brandBlue-darkest"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="peer w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
                    placeholder="Your Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 text-cyan-400 text-sm font-medium bg-brandBlue-darkest px-2 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-200/50 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:bg-brandBlue-darkest"
                  >
                    Your Email
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="peer w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
                    placeholder="Subject"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-4 -top-2.5 text-cyan-400 text-sm font-medium bg-brandBlue-darkest px-2 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-200/50 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:bg-brandBlue-darkest"
                  >
                    Subject
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="peer w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200 resize-none"
                    placeholder="Your Message"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-2.5 text-cyan-400 text-sm font-medium bg-brandBlue-darkest px-2 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-200/50 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:bg-brandBlue-darkest"
                  >
                    Your Message
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
                {/* Honeypot field to prevent spam */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes pageFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-pageFadeIn {
          animation: pageFadeIn 0.5s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}