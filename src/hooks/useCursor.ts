import { useEffect } from 'react'

export function useCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let animId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12)
      ringY = lerp(ringY, mouseY, 0.12)
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      animId = requestAnimationFrame(animate)
    }
    animate()

    const onEnter = () => ring.classList.add('hovering')
    const onLeave = () => ring.classList.remove('hovering')

    const interactables = document.querySelectorAll('a, button, [data-cursor]')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    document.addEventListener('mousemove', onMove)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])
}
