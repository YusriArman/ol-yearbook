import { useEffect, useState } from 'react'

/**
 * Returns the id of the section the visitor is currently reading:
 * the last section whose top edge has passed just below the sticky header.
 */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      // A section counts as "current" once its top is within the upper third of the screen.
      const line = window.innerHeight / 3
      let current = ids[0]
      for (const id of ids) {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= line) current = id
      }
      // At the very bottom of the page the last section wins, even if it is short.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      setActiveId(atBottom ? ids[ids.length - 1] : current)
    }

    // Measure at most once per frame, however many scroll events arrive.
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return activeId
}
