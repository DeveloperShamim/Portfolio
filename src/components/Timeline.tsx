import { useReveal } from '../hooks/useReveal'

const TIMELINE = [
  {
    year: '2020',
    role: 'Video Creator',
    company: 'Freelance',
    desc: 'Started freelancing as a video editor and content creator. Took on YouTube channels, brand videos, and social media content — learning storytelling from the ground up.',
    tags: ['Premiere Pro', 'YouTube', 'Freelance'],
    color: '#00b4ff',
    type: 'start',
  },
  {
    year: '2021',
    role: 'Content Strategist',
    company: 'Multiple Brands',
    desc: 'Scaled from editor to full content strategist. Designed growth systems for 5+ brands, grew communities from zero, and learned what makes content spread.',
    tags: ['Strategy', 'Growth', 'Analytics'],
    color: '#7c3aed',
    type: 'growth',
  },
  {
    year: '2022',
    role: 'AI Explorer',
    company: 'Self-Initiated',
    desc: 'GPT-3 and Stable Diffusion arrived. Spent months experimenting — then realized: the same instinct that makes great edits makes great AI prompts. Everything changed.',
    tags: ['GPT-3', 'Stable Diffusion', 'Python'],
    color: '#10b981',
    type: 'pivot',
  },
  {
    year: '2023',
    role: 'AI Systems Builder',
    company: 'Freelance',
    desc: 'Began building AI-powered production pipelines for clients. Automated video workflows, built content generation systems, and shipped the first AI Art Direction tool.',
    tags: ['Python', 'GPT-4', 'Automation', 'React'],
    color: '#f59e0b',
    type: 'builder',
  },
  {
    year: '2024',
    role: 'Creative Technologist',
    company: 'Independent',
    desc: 'Operating at the full intersection: AI development + video production + digital products. Building systems that scale creative output 10x while maintaining cinematic quality.',
    tags: ['AI', 'Video', 'Products', 'Systems'],
    color: '#a855f7',
    type: 'now',
  },
]

function TimelineItem({ item, index, isLast }: { item: typeof TIMELINE[0]; index: number; isLast: boolean }) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const isRight = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`relative grid md:grid-cols-2 gap-8 md:gap-16 ${visible ? 'reveal visible' : 'reveal'}`}
      style={{ transitionDelay: `${index * 100}ms`, marginBottom: isLast ? 0 : '0' }}
    >
      {/* Left content */}
      <div className={isRight ? 'md:text-right md:order-1' : 'md:order-1'}>
        {!isRight && (
          <ContentBlock item={item} />
        )}
        {isRight && (
          <YearBlock year={item.year} color={item.color} align="right" />
        )}
      </div>

      {/* Center line + dot */}
      <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-0 bottom-0" style={{ width: 1 }}>
        <div
          className="w-3 h-3 rounded-full flex-shrink-0 z-10 mt-1"
          style={{
            background: item.color,
            boxShadow: `0 0 12px ${item.color}, 0 0 24px ${item.color}60`,
          }}
        />
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{ background: `linear-gradient(180deg, ${item.color}40, ${TIMELINE[index + 1]?.color}40)` }}
          />
        )}
      </div>

      {/* Right content */}
      <div className={isRight ? 'md:order-1' : 'md:text-right md:order-1'}>
        {isRight && (
          <ContentBlock item={item} />
        )}
        {!isRight && (
          <YearBlock year={item.year} color={item.color} align="left" />
        )}
      </div>

      {/* Mobile: always left */}
      <div className="md:hidden col-span-2 flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: item.color, boxShadow: `0 0 10px ${item.color}` }} />
          {!isLast && <div className="w-px flex-1 mt-2" style={{ background: `${item.color}30` }} />}
        </div>
        <div className="pb-8">
          <div className="font-mono-custom mb-1" style={{ fontSize: '0.65rem', color: item.color, letterSpacing: '0.15em' }}>{item.year}</div>
          <div className="font-display font-bold mb-0.5" style={{ fontSize: '1.05rem', color: '#f0f2f8', letterSpacing: '-0.02em' }}>{item.role}</div>
          <div className="font-mono-custom mb-3" style={{ fontSize: '0.7rem', color: '#5a5f7a' }}>{item.company}</div>
          <p style={{ fontSize: '0.82rem', color: '#a8adc4', lineHeight: 1.7, marginBottom: '0.75rem' }}>{item.desc}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map(t => (
              <span key={t} className="font-mono-custom px-2 py-0.5 rounded" style={{ fontSize: '0.65rem', color: item.color, background: `${item.color}10`, border: `1px solid ${item.color}25` }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentBlock({ item }: { item: typeof TIMELINE[0] }) {
  return (
    <div className="hidden md:block pb-16">
      <div
        className="rounded-xl p-6"
        style={{
          background: 'rgba(16,18,26,0.8)',
          border: `1px solid ${item.color}18`,
          boxShadow: `0 0 30px ${item.color}06`,
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = `${item.color}35`
          el.style.boxShadow = `0 0 40px ${item.color}10`
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = `${item.color}18`
          el.style.boxShadow = `0 0 30px ${item.color}06`
        }}
      >
        <div className="font-display font-bold mb-0.5" style={{ fontSize: '1.1rem', color: '#f0f2f8', letterSpacing: '-0.02em' }}>{item.role}</div>
        <div className="font-mono-custom mb-3" style={{ fontSize: '0.7rem', color: '#5a5f7a' }}>{item.company}</div>
        <p style={{ fontSize: '0.82rem', color: '#a8adc4', lineHeight: 1.75, marginBottom: '1rem' }}>{item.desc}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(t => (
            <span key={t} className="font-mono-custom px-2 py-0.5 rounded" style={{ fontSize: '0.65rem', color: item.color, background: `${item.color}10`, border: `1px solid ${item.color}25` }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function YearBlock({ year, color, align }: { year: string; color: string; align: 'left' | 'right' }) {
  return (
    <div className={`hidden md:flex items-start pb-16 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
      <div className={align === 'right' ? 'text-right' : 'text-left'}>
        <div
          className="font-display font-black"
          style={{ fontSize: '3.5rem', color, lineHeight: 1, letterSpacing: '-0.06em', opacity: 0.9, textShadow: `0 0 40px ${color}50` }}
        >
          {year}
        </div>
      </div>
    </div>
  )
}

export function Timeline() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section id="timeline" className="relative py-32" style={{ background: 'linear-gradient(180deg, #050507 0%, #08090d 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`mb-20 ${visible ? 'reveal visible' : 'reveal'}`}>
          <div className="section-label">Experience</div>
          <h2 className="section-heading">
            The journey that<br />
            <span className="text-gradient-mixed">shaped the craft</span>
          </h2>
        </div>

        <div className="relative">
          {TIMELINE.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} isLast={i === TIMELINE.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
