import { useEffect, useState } from 'react'

const SHOW_AFTER = 400

/** Round button that appears after scrolling down and returns to the top. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The scroll itself is smooth or instant depending on the CSS in base.css,
  // which already respects the visitor's reduced-motion setting.
  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
