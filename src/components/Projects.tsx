import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react'

const PROJECTS = [
  {
    id: 1,
    title: 'AI Video Production Pipeline',
    category: 'AI Development',
    tag: 'Automation',
    tagColor: '#00b4ff',
    problem: 'A media company was spending 40+ hours per week manually scripting, recording, editing, and captioning YouTube videos — an unsustainable bottleneck that capped their output.',
    solution: 'Built an end-to-end AI pipeline: GPT-4 for script generation, ElevenLabs for voice synthesis, Stable Diffusion for b-roll, and a custom Python orchestration layer that assembled final videos automatically.',
    tools: ['Python', 'GPT-4', 'ElevenLabs', 'Stable Diffusion', 'FFmpeg', 'Celery'],
    result: '95% reduction in production time. Output scaled from 4 to 30+ videos/week with zero additional headcount.',
    accentColor: '#00b4ff',
    gradient: 'linear-gradient(135deg, rgba(0,180,255,0.12) 0%, rgba(0,60,120,0.08) 100%)',
    number: '01',
  },
  {
    id: 2,
    title: 'Cinematic Brand Documentary',
    category: 'Video Production',
    tag: 'Storytelling',
    tagColor: '#7c3aed',
    problem: 'A tech startup needed to communicate their complex B2B product to investors and enterprise clients — without putting anyone to sleep.',
    solution: 'Directed and edited a 6-episode documentary series. Wrote narrative scripts that translated technical concepts into human stories. Shot in 4K with cinematic color grading and custom motion graphics.',
    tools: ['DaVinci Resolve', 'After Effects', 'Premiere Pro', '4K Camera', 'Custom LUT'],
    result: 'Used in 3 successful fundraising rounds. Enterprise client acquisition rate increased 40% post-launch.',
    accentColor: '#7c3aed',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(60,0,120,0.08) 100%)',
    number: '02',
  },
  {
    id: 3,
    title: 'Viral Short-Form Content Engine',
    category: 'Content Strategy',
    tag: 'Growth',
    tagColor: '#10b981',
    problem: 'A personal brand coach had incredible expertise but zero online presence. Their content wasn\'t landing. 500 followers, flat engagement, no traction.',
    solution: 'Designed a full short-form content system: hook frameworks, editing templates, caption structures, and a 30-day content calendar. Shot, edited, and published 3 videos/day across TikTok, Reels, and Shorts.',
    tools: ['CapCut', 'Premiere Pro', 'Notion', 'TikTok Studio', 'YouTube Analytics'],
    result: '2.4M views in 30 days. Grew from 500 to 18,000 followers. 3 brand deals closed within 45 days.',
    accentColor: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(0,80,60,0.08) 100%)',
    number: '03',
  },
  {
    id: 4,
    title: 'AI Art Direction Tool',
    category: 'AI Development',
    tag: 'Product',
    tagColor: '#f59e0b',
    problem: 'Creative directors waste hours building mood boards manually. Finding reference images, organizing visual styles, and communicating aesthetics to clients is fragmented and slow.',
    solution: 'Built a web app where you describe a visual concept in plain language — it generates a complete mood board using Midjourney API and GPT-4 Vision, with one-click client sharing and PDF export.',
    tools: ['React', 'Midjourney API', 'GPT-4 Vision', 'Node.js', 'Cloudinary'],
    result: 'Adopted by 3 creative agencies. Reduced mood board creation from 3 hours to 8 minutes.',
    accentColor: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(100,50,0,0.08) 100%)',
    number: '04',
  },
]

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [expanded, setExpanded] = useState(false)
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`${visible ? 'reveal visible' : 'reveal'}`}
    >
      <div
        className="rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500"
        style={{
          background: project.gradient,
          border: `1px solid ${project.accentColor}22`,
          boxShadow: expanded ? `0 0 60px ${project.accentColor}15, 0 20px 60px rgba(0,0,0,0.5)` : '0 8px 32px rgba(0,0,0,0.5)',
          transform: expanded ? 'none' : undefined,
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Header */}
        <div className="p-8 pb-6">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="font-mono-custom px-2.5 py-1 rounded-full text-xs"
                  style={{ background: `${project.accentColor}15`, color: project.tagColor, border: `1px solid ${project.accentColor}30`, letterSpacing: '0.08em' }}
                >
                  {project.tag}
                </span>
                <span style={{ fontSize: '0.72rem', color: '#5a5f7a', fontFamily: 'JetBrains Mono' }}>{project.category}</span>
              </div>
              <h3
                className="font-display font-bold group-hover:text-white transition-colors"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', color: '#f0f2f8', letterSpacing: '-0.03em', lineHeight: 1.2 }}
              >
                {project.title}
              </h3>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span
                className="font-display font-black"
                style={{ fontSize: '3rem', color: project.accentColor, opacity: 0.12, letterSpacing: '-0.06em', lineHeight: 1 }}
              >
                {project.number}
              </span>
            </div>
          </div>

          {/* Problem preview */}
          <p style={{ fontSize: '0.88rem', color: '#a8adc4', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            <span style={{ color: project.accentColor, fontFamily: 'JetBrains Mono', fontSize: '0.7rem', letterSpacing: '0.1em' }}>// PROBLEM → </span>
            {project.problem}
          </p>

          {/* Expand toggle */}
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tools.slice(0, 3).map(t => (
                <span
                  key={t}
                  className="font-mono-custom px-2 py-0.5 rounded"
                  style={{ fontSize: '0.68rem', color: '#5a5f7a', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {t}
                </span>
              ))}
              {project.tools.length > 3 && (
                <span className="font-mono-custom px-2 py-0.5 rounded" style={{ fontSize: '0.68rem', color: '#5a5f7a', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  +{project.tools.length - 3}
                </span>
              )}
            </div>
            <button
              className="flex items-center gap-2 transition-all duration-200"
              style={{ fontSize: '0.75rem', color: project.accentColor, fontFamily: 'JetBrains Mono', letterSpacing: '0.08em' }}
            >
              {expanded ? 'Less' : 'Case Study'}
              {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>
          </div>
        </div>

        {/* Expanded case study */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: expanded ? '600px' : '0', opacity: expanded ? 1 : 0 }}
        >
          <div
            className="mx-6 mb-6 rounded-xl p-6"
            style={{ background: 'rgba(5,5,7,0.5)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="grid md:grid-cols-3 gap-6">
              {/* Solution */}
              <div className="md:col-span-2">
                <div className="font-mono-custom mb-2" style={{ fontSize: '0.65rem', color: project.accentColor, letterSpacing: '0.2em' }}>// SOLUTION</div>
                <p style={{ fontSize: '0.85rem', color: '#a8adc4', lineHeight: 1.75 }}>{project.solution}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.map(t => (
                    <span
                      key={t}
                      className="font-mono-custom px-2.5 py-1 rounded"
                      style={{ fontSize: '0.7rem', color: project.accentColor, background: `${project.accentColor}10`, border: `1px solid ${project.accentColor}25` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div>
                <div className="font-mono-custom mb-2" style={{ fontSize: '0.65rem', color: '#10b981', letterSpacing: '0.2em' }}>// RESULT</div>
                <p style={{ fontSize: '0.85rem', color: '#f0f2f8', lineHeight: 1.7 }}>{project.result}</p>

                <a
                  href="#contact"
                  onClick={e => { e.stopPropagation(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="mt-4 inline-flex items-center gap-2 transition-all duration-200"
                  style={{ fontSize: '0.75rem', color: project.accentColor, fontFamily: 'Space Grotesk', fontWeight: 600, textDecoration: 'none' }}
                >
                  Build something similar <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section id="projects" className="relative py-32" style={{ background: 'linear-gradient(180deg, #050507 0%, #08090d 100%)' }}>
      <div className="absolute pointer-events-none" style={{ top: 0, left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,180,255,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`mb-16 ${visible ? 'reveal visible' : 'reveal'}`}>
          <div className="section-label">Featured Work</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="section-heading">
              Projects that<br />
              <span className="text-gradient-mixed">moved the needle</span>
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#5a5f7a', maxWidth: 300, lineHeight: 1.7 }}>
              Click any project to read the full case study — problem, solution, and measurable results.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
