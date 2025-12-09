import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Work from '../components/sections/Work'
import Contact from '../components/sections/Contact'
import Footer from '../components/layout/Footer'

export default function Home() {
  return (
    <main className="animate-pageFadeIn overflow-x-hidden">
      <Hero />
      <Services />
      <About />
      <Work />
      <Contact />
      <Footer />
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
      `}</style>
    </main>
  )
}