import React from 'react'
import { useInView } from '../hooks/useInView'
import { ExternalLink, Play, Globe2, Cpu, Film, Video } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'AI Video Pipeline',
    category: 'AI Development',
    description: 'Automated end-to-end video production pipeline using GPT-4 for scripting, ElevenLabs for voiceover, and Stable Diffusion for visuals.',
    tags: ['Python', 'GPT-4', 'ElevenLabs', 'Automation'],
    Icon: Cpu,
    color: 'cyan',
    link: '#',
  },
  {
    id: 2,
    title: 'Brand Documentary Series',
    category: 'Video Production',
    description: '6-episode documentary series for a tech startup, featuring cinematic 4K footage, color grading, and custom motion graphics.',
    tags: ['DaVinci Resolve', 'After Effects', '4K', 'Color Grading'],
    Icon: Film,
    color: 'violet',
    link: '#',
  },
  {
    id: 3,
    title: 'Viral Shorts Campaign',
    category: 'Content Creation',
    description: 'Created and managed a short-form content campaign achieving 2M+ views across TikTok and YouTube Shorts within 30 days.',
    tags: ['TikTok', 'YouTube Shorts', 'Reels', 'Strategy'],
    Icon: Video,
    color: 'teal',
    link: '#',
  },
  {
    id: 4,
    title: 'AI Art Direction Tool',
    category: 'AI Development',
    description: 'Web app that generates mood boards and visual style guides for video productions using Midjourney API and GPT-4 Vision.',
    tags: ['React', 'Midjourney API', 'GPT-4 Vision', 'Node.js'],
    Icon: Cpu,
    color: 'blue',
    link: '#',
  },
  {
    id: 5,
    title: 'Music Video: "Neon Dreams"',
    category: 'Video Production',
    description: 'Directed and edited a cyberpunk-aesthetic music video with VFX compositing, particle simulations, and frame-by-frame retouching.',
    tags: ['After Effects', 'VFX', 'Compositing', 'Premiere Pro'],
    Icon: Film,
    color: 'violet',
    link: '#',
  },
  {
    id: 6,
    title: 'Content Automation Bot',
    category: 'AI Development',
    description: 'Discord bot that auto-generates social media captions, hashtag sets, and posting schedules from a single topic input.',
    tags: ['Python', 'Discord.py', 'OpenAI', 'Automation'],
    Icon: Cpu,
    color: 'cyan',
    link: '#',
  },
]

const colorMap: Record<string, {
  badge: string; badgeBg: string; icon: string; iconBg: string;
  border: string; hoverBorder: string; glow: string;
}> = {
  cyan: {
    badge: 'text-[hsl(195,100%,60%)]', badgeBg: 'bg-[hsl(195,100%,50%,0.08)]',
    icon: 'text-[hsl(195,100%,50%)]', iconBg: 'bg-[hsl(195,100%,50%,0.08)]',
    border: 'border-[hsl(215,20%,14%)]', hoverBorder: 'hover:border-[hsl(195,100%,50%,0.3)]',
    glow: 'hover:shadow-[0_0_24px_hsl(195,100%,50%,0.1)]',
  },
  violet: {
    badge: 'text-[hsl(270,80%,70%)]', badgeBg: 'bg-[hsl(270,80%,60%,0.08)]',
    icon: 'text-[hsl(270,80%,60%)]', iconBg: 'bg-[hsl(270,80%,60%,0.08)]',
    border: 'border-[hsl(215,20%,14%)]', hoverBorder: 'hover:border-[hsl(270,80%,60%,0.3)]',
    glow: 'hover:shadow-[0_0_24px_hsl(270,80%,60%,0.1)]',
  },
  teal: {
    badge: 'text-[hsl(180,100%,55%)]', badgeBg: 'bg-[hsl(180,100%,45%,0.08)]',
    icon: 'text-[hsl(180,100%,45%)]', iconBg: 'bg-[hsl(180,100%,45%,0.08)]',
    border: 'border-[hsl(215,20%,14%)]', hoverBorder: 'hover:border-[hsl(180,100%,45%,0.3)]',
    glow: 'hover:shadow-[0_0_24px_hsl(180,100%,45%,0.1)]',
  },
  blue: {
    badge: 'text-[hsl(210,100%,70%)]', badgeBg: 'bg-[hsl(210,100%,60%,0.08)]',
    icon: 'text-[hsl(210,100%,60%)]', iconBg: 'bg-[hsl(210,100%,60%,0.08)]',
    border: 'border-[hsl(215,20%,14%)]', hoverBorder: 'hover:border-[hsl(210,100%,60%,0.3)]',
    glow: 'hover:shadow-[0_0_24px_hsl(210,100%,60%,0.1)]',
  },
}

export function Portfolio() {
  const { ref, inView } = useInView(0.08)

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(195 100% 50%) 0%, transparent 70%)' }} />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-['JetBrains_Mono'] text-[hsl(195,100%,50%)] text-xs tracking-[0.3em] uppercase mb-3">
            03 / Portfolio
          </p>
          <h2 className="font-['Orbitron'] font-bold text-3xl md:text-4xl text-[hsl(210,40%,92%)] mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(270,80%,60%)]" />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const c = colorMap[project.color]
            return (
              <div
                key={project.id}
                className={`glass-card rounded-2xl p-6 border transition-all duration-300 group cursor-pointer ${c.border} ${c.hoverBorder} ${c.glow} hover:-translate-y-2`}
                style={{
                  transitionDelay: `${i * 60}ms`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ease ${i * 60}ms, transform 0.6s ease ${i * 60}ms, border-color 0.3s, box-shadow 0.3s`,
                }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.iconBg}`}>
                    <project.Icon size={18} className={c.icon} />
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.link}
                      className={`w-7 h-7 rounded-md flex items-center justify-center text-[hsl(215,20%,45%)] hover:${c.icon} transition-colors`}
                      onClick={e => e.stopPropagation()}
                    >
                      <ExternalLink size={13} />
                    </a>
                    {project.category === 'Video Production' || project.category === 'Content Creation' ? (
                      <button className={`w-7 h-7 rounded-md flex items-center justify-center text-[hsl(215,20%,45%)] hover:${c.icon} transition-colors`}>
                        <Play size={13} />
                      </button>
                    ) : (
                      <a
                        href={project.link}
                        className={`w-7 h-7 rounded-md flex items-center justify-center text-[hsl(215,20%,45%)] hover:${c.icon} transition-colors`}
                        onClick={e => e.stopPropagation()}
                      >
                        <Globe2 size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Category badge */}
                <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-['JetBrains_Mono'] mb-3 ${c.badge} ${c.badgeBg}`}>
                  {project.category}
                </span>

                <h3 className="font-['Orbitron'] font-bold text-base text-[hsl(210,40%,90%)] mb-2 group-hover:text-[hsl(210,40%,98%)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[hsl(215,20%,55%)] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-['JetBrains_Mono'] text-[hsl(215,20%,50%)] bg-[hsl(220,20%,9%)] border border-[hsl(215,20%,12%)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 text-[hsl(195,100%,50%)] border border-[hsl(195,100%,50%,0.3)] px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[hsl(195,100%,50%,0.08)] hover:border-[hsl(195,100%,50%,0.6)] transition-all duration-200"
          >
            View All Projects
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
