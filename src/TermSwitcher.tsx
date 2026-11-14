import { NavLink } from 'react-router'
import { terms } from './terms'

/**
 * The one piece shared by every year: a small pill in the bottom-left corner
 * with a link per term. NavLink adds the "active" class to the current year.
 */
export function TermSwitcher() {
  return (
    <nav className="term-switcher" aria-label="Choose a term">
      {terms.map((term) => (
        // Each year is a different page, so start it from the top.
        <NavLink key={term.slug} to={`/${term.slug}`} onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
          {term.label}
        </NavLink>
      ))}
    </nav>
  )
}
