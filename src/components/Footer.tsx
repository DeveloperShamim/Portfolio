const year = new Date().getFullYear()

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: '#08090d', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button onClick={() => go('home')} className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-black text-sm"
              style={{ background: 'linear-gradient(135deg, #00b4ff, #7c3aed)', color: '#050507', boxShadow: '0 0 16px rgba(0,180,255,0.3)' }}
            >
              M
            </div>
            <span className="font-display font-bold" style={{ fontSize: '0.95rem', color: '#f0f2f8', letterSpacing: '-0.02em' }}>
              Shamim<span style={{ color: '#00b4ff' }}>.</span>
            </span>
          </button>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {['about', 'projects', 'skills', 'creative', 'timeline', 'contact'].map(id => (
              <button
                key={id}
                onClick={() => go(id)}
                className="capitalize transition-colors duration-200"
                style={{ fontSize: '0.8rem', color: '#5a5f7a' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#a8adc4' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#5a5f7a' }}
              >
                {id}
              </button>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-mono-custom" style={{ fontSize: '0.65rem', color: '#2a2d3a', letterSpacing: '0.08em' }}>
            © {year} Mohammed Shamim Hossain
          </p>
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
          <p className="font-mono-custom" style={{ fontSize: '0.6rem', color: '#2a2d3a', letterSpacing: '0.25em' }}>
            // CRAFTING THE FUTURE — ONE SYSTEM AT A TIME
          </p>
        </div>
      </div>
    </footer>
  )
}
