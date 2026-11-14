import { useEffect, useState } from 'react'

const query = '(prefers-reduced-motion: reduce)'

/** True when the visitor has asked their device to minimise animation. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setReduced(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return reduced
}
