import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
}

/**
 * Fades its children in as they scroll into view.
 * Content starts visible and is only hidden once we know the animation can
 * run, so if anything goes wrong the content is still there to read.
 */
export function Reveal({ children, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pending, setPending] = useState(false)

  useEffect(() => {
    const element = ref.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!element || reducedMotion || !('IntersectionObserver' in window)) return
    // Already on screen: leave it alone.
    if (element.getBoundingClientRect().top < window.innerHeight) return

    setPending(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPending(false)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(element)
    return () => {
      observer.disconnect()
      setPending(false)
    }
  }, [])

  return (
    <div ref={ref} className={`reveal ${pending ? 'reveal--pending' : ''} ${className}`}>
      {children}
    </div>
  )
}
