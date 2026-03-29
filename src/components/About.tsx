import { useReveal } from '../hooks/useReveal'

const chapters = [
  {
    num: '01',
    title: 'Where it started',
    body: `I didn't start as a developer or an AI builder. I started as a storyteller — obsessed with how a single frame, the right cut, or a perfect sentence could make someone feel something deeply. Cameras, scripts, timelines. That was my world.`,
    accent: '#00b4ff',
  },
  {
    num: '02',
    title: 'The discovery',
    body: `Then AI happened. Not as a tool — as a revelation. I saw that the same instinct that makes a great edit — knowing what to keep, what to cut, what matters — was exactly what made great systems. Suddenly, code wasn't engineering. It was craft.`,
    accent: '#7c3aed',
  },
  {
    num: '03',
    title: 'What I build now',
    body: `Today I operate at the intersection of three disciplines: AI-powered systems that automate complex workflows, cinematic video production that earns attention, and digital products that solve real problems beautifully. I don't pick one. I use all three.`,
    accent: '#10b981',
  },
  {
    num: '04',
    title: 'My mission',
    body: `I believe the most powerful work happens at the edges — where creativity meets code, where story meets system, where human meets machine. My mission is to build experiences that don't just work — they feel inevitable.`,
    accent: '#f59e0b',
  },
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '4+', label: 'Years Experience' },
  { value: '30+', label: 'Happy Clients' },
  { value: '200+', label: 'Videos Created' },
]

export function About() {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>()
  const { ref: statsRef, visible: statsVisible } = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="relative py-32 overflow-hidden" style={{ background: '#050507' }}>
      {/* Accent glow */}
      <div className="absolute pointer-events-none" style={{ top: '-10%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headRef} className={`mb-20 ${headVisible ? 'reveal visible' : 'reveal'}`}>
          <div className="section-label">About Me</div>
          <h2 className="section-heading">
            A creative who learned<br />
            to <span className="text-gradient-cyan">think in systems</span>
          </h2>
        </div>

        {/* Story chapters */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          {chapters.map((ch, i) => (
            <ChapterCard key={ch.num} {...ch} delay={i * 120} />
          ))}
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${statsVisible ? 'reveal visible' : 'reveal'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="glass-hover rounded-2xl p-6 text-center"
              style={{
                background: 'rgba(22,24,32,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div
                className="font-display font-black mb-1"
                style={{ fontSize: '2.5rem', lineHeight: 1, color: '#00b4ff', letterSpacing: '-0.04em', textShadow: '0 0 30px rgba(0,180,255,0.4)' }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#5a5f7a', letterSpacing: '0.06em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ChapterCard({ num, title, body, accent, delay }: {
  num: string; title: string; body: string; accent: string; delay: number
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`glass-hover rounded-2xl p-8 ${visible ? 'reveal visible' : 'reveal'}`}
      style={{
        background: 'rgba(16,18,26,0.7)',
        border: '1px solid rgba(255,255,255,0.06)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex items-start gap-5">
        <div
          className="font-display font-black flex-shrink-0"
          style={{ fontSize: '3rem', lineHeight: 1, color: accent, opacity: 0.15, letterSpacing: '-0.06em' }}
        >
          {num}
        </div>
        <div>
          <h3
            className="font-display font-bold mb-3"
            style={{ fontSize: '1.2rem', color: '#f0f2f8', letterSpacing: '-0.02em' }}
          >
            {title}
          </h3>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#a8adc4' }}>{body}</p>
        </div>
      </div>
      {/* Bottom accent line */}
      <div className="mt-6 h-px" style={{ background: `linear-gradient(90deg, ${accent}, transparent)`, opacity: 0.3 }} />
    </div>
  )
}
