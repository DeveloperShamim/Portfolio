import { useEffect, useState } from 'react'

interface Props {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'done'>('loading')

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.random() * 18 + 6
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setProgress(100)
        setTimeout(() => {
          setPhase('done')
          setTimeout(onComplete, 600)
        }, 300)
      } else {
        setProgress(Math.floor(current))
      }
    }, 60)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        backgroundColor: '#050507',
        transition: phase === 'done' ? 'opacity 0.6s ease, transform 0.6s ease' : undefined,
        opacity: phase === 'done' ? 0 : 1,
        pointerEvents: phase === 'done' ? 'none' : 'all',
      }}
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,180,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-10 z-10">
        {/* Orb */}
        <div className="relative w-20 h-20">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #40d0ff, #00b4ff 50%, #0040aa)',
              boxShadow: '0 0 40px rgba(0,180,255,0.5), 0 0 80px rgba(0,180,255,0.2)',
              animation: 'orbPulse 2s ease-in-out infinite',
            }}
          />
          <div
            className="absolute -inset-4 rounded-full border border-[rgba(0,180,255,0.2)]"
            style={{ animation: 'spinSlow 8s linear infinite' }}
          />
        </div>

        {/* Logo */}
        <div className="text-center">
          <div
            className="font-display font-black tracking-tight"
            style={{ fontSize: '1.5rem', color: '#f0f2f8', letterSpacing: '-0.04em' }}
          >
            MSH
          </div>
          <div
            className="font-mono-custom"
            style={{ fontSize: '0.65rem', color: '#00b4ff', letterSpacing: '0.25em', marginTop: '0.25rem' }}
          >
            LOADING EXPERIENCE
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-48">
          <div
            className="h-px w-full mb-2"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            <div
              className="h-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #00b4ff, #a855f7)',
                boxShadow: '0 0 8px rgba(0,180,255,0.6)',
                transition: 'width 0.1s ease',
              }}
            />
          </div>
          <div
            className="flex justify-between font-mono-custom"
            style={{ fontSize: '0.6rem', color: '#5a5f7a' }}
          >
            <span>Initializing</span>
            <span style={{ color: '#00b4ff' }}>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
