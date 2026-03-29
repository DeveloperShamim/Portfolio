import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'

const ROLES = ['AI Systems Builder', 'Cinematic Creator', 'Creative Developer', 'Digital Storyteller']

function useTypewriter(words: string[], speed = 110, pause = 2400) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let t: ReturnType<typeof setTimeout>
    if (!deleting && charIdx < current.length) {
      t = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }
    setDisplayed(current.slice(0, charIdx))
    return () => clearTimeout(t)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return displayed
}

function OrbScene() {
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = orbRef.current
    if (!el) return
    let raf: number
    let mx = 0, my = 0, tx = 0, ty = 0
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      mx = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 18
      my = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 18
    }
    const animate = () => {
      tx += (mx - tx) * 0.07
      ty += (my - ty) * 0.07
      el.style.transform = `translate(${tx}px, ${ty}px)`
      raf = requestAnimationFrame(animate)
    }
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove) }
  }, [])

  return (
    <div className="relative flex items-center justify-center" style={{ width: 340, height: 340 }}>
      {/* Outermost ring */}
      <div
        className="absolute rounded-full border"
        style={{
          width: 320, height: 320,
          borderColor: 'rgba(0,180,255,0.08)',
          animation: 'spinSlow 60s linear infinite',
        }}
      />
      <div
        className="absolute rounded-full border"
        style={{
          width: 260, height: 260,
          borderColor: 'rgba(124,58,237,0.1)',
          borderStyle: 'dashed',
          animation: 'spinSlowReverse 45s linear infinite',
        }}
      />

      {/* Orbiting dot */}
      <div
        className="absolute"
        style={{
          width: 320, height: 320,
          animation: 'spinSlow 40s linear infinite',
        }}
      >
        <div
          className="absolute"
          style={{
            width: 8, height: 8, top: 0, left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            background: '#00b4ff',
            borderRadius: '50%',
            boxShadow: '0 0 12px #00b4ff',
          }}
        />
      </div>

      {/* Core orb */}
      <div
        ref={orbRef}
        className="relative"
        style={{
          width: 180, height: 180,
          transition: 'transform 0.1s ease',
          animation: 'floatSlow 10s ease-in-out infinite',
        }}
      >
        {/* Glow halo */}
        <div
          className="absolute rounded-full"
          style={{
            inset: -20,
            background: 'radial-gradient(circle, rgba(0,180,255,0.15) 0%, transparent 70%)',
          }}
        />
        {/* Main sphere */}
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `radial-gradient(circle at 32% 28%,
              #60e0ff 0%,
              #00b4ff 30%,
              #0060cc 55%,
              #1a0050 80%,
              #050507 100%)`,
            boxShadow: `
              0 0 60px rgba(0,180,255,0.4),
              0 0 120px rgba(0,180,255,0.15),
              inset 0 0 40px rgba(0,30,80,0.6)
            `,
          }}
        />
        {/* Specular highlight */}
        <div
          className="absolute rounded-full"
          style={{
            width: '45%', height: '30%',
            top: '18%', left: '20%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.5), transparent 70%)',
            filter: 'blur(4px)',
          }}
        />
        {/* Inner grid lines */}
        {[0, 30, 60, 90, 120, 150].map(angle => (
          <div
            key={angle}
            className="absolute inset-0 rounded-full border"
            style={{
              borderColor: 'rgba(0,180,255,0.08)',
              transform: `rotate(${angle}deg)`,
            }}
          />
        ))}
      </div>

      {/* Labels floating around */}
      {[
        { label: 'AI Systems', angle: -45, dist: 150 },
        { label: 'Cinematic', angle: 90, dist: 150 },
        { label: 'Creative Dev', angle: 200, dist: 145 },
      ].map(({ label, angle, dist }) => {
        const rad = (angle * Math.PI) / 180
        const x = Math.cos(rad) * dist
        const y = Math.sin(rad) * dist
        return (
          <div
            key={label}
            className="absolute font-mono-custom"
            style={{
              fontSize: '0.6rem',
              color: 'rgba(0,180,255,0.6)',
              letterSpacing: '0.12em',
              transform: `translate(${x}px, ${y}px)`,
              whiteSpace: 'nowrap',
            }}
          >
            {label}
          </div>
        )
      })}
    </div>
  )
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random() * 0.4 + 0.1,
    }))

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        p.x = (p.x + p.vx + canvas.width) % canvas.width
        p.y = (p.y + p.vy + canvas.height) % canvas.height
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,180,255,${p.a})`
        ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(0,180,255,${0.06 * (1 - d / 130)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

export function Hero() {
  const role = useTypewriter(ROLES)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 60% 40%, #0a1525 0%, #050507 65%)' }}
    >
      <ParticleField />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,180,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,255,0.025) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial glow blobs */}
      <div className="absolute pointer-events-none" style={{ top: '10%', right: '5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,180,255,0.07) 0%, transparent 70%)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '10%', left: '0', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh] lg:min-h-screen">
          {/* Left content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? 'none' : 'translateY(12px)',
                transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(0,180,255,0.08)', border: '1px solid rgba(0,180,255,0.2)' }}>
                <span className="neon-dot" />
                <span className="font-mono-custom" style={{ fontSize: '0.65rem', color: '#00b4ff', letterSpacing: '0.18em' }}>AVAILABLE FOR PROJECTS</span>
              </div>
            </div>

            {/* Heading */}
            <div
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? 'none' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s',
              }}
            >
              <h1
                className="font-display font-black mb-2"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.0, letterSpacing: '-0.04em' }}
              >
                <span style={{ color: '#f0f2f8' }}>Mohammed</span>
                <br />
                <span style={{ color: '#f0f2f8' }}>Shamim</span>
                <br />
                <span className="animate-shimmer">Hossain</span>
              </h1>
            </div>

            {/* Typewriter role */}
            <div
              className="flex items-center gap-3 mt-4 mb-6"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? 'none' : 'translateY(16px)',
                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s',
              }}
            >
              <span style={{ color: '#5a5f7a', fontFamily: 'JetBrains Mono', fontSize: '1.1rem' }}>&gt;</span>
              <span className="font-mono-custom" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.15rem)', color: '#00b4ff' }}>
                {role}
                <span className="animate-blink" style={{ marginLeft: 2, color: '#00b4ff' }}>|</span>
              </span>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                lineHeight: 1.7,
                color: '#a8adc4',
                maxWidth: '520px',
                marginBottom: '2.5rem',
                opacity: ready ? 1 : 0,
                transform: ready ? 'none' : 'translateY(16px)',
                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s',
              }}
            >
              I build <span style={{ color: '#f0f2f8' }}>intelligent systems</span>, cinematic experiences, and digital products that{' '}
              <span style={{ color: '#f0f2f8' }}>feel alive</span>.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mb-10"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? 'none' : 'translateY(16px)',
                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s',
              }}
            >
              <button className="btn-primary" onClick={() => scrollTo('projects')}>
                View Work <ArrowRight size={15} />
              </button>
              <button className="btn-outline" onClick={() => scrollTo('contact')}>
                Contact Me
              </button>
            </div>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap gap-x-6 gap-y-3"
              style={{
                opacity: ready ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s',
              }}
            >
              {['Built AI Systems', 'Worked on Automation', 'Creative Storytelling Videos'].map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div style={{ width: 5, height: 5, background: '#00b4ff', borderRadius: '50%', boxShadow: '0 0 6px #00b4ff' }} />
                  <span className="font-mono-custom" style={{ fontSize: '0.7rem', color: '#5a5f7a', letterSpacing: '0.08em' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Orb */}
          <div
            className="hidden lg:flex items-center justify-center"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? 'none' : 'scale(0.9)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.3s',
            }}
          >
            <OrbScene />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          color: '#5a5f7a',
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.8s 0.8s, color 0.2s',
          animation: 'floatSlow 5s ease-in-out infinite',
        }}
      >
        <span className="font-mono-custom" style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}>SCROLL</span>
        <ArrowDown size={14} />
      </button>
    </section>
  )
}
