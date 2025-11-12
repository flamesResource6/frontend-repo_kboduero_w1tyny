import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Tentang' },
  { href: '#projects', label: 'Proyek' },
  { href: '#skills', label: 'Keahlian' },
  { href: '#contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)
  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tight">
            hamz<span className="text-blue-600">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center rounded-md bg-blue-600 text-white text-sm font-medium px-4 py-2 hover:bg-blue-700 transition-colors"
            >
              Hubungi Saya
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={toggle} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={close} className="text-gray-700 py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={close} className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-medium px-4 py-2">
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
