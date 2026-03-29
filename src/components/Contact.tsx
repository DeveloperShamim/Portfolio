import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Send, Mail, MapPin, Clock, Globe, MessageCircle, ArrowUpRight, CheckCircle } from 'lucide-react'

const SOCIALS = [
  { label: 'GitHub', handle: '@DeveloperShamim', href: 'https://github.com/DeveloperShamim', icon: Globe, color: '#f0f2f8' },
  { label: 'YouTube', handle: 'Mohammed Shamim', href: 'https://youtube.com', icon: Globe, color: '#ff4444' },
  { label: 'LinkedIn', handle: 'Mohammed Shamim Hossain', href: 'https://linkedin.com', icon: Globe, color: '#0077b5' },
  { label: 'Twitter / X', handle: '@ShamimBuilds', href: 'https://twitter.com', icon: Globe, color: '#a8adc4' },
]

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const [form, setForm] = useState({ name: '', email: '', project: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(16,18,26,0.8)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: 8,
    padding: '0.75rem 1rem',
    fontSize: '0.88rem',
    color: '#f0f2f8',
    fontFamily: 'Space Grotesk',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.65rem',
    fontFamily: 'JetBrains Mono',
    letterSpacing: '0.18em',
    color: '#5a5f7a',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden" style={{ background: '#050507' }}>
      {/* Glow */}
      <div className="absolute pointer-events-none" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,180,255,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Headline */}
        <div ref={ref} className={`text-center mb-20 ${visible ? 'reveal visible' : 'reveal'}`}>
          <div className="section-label justify-center">Contact</div>
          <h2
            className="font-display font-black mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#f0f2f8', letterSpacing: '-0.04em', lineHeight: 1.0 }}
          >
            Let's build something<br />
            <span className="text-gradient-cyan">powerful together</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#5a5f7a', maxWidth: 480, margin: '0 auto' }}>
            Whether it's an AI system, a cinematic video, or a full digital product — I'm ready to make it exceptional.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info */}
          <div className="lg:col-span-2">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl p-5 mb-6 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(37,211,102,0.1), rgba(37,211,102,0.05))',
                border: '1px solid rgba(37,211,102,0.2)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(37,211,102,0.4)'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 0 24px rgba(37,211,102,0.1)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(37,211,102,0.2)'
                el.style.transform = 'none'
                el.style.boxShadow = 'none'
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(37,211,102,0.15)' }}>
                <MessageCircle size={20} style={{ color: '#25d366' }} />
              </div>
              <div>
                <div className="font-display font-semibold" style={{ fontSize: '0.9rem', color: '#25d366' }}>WhatsApp</div>
                <div style={{ fontSize: '0.78rem', color: '#5a5f7a' }}>Quick response guaranteed</div>
              </div>
              <ArrowUpRight size={15} style={{ color: '#25d366', marginLeft: 'auto' }} />
            </a>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              {[
                { Icon: Mail, label: 'Email', value: 'shamim@example.com', href: 'mailto:shamim@example.com', color: '#00b4ff' },
                { Icon: MapPin, label: 'Location', value: 'Bangladesh — Remote Worldwide', href: null, color: '#7c3aed' },
                { Icon: Clock, label: 'Timezone', value: 'BST (UTC+6) — Flexible', href: null, color: '#10b981' },
              ].map(({ Icon, label, value, href, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}10`, border: `1px solid ${color}20` }}>
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <div className="font-mono-custom" style={{ fontSize: '0.6rem', color: '#5a5f7a', letterSpacing: '0.15em' }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ fontSize: '0.85rem', color: '#a8adc4', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = color }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#a8adc4' }}
                      >{value}</a>
                    ) : (
                      <span style={{ fontSize: '0.85rem', color: '#a8adc4' }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <div className="font-mono-custom mb-4" style={{ fontSize: '0.6rem', color: '#5a5f7a', letterSpacing: '0.18em' }}>// FIND ME ONLINE</div>
              <div className="flex flex-col gap-2.5">
                {SOCIALS.map(({ label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200"
                    style={{ background: 'rgba(16,18,26,0.6)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'rgba(0,180,255,0.2)'
                      el.style.background = 'rgba(0,180,255,0.04)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'rgba(255,255,255,0.06)'
                      el.style.background = 'rgba(16,18,26,0.6)'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#f0f2f8', fontWeight: 500 }}>{label}</div>
                      <div className="font-mono-custom" style={{ fontSize: '0.65rem', color: '#5a5f7a' }}>{handle}</div>
                    </div>
                    <ArrowUpRight size={13} style={{ color: '#5a5f7a' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl p-8" style={{ background: 'rgba(16,18,26,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid rgba(0,180,255,0.2)' }}>
                    <CheckCircle size={30} style={{ color: '#00b4ff' }} />
                  </div>
                  <h3 className="font-display font-bold mb-3" style={{ fontSize: '1.5rem', color: '#f0f2f8', letterSpacing: '-0.03em' }}>
                    Message received.
                  </h3>
                  <p style={{ color: '#5a5f7a', fontSize: '0.9rem' }}>I'll respond within 24 hours. Let's build something great.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label style={labelStyle}>Your Name</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" style={inputStyle}
                        onFocus={e => { (e.target as HTMLElement).style.borderColor = 'rgba(0,180,255,0.4)'; (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(0,180,255,0.06)' }}
                        onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.target as HTMLElement).style.boxShadow = 'none' }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" style={inputStyle}
                        onFocus={e => { (e.target as HTMLElement).style.borderColor = 'rgba(0,180,255,0.4)'; (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(0,180,255,0.06)' }}
                        onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.target as HTMLElement).style.boxShadow = 'none' }}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label style={labelStyle}>Project Type</label>
                    <select name="project" value={form.project} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">What are you building?</option>
                      <option value="ai-system">AI System / Automation</option>
                      <option value="video-production">Video Production</option>
                      <option value="content-strategy">Content Strategy</option>
                      <option value="brand-film">Brand Film / Documentary</option>
                      <option value="web-product">Web Product / App</option>
                      <option value="consulting">Consulting / Strategy</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label style={labelStyle}>Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Select budget range</option>
                      <option value="sub-500">Under $500</option>
                      <option value="500-2k">$500 – $2,000</option>
                      <option value="2k-5k">$2,000 – $5,000</option>
                      <option value="5k-plus">$5,000+</option>
                      <option value="ongoing">Ongoing / Retainer</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label style={labelStyle}>Project Details</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, and timeline..."
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = 'rgba(0,180,255,0.4)'; (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(0,180,255,0.06)' }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.target as HTMLElement).style.boxShadow = 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center"
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? (
                      <>
                        <div style={{ width: 16, height: 16, border: '2px solid rgba(5,5,7,0.4)', borderTopColor: '#050507', borderRadius: '50%', animation: 'spinSlow 0.6s linear infinite' }} />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
