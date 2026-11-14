import { useEffect, useRef, useState } from 'react'
import { navigation, site } from '../data/site'

/** Sticky header: logo, section links, and a menu button on small screens. */
export function Header({ activeId }: { activeId: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  // The link the pointer or keyboard is on; the underline follows it, then returns to the active link.
  const [previewId, setPreviewId] = useState<string | null>(null)
  const [underline, setUnderline] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLElement>(null)

  const underlineId = previewId ?? activeId

  // Slide the amber underline beneath whichever link it should sit under.
  useEffect(() => {
    const place = () => {
      const link = navRef.current?.querySelector<HTMLElement>(`[data-id="${underlineId}"]`)
      if (link) setUnderline({ left: link.offsetLeft, width: link.offsetWidth })
    }
    place()
    window.addEventListener('resize', place)
    // Fonts arrive after first paint and change the link widths.
    document.fonts?.ready.then(place)
    return () => window.removeEventListener('resize', place)
  }, [underlineId])

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="site-header">
      <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
        {site.logo}
      </a>

      <button
        type="button"
        className="menu-button"
        aria-expanded={menuOpen}
        aria-controls="site-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <nav
        id="site-nav"
        ref={navRef}
        className={`nav ${menuOpen ? 'nav--open' : ''}`}
        aria-label="Sections"
        onMouseLeave={() => setPreviewId(null)}
      >
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-id={item.id}
            className={item.id === activeId ? 'active' : undefined}
            aria-current={item.id === activeId ? 'true' : undefined}
            onMouseEnter={() => setPreviewId(item.id)}
            onFocus={() => setPreviewId(item.id)}
            onBlur={() => setPreviewId(null)}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <span className="nav-underline" style={{ left: underline.left, width: underline.width }} aria-hidden="true" />
      </nav>
    </header>
  )
}
