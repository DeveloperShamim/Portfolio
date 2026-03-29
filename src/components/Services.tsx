import React from 'react'
import { useInView } from '../hooks/useInView'
import { Film, Sparkles, Cpu, BarChart3, Palette, Mic } from 'lucide-react'

const services = [
  {
    Icon: Film,
    title: 'Video Production',
    desc: 'End-to-end video production from pre-production planning, scripting, and shooting to post-production editing, color grading, and final delivery.',
    features: ['Cinematic editing', 'Color grading', 'Motion graphics', '4K production'],
    color: 'cyan',
    price: 'From $200',
  },
  {
    Icon: Sparkles,
    title: 'Short-Form Content',
    desc: 'High-performance reels, TikToks, and Shorts designed for virality — with strategic hooks, pacing, captions, and trend alignment.',
    features: ['Reels & TikToks', 'Hook writing', 'Trending formats', 'Caption design'],
    color: 'violet',
    price: 'From $50/video',
  },
  {
    Icon: Cpu,
    title: 'AI Tool Development',
    desc: 'Custom AI-powered applications, automation scripts, and intelligent workflows tailored to your specific creative or business needs.',
    features: ['GPT integrations', 'Automation pipelines', 'Custom bots', 'AI workflows'],
    color: 'teal',
    price: 'From $500',
  },
  {
    Icon: BarChart3,
    title: 'Content Strategy',
    desc: 'Data-driven content strategies that build audiences, drive engagement, and convert viewers into loyal followers and customers.',
    features: ['Platform strategy', 'Content calendars', 'Analytics review', 'Growth hacking'],
    color: 'blue',
    price: 'From $150/mo',
  },
  {
    Icon: Palette,
    title: 'Brand Visual Identity',
    desc: 'Cohesive visual branding for digital creators and businesses — including channel art, thumbnails, intros/outros, and brand kits.',
    features: ['Channel branding', 'Thumbnails', 'Intro/Outro', 'Brand kits'],
    color: 'cyan',
    price: 'From $300',
  },
  {
    Icon: Mic,
    title: 'Podcast Production',
    desc: 'Full-service podcast editing, mixing, mastering, and visual content creation including audiograms and social clips.',
    features: ['Audio editing', 'Sound design', 'Audiograms', 'Show notes'],
    color: 'violet',
    price: 'From $100/ep',
  },
]

const colorMap: Record<string, {
  gradient: string; iconText: string; iconBg: string;
  border: string; hoverGlow: string; featureDot: string;
}> = {
  cyan: {
    gradient: 'from-[hsl(195,100%,50%)] to-[hsl(180,100%,45%)]',
    iconText: 'text-[hsl(195,100%,50%)]', iconBg: 'bg-[hsl(195,100%,50%,0.08)]',
    border: 'hover:border-[hsl(195,100%,50%,0.3)]',
    hoverGlow: 'hover:shadow-[0_0_24px_hsl(195,100%,50%,0.12)]',
    featureDot: 'bg-[hsl(195,100%,50%)]',
  },
  violet: {
    gradient: 'from-[hsl(270,80%,60%)] to-[hsl(290,70%,65%)]',
    iconText: 'text-[hsl(270,80%,65%)]', iconBg: 'bg-[hsl(270,80%,60%,0.08)]',
    border: 'hover:border-[hsl(270,80%,60%,0.3)]',
    hoverGlow: 'hover:shadow-[0_0_24px_hsl(270,80%,60%,0.12)]',
    featureDot: 'bg-[hsl(270,80%,60%)]',
  },
  teal: {
    gradient: 'from-[hsl(175,100%,40%)] to-[hsl(180,100%,50%)]',
    iconText: 'text-[hsl(180,100%,45%)]', iconBg: 'bg-[hsl(180,100%,45%,0.08)]',
    border: 'hover:border-[hsl(180,100%,45%,0.3)]',
    hoverGlow: 'hover:shadow-[0_0_24px_hsl(180,100%,45%,0.12)]',
    featureDot: 'bg-[hsl(180,100%,45%)]',
  },
  blue: {
    gradient: 'from-[hsl(205,100%,55%)] to-[hsl(215,100%,65%)]',
    iconText: 'text-[hsl(210,100%,65%)]', iconBg: 'bg-[hsl(210,100%,60%,0.08)]',
    border: 'hover:border-[hsl(210,100%,60%,0.3)]',
    hoverGlow: 'hover:shadow-[0_0_24px_hsl(210,100%,60%,0.12)]',
    featureDot: 'bg-[hsl(210,100%,60%)]',
  },
}

export function Services() {
  const { ref, inView } = useInView(0.08)

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, hsl(195 100% 50% / 0.25) 0%, transparent 70%)' }} />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-['JetBrains_Mono'] text-[hsl(195,100%,50%)] text-xs tracking-[0.3em] uppercase mb-3">
            04 / Services
          </p>
          <h2 className="font-['Orbitron'] font-bold text-3xl md:text-4xl text-[hsl(210,40%,92%)] mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(270,80%,60%)]" />
          <p className="text-[hsl(215,20%,55%)] mt-6 max-w-2xl mx-auto text-sm leading-relaxed">
            End-to-end creative and technical services — from concept to delivery, powered by cutting-edge tools and years of expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const c = colorMap[service.color]
            return (
              <div
                key={service.title}
                className={`glass-card rounded-2xl p-6 border border-[hsl(215,20%,14%)] transition-all duration-300 group ${c.border} ${c.hoverGlow} hover:-translate-y-2 cursor-default`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms, border-color 0.3s, box-shadow 0.3s`,
                }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${c.iconBg} transition-all duration-300 group-hover:scale-110`}>
                  <service.Icon size={22} className={c.iconText} />
                </div>

                <h3 className="font-['Orbitron'] font-bold text-sm text-[hsl(210,40%,90%)] mb-2">
                  {service.title}
                </h3>
                <p className="text-[hsl(215,20%,55%)] text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[hsl(215,20%,60%)]">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.featureDot}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-[hsl(215,20%,10%)]">
                  <span className={`text-xs font-['JetBrains_Mono'] font-semibold ${c.iconText}`}>
                    {service.price}
                  </span>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-xs text-[hsl(215,20%,50%)] hover:text-[hsl(210,40%,85%)] transition-colors font-medium"
                  >
                    Get Quote →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
