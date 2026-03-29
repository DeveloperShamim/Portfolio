import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'About', href: 'about' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'Creative', href: 'creative' },
  { label: 'Timeline', href: 'timeline' },
  { label: 'Contact', href: 'contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['home', ...NAV.map(n => n.href)]
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(5,5,7,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="flex items-center gap-3 group"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-black text-sm"
            style={{
              background: 'linear-gradient(135deg, #00b4ff, #7c3aed)',
              color: '#050507',
              boxShadow: '0 0 16px rgba(0,180,255,0.3)',
            }}
          >
            M
          </div>
          <span
            className="font-display font-bold hidden sm:block"
            style={{ fontSize: '0.95rem', color: '#f0f2f8', letterSpacing: '-0.02em' }}
          >
            Shamim<span style={{ color: '#00b4ff' }}>.</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => go(href)}
              className="relative px-4 py-2 rounded-md transition-all duration-200"
              style={{
                fontSize: '0.82rem',
                fontWeight: 500,
                color: active === href ? '#f0f2f8' : '#5a5f7a',
                background: active === href ? 'rgba(255,255,255,0.04)' : 'transparent',
              }}
            >
              {label}
              {active === href && (
                <span
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full"
                  style={{ width: 4, height: 4, background: '#00b4ff', boxShadow: '0 0 6px #00b4ff' }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => go('contact')}
            className="btn-primary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.78rem' }}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{ color: '#a8adc4' }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{
            background: 'rgba(5,5,7,0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {NAV.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => go(href)}
              className="block w-full text-left py-3 border-b"
              style={{
                fontSize: '0.9rem',
                color: active === href ? '#00b4ff' : '#a8adc4',
                borderColor: 'rgba(255,255,255,0.05)',
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="btn-primary mt-4 w-full justify-center"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  )
}
