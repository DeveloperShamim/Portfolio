import { useReveal } from '../hooks/useReveal'

const SKILL_CATEGORIES = [
  {
    title: 'AI & Automation',
    icon: '⚡',
    color: '#00b4ff',
    skills: [
      { name: 'Prompt Engineering', level: 95 },
      { name: 'GPT / LLM Integration', level: 90 },
      { name: 'Workflow Automation', level: 88 },
      { name: 'ComfyUI / Stable Diffusion', level: 82 },
      { name: 'Python Scripting', level: 78 },
    ],
  },
  {
    title: 'Video Production',
    icon: '🎬',
    color: '#7c3aed',
    skills: [
      { name: 'DaVinci Resolve', level: 96 },
      { name: 'Adobe Premiere Pro', level: 93 },
      { name: 'After Effects / Motion', level: 88 },
      { name: 'Color Grading', level: 90 },
      { name: 'Sound Design', level: 78 },
    ],
  },
  {
    title: 'Content Creation',
    icon: '✨',
    color: '#10b981',
    skills: [
      { name: 'Short-Form Strategy', level: 92 },
      { name: 'Storytelling / Scripting', level: 94 },
      { name: 'YouTube Production', level: 88 },
      { name: 'Hook Writing', level: 90 },
      { name: 'Brand Building', level: 82 },
    ],
  },
  {
    title: 'Systems & Web',
    icon: '🛠',
    color: '#f59e0b',
    skills: [
      { name: 'React / TypeScript', level: 75 },
      { name: 'Node.js / APIs', level: 72 },
      { name: 'Systems Design', level: 80 },
      { name: 'Figma / UI Design', level: 70 },
      { name: 'Notion / Automation', level: 88 },
    ],
  },
]

const TOOLS = [
  'Premiere Pro', 'DaVinci Resolve', 'After Effects', 'ChatGPT',
  'Midjourney', 'Stable Diffusion', 'ComfyUI', 'Python',
  'React', 'Node.js', 'Figma', 'CapCut', 'ElevenLabs',
  'Notion', 'YouTube Studio', 'Photoshop',
]

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span style={{ fontSize: '0.82rem', color: '#a8adc4', fontWeight: 500 }}>{name}</span>
        <span className="font-mono-custom" style={{ fontSize: '0.65rem', color, letterSpacing: '0.05em' }}>{level}%</span>
      </div>
      <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
        <div
          className="h-full rounded-full"
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 8px ${color}60`,
            transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
      </div>
    </div>
  )
}

function CategoryCard({ cat, index }: { cat: typeof SKILL_CATEGORIES[0]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`glass-hover rounded-2xl p-6 ${visible ? 'reveal visible' : 'reveal'}`}
      style={{
        background: 'rgba(16,18,26,0.8)',
        border: '1px solid rgba(255,255,255,0.06)',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
          style={{ background: `${cat.color}12`, border: `1px solid ${cat.color}25` }}
        >
          {cat.icon}
        </div>
        <h3 className="font-display font-bold" style={{ fontSize: '1rem', color: '#f0f2f8', letterSpacing: '-0.02em' }}>
          {cat.title}
        </h3>
      </div>
      {cat.skills.map(skill => (
        <SkillBar key={skill.name} {...skill} color={cat.color} animate={visible} />
      ))}
    </div>
  )
}

export function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section id="skills" className="relative py-32" style={{ background: '#050507' }}>
      <div className="absolute pointer-events-none" style={{ bottom: '10%', right: 0, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`mb-16 ${visible ? 'reveal visible' : 'reveal'}`}>
          <div className="section-label">Skills & Arsenal</div>
          <h2 className="section-heading">
            Four disciplines.<br />
            <span className="text-gradient-violet">One creative mind.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {SKILL_CATEGORIES.map((cat, i) => <CategoryCard key={cat.title} cat={cat} index={i} />)}
        </div>

        {/* Tools wall */}
        <ToolsWall />
      </div>
    </section>
  )
}

function ToolsWall() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`${visible ? 'reveal visible' : 'reveal'}`}>
      <div className="font-mono-custom mb-5" style={{ fontSize: '0.65rem', color: '#5a5f7a', letterSpacing: '0.2em' }}>// TOOLS I USE DAILY</div>
      <div className="flex flex-wrap gap-2.5">
        {TOOLS.map((tool, i) => {
          const colors = ['#00b4ff', '#7c3aed', '#10b981', '#f59e0b']
          const c = colors[i % colors.length]
          return (
            <span
              key={tool}
              className="font-mono-custom transition-all duration-200 cursor-default"
              style={{
                padding: '0.4rem 0.9rem',
                fontSize: '0.72rem',
                borderRadius: 6,
                background: `${c}08`,
                border: `1px solid ${c}20`,
                color: c,
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = `${c}18`
                el.style.borderColor = `${c}45`
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = `0 0 12px ${c}25`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = `${c}08`
                el.style.borderColor = `${c}20`
                el.style.transform = 'none'
                el.style.boxShadow = 'none'
              }}
            >
              {tool}
            </span>
          )
        })}
      </div>
    </div>
  )
}
