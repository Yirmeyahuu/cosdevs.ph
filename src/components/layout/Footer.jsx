import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Works', to: '/work' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61582553202066',
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cosdevs/',
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/cos-devsph',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    label: 'Email',
    href: 'mailto:cosdevsph@outlook.ph',
    icon: <Mail className="w-5 h-5" />,
  },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Brand */}
          <div>
            <img
              src="/COSDEVSLOGOTEXT.webp"
              alt="COS Devs"
              className="h-24 w-auto"
            />
            <p className="text-zinc-500 text-base mt-3 leading-relaxed">
              Building digital products that are fast, scalable, and built to last.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <p className="text-zinc-400 text-sm uppercase tracking-widest mb-4">Navigation</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-zinc-500 hover:text-white transition-colors duration-300 text-base font-normal w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Social */}
          <div>
            <p className="text-zinc-400 text-sm uppercase tracking-widest mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-300 text-base font-normal w-fit"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} COS Devs. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm">COS Devs</p>
        </div>
      </div>
    </footer>
  )
}