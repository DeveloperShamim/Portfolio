import { useReveal } from '../hooks/useReveal'
import { Play, Eye, ArrowUpRight } from 'lucide-react'

const CREATIVE_WORKS = [
  {
    id: 1,
    type: 'YouTube',
    category: 'Documentary',
    title: 'The Hidden Cost of Content Creation',
    description: 'A 12-minute cinematic documentary exploring creator burnout — scripted, shot, and edited as a personal project. 480K views.',
    views: '480K',
    color: '#00b4ff',
    gradient: 'linear-gradient(135deg, #0a1a2e, #001830)',
    aspectLabel: 'LONG-FORM',
    badge: 'YouTube',
  },
  {
    id: 2,
    type: 'Reel',
    category: 'Short-Form Edit',
    title: '30-Second Product Launch Reel',
    description: 'High-energy product launch edit with custom motion graphics, color grading, and synced audio design. Used at a live event.',
    views: '120K',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #150a2e, #0d0018)',
    aspectLabel: 'SHORT-FORM',
    badge: 'Reels',
  },
  {
    id: 3,
    type: 'Script',
    category: 'Cinematic Script',
    title: 'AI and the Future of Human Creativity',
    description: 'Original long-form script written for a planned 3-part YouTube series exploring AI\'s impact on art, music, and storytelling.',
    views: null,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #061a10, #021009)',
    aspectLabel: 'SCRIPT',
    badge: 'Writing',
  },
  {
    id: 4,
    type: 'Edit',
    category: 'Music Video',
    title: '"Neon Dreams" — Cyberpunk Music Video',
    description: 'Directed and edited a 3-minute cyberpunk aesthetic music video. Full VFX pipeline including particle systems, color grading, and composite work.',
    views: '240K',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #1a1000, #100900)',
    aspectLabel: 'MUSIC VIDEO',
    badge: 'VFX',
  },
  {
    id: 5,
    type: 'YouTube',
    category: 'Tutorial Series',
    title: 'Build AI Workflows in 30 Days',
    description: '30-part YouTube series teaching non-coders how to build AI automations. Scripted, edited, and published all 30 episodes.',
    views: '900K+',
    color: '#00b4ff',
    gradient: 'linear-gradient(135deg, #0a1a2e, #001830)',
    aspectLabel: 'SERIES',
    badge: 'Education',
  },
  {
    id: 6,
    type: 'Edit',
    category: 'Brand Film',
    title: 'Tech Startup Origin Story',
    description: '4-minute emotional brand film for a SaaS startup. Testimonial-driven, cinematic pacing, custom score. Screened at YC Demo Day.',
    views: '55K',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #150a2e, #0d0018)',
    aspectLabel: 'BRAND FILM',
    badge: 'Film',
  },
]

const MEDIA_STATS = [
  { value: '3.5M+', label: 'Total Views', color: '#00b4ff' },
  { value: '200+', label: 'Videos Produced', color: '#7c3aed' },
  { value: '18K', label: 'Followers Grown', color: '#10b981' },
]

function WorkCard({ work, index }: { work: typeof CREATIVE_WORKS[0]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const isLarge = index === 0 || index === 4
  return (
    <div
      ref={ref}
      className={`${isLarge ? 'md:col-span-2' : ''} ${visible ? 'reveal visible' : 'reveal'}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div
        className="group relative rounded-2xl overflow-hidden cursor-default"
        style={{
          background: work.gradient,
          border: `1px solid ${work.color}20`,
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
          minHeight: isLarge ? 240 : 220,
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = `${work.color}40`
          el.style.boxShadow = `0 0 40px ${work.color}12, 0 16px 48px rgba(0,0,0,0.6)`
          el.style.transform = 'translateY(-4px)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = `${work.color}20`
          el.style.boxShadow = 'none'
          el.style.transform = 'none'
        }}
      >
        {/* Top area */}
        <div className="p-7 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <span
                className="font-mono-custom px-2.5 py-1 rounded-full"
                style={{ fontSize: '0.65rem', color: work.color, background: `${work.color}12`, border: `1px solid ${work.color}25`, letterSpacing: '0.1em' }}
              >
                {work.badge}
              </span>
              <span className="font-mono-custom" style={{ fontSize: '0.6rem', color: '#5a5f7a', letterSpacing: '0.12em' }}>{work.aspectLabel}</span>
            </div>
            {work.views && (
              <div className="flex items-center gap-1.5" style={{ color: '#5a5f7a', fontSize: '0.72rem' }}>
                <Eye size={11} />
                <span className="font-mono-custom">{work.views}</span>
              </div>
            )}
          </div>

          <h3
            className="font-display font-bold mb-3"
            style={{ fontSize: isLarge ? '1.35rem' : '1.05rem', color: '#f0f2f8', letterSpacing: '-0.03em', lineHeight: 1.25 }}
          >
            {work.title}
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#a8adc4', lineHeight: 1.7, flex: 1 }}>
            {work.description}
          </p>

          {/* Bottom */}
          <div className="flex items-center justify-between mt-6 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ fontSize: '0.72rem', color: work.color, fontFamily: 'JetBrains Mono', letterSpacing: '0.06em' }}>
              {work.category}
            </span>
            <div className="flex items-center gap-3">
              {(work.type === 'YouTube' || work.type === 'Reel' || work.type === 'Edit') && (
                <div
                  className="flex items-center gap-1.5 transition-all duration-200"
                  style={{ fontSize: '0.72rem', color: '#5a5f7a' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = work.color }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#5a5f7a' }}
                >
                  <Play size={11} /> Preview
                </div>
              )}
              <div
                className="flex items-center gap-1 transition-all duration-200"
                style={{ fontSize: '0.72rem', color: '#5a5f7a' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = work.color }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#5a5f7a' }}
              >
                <ArrowUpRight size={12} /> View
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Creative() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section id="creative" className="relative py-32" style={{ background: 'linear-gradient(180deg, #08090d 0%, #050507 100%)' }}>
      <div className="absolute pointer-events-none" style={{ top: '20%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,180,255,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className={`mb-16 ${visible ? 'reveal visible' : 'reveal'}`}>
          <div className="section-label">Creative Work</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="section-heading">
              The stories I've<br />
              <span className="text-gradient-cyan">brought to life</span>
            </h2>
            {/* Media stats */}
            <div className="flex gap-8">
              {MEDIA_STATS.map(s => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-black" style={{ fontSize: '1.8rem', color: s.color, letterSpacing: '-0.04em', textShadow: `0 0 20px ${s.color}40` }}>{s.value}</div>
                  <div style={{ fontSize: '0.7rem', color: '#5a5f7a', letterSpacing: '0.06em', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CREATIVE_WORKS.map((work, i) => <WorkCard key={work.id} work={work} index={i} />)}
        </div>
      </div>
    </section>
  )
}
