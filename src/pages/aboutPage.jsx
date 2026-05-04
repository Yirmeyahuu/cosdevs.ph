import { useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import poypoyImg from '../assets/images/teamProfile/poypoy.webp';
import bayerImg from '../assets/images/teamProfile/bayer.webp';
import roqueImg from '../assets/images/teamProfile/roque.webp';
import wenardImg from '../assets/images/teamProfile/wenard.webp';
import jhinwooImg from '../assets/images/teamProfile/jhinwoo.webp';
import johnImg from '../assets/images/teamProfile/john.webp';
import mahinayImg from '../assets/images/teamProfile/kenken.webp';
import kurtImg from '../assets/images/teamProfile/kurtskie.webp';
import clarkImg from '../assets/images/teamProfile/clark.webp';
import kyrellImg from '../assets/images/teamProfile/kyrell.webp';

const teamMembers = [
  {
    id: 1,
    name: 'Jeremiah',
    nickname: 'Pantaras',
    position: 'Founder · Lead Project Manager ·  AI Engineer · Senior Software Engineer',
    gradient: 'from-purple-500 via-pink-400 to-yellow-300',
    image: poypoyImg,
    handle: '@jeremiahpantaras',
    portfolio: { url: 'https://jeremiah.cosedevs.com/' }
  },
  {
    id: 2,
    name: 'John Michael',
    nickname: 'Pantaras',
    position: 'Co-founder · Company Advisor · Business Strategist',
    gradient: 'from-yellow-400 via-orange-400 to-red-500',
    image: johnImg,
    handle: '@Archael2025',
    portfolio: { url: '#' }
  },
    {
    id: 3,
    name: 'Brian Steven',
    nickname: 'Pajarillo',
    position: 'Co-founder · Graphic Artist · Game Developer',
    gradient: 'from-green-400 via-teal-400 to-blue-500',
    image: jhinwooImg,
    handle: '@Jhinwoo2025',
    portfolio: { url: '#' }
  },
  {
    id: 4,
    name: 'Joseph Charles',
    nickname: 'Roque',
    position: 'Co-founder · Cybersecurity Specialist · Quality Assurance · Cloud Engineer',
    gradient: 'from-blue-600 via-cyan-400 to-green-300',
    image: roqueImg,
    handle: '@Roque2025',
    portfolio: { url: 'https://caelum.cosedevs.com/' }
  },
  {
    id: 5,
    name: 'Krishnan',
    nickname: 'Mahinay',
    position: 'Co-founder · Cybersecurity Specialist · Quality Assurance',
    gradient: 'from-red-600 via-rose-400 to-red-300',
    image: mahinayImg,
    handle: '@Kinkin2025',
    portfolio: { url: 'https://kerokenn.cosedevs.com/' }
  },
  {
    id: 6,
    name: 'John Eric',
    nickname: 'Bayer',
    position: 'Co-founder · Full Stack Developer · System Analyst',
    gradient: 'from-indigo-500 via-blue-400 to-cyan-300',
    image: bayerImg,
    handle: '@Bonbon2025',
    portfolio: { url: 'https://gengarit.cosedevs.com/' }
  },
  {
    id: 7,
    name: 'Wenard Roy',
    nickname: 'Barrera',
    position: 'Co-founder · UI/UX Designer · Front End Developer',
    gradient: 'from-pink-500 via-red-400 to-yellow-300',
    image: wenardImg,
    handle: '@Royroy2025',
    portfolio: { url: 'https://kr1stik.cosedevs.com/' }
  },
  {
    id: 8,
    name: 'Kurt Zhynkent',
    nickname: 'Canja',
    position: 'Full Stack Developer · Data Analyst',
    gradient: 'from-pink-500 via-red-400 to-yellow-300',
    image: kurtImg,
    handle: '@kcanja2026',
    portfolio: { url: 'https://kcanja.cosedevs.com/' }
  },
  {
    id: 9,
    name: 'Clark Jim',
    nickname: 'Gabiota',
    position: 'Full Stack Developer · Backend Developer',
    gradient: 'from-pink-500 via-red-400 to-yellow-300',
    image: clarkImg,
    handle: '@Mitakashime2026',
    portfolio: { url: 'https://mitakashime.cosedevs.com/' }
  },
  {
    id: 10,
    name: 'Kyrell',
    nickname: 'Santillan',
    position: 'Full Stack Developer · Graphic Designer · UI/UX Designer',
    gradient: 'from-pink-500 via-red-400 to-yellow-300',
    image: kyrellImg,
    handle: '@Hazy2026',
    portfolio: { url: 'https://hazy.cosedevs.com/' }
  }
];

/* ---------- Stars canvas ---------- */
function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const STAR_COUNT = 260;
    const stars = [];

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function buildStars() {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.2,
          alpha: Math.random() * 0.6 + 0.2,
          speed: Math.random() * 0.004 + 0.002,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        const a = s.alpha * (0.55 + 0.45 * Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(() => { resize(); buildStars(); });
    ro.observe(canvas);
    resize();
    buildStars();
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default function AboutPage() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true, playOnInit: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false, dragFree: false, containScroll: 'trimSnaps' },
    [autoplayPlugin.current]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section className="relative min-h-screen bg-black py-24 pt-40 px-6 lg:px-12 overflow-hidden">

      {/* Galaxy radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,30,100,0.45)_0%,rgba(10,5,30,0.25)_55%,transparent_80%)] blur-2xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(20,50,90,0.3)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* Stars */}
      <StarField />

      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs">About Us</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white tracking-tight mt-3 leading-tight">
            Meet COS Devs
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl leading-relaxed">
            A passionate team of developers, designers, and strategists based in Bacolod City, Philippines —
            building modern, scalable software for businesses across the Visayas and beyond.
          </p>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {/* Mission */}
          <motion.div variants={itemVariants} className="relative bg-zinc-950 border border-white/5 rounded-3xl p-8 md:p-10 overflow-hidden hover:-translate-y-1 hover:border-white/10 transition-all duration-300 ease-out">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-white/3 to-transparent" />
            <div className="relative z-10">
              <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Mission</p>
              <h2 className="text-white text-xl font-medium">Empowering local businesses through software</h2>
              <p className="text-zinc-400 mt-3 leading-relaxed">
                To empower local businesses and small companies across Negros Island by delivering tailored,
                high-quality custom software solutions — simplifying complex challenges and supporting
                their digital success and sustainable growth.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div variants={itemVariants} className="relative bg-zinc-950 border border-white/5 rounded-3xl p-8 md:p-10 overflow-hidden hover:-translate-y-1 hover:border-white/10 transition-all duration-300 ease-out">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-white/3 to-transparent" />
            <div className="relative z-10">
              <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Vision</p>
              <h2 className="text-white text-xl font-medium">Leading digital transformation by 2030</h2>
              <p className="text-zinc-400 mt-3 leading-relaxed">
                To be the trusted, long-term digital transformation partner for SMEs across the Visayas —
                recognized for impact, reliability, and unwavering commitment to client success.
              </p>
            </div>
          </motion.div>

          {/* Why Choose Us — full width */}
          <motion.div variants={itemVariants} className="relative bg-zinc-950 border border-white/5 rounded-3xl p-8 md:p-10 overflow-hidden hover:-translate-y-1 hover:border-white/10 transition-all duration-300 ease-out md:col-span-2">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-white/3 to-transparent" />
            <div className="relative z-10">
              <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Why Choose COS Devs</p>
              <h2 className="text-white text-xl font-medium">The right partner for your growth</h2>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  'Expertise in modern frameworks and technologies',
                  'Client-focused approach and transparent communication',
                  'Creative solutions tailored to your needs',
                  'Timely delivery and ongoing support',
                  'Agile development and rapid prototyping',
                  'Mobile-first, responsive, and accessible design',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-zinc-600 shrink-0" />
                    <span className="text-zinc-400 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Team Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs mb-3">The People</p>
          <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-10">Our Team</h2>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4 px-1 py-2">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="relative flex-none w-[260px]"
                    onMouseEnter={() => autoplayPlugin.current.stop()}
                    onMouseLeave={() => autoplayPlugin.current.play()}
                  >
                    <div className="relative bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden h-[420px] hover:-translate-y-1 hover:border-white/10 transition-all duration-300 ease-out">
                      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-white/3 to-transparent" />

                      <div className="relative z-10 p-6 h-full flex flex-col">
                        {/* Profile image */}
                        <div className="w-full h-44 flex items-end justify-center mb-4 overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="h-full w-auto object-contain"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-white text-lg font-medium leading-tight">
                            {member.nickname},
                          </h3>
                          <p className="text-zinc-400 text-sm">{member.name}</p>
                          <p className="text-zinc-500 text-xs mt-2 leading-relaxed line-clamp-2">
                            {member.position}
                          </p>
                          <p className="text-zinc-500 text-xs mt-auto mb-4">{member.handle}</p>

                          {/* Social icons */}
                          <div className="flex gap-2">
                            <a
                              href={member.portfolio.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl flex items-center justify-center transition-all duration-200"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaGlobe className="text-zinc-400 text-xs" />
                            </a>
                            <div className="w-9 h-9 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center">
                              <FaGithub className="text-zinc-400 text-xs" />
                            </div>
                            <div className="w-9 h-9 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center">
                              <FaLinkedin className="text-zinc-400 text-xs" />
                            </div>
                            <div className="w-9 h-9 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center">
                              <FaTwitter className="text-zinc-400 text-xs" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next */}
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-zinc-900 border border-white/5 hover:border-white/10 rounded-full flex items-center justify-center transition-all duration-200 z-10"
            >
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-zinc-900 border border-white/5 hover:border-white/10 rounded-full flex items-center justify-center transition-all duration-200 z-10"
            >
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}