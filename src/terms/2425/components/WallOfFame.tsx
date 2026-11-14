import { useMemo, useState } from 'react'
import { achievements, excobods, pmapm } from '../data/fame'
import { sections } from '../data/site'
import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

// How many months of PMAPMs to show before the "Show all" button.
const RECENT_PERIODS = 3

const matches = (query: string, ...fields: string[]) => fields.join(' ').toLowerCase().includes(query)

/** Wall of Fame: achievements, PMAPMs by month and past EXCOBODs, with one search box across all three. */
export function WallOfFame() {
  const [search, setSearch] = useState('')
  const [showAllPeriods, setShowAllPeriods] = useState(false)
  const query = search.trim().toLowerCase()

  // Re-filter only when the search text changes.
  const results = useMemo(() => {
    const foundAchievements = achievements.filter((item) =>
      matches(query, item.name, item.achievement, item.summary, item.description, item.keywords),
    )
    const foundPeriods = pmapm
      .map((period) => ({
        ...period,
        // Searching for a month keeps all of its events; otherwise keep the events that match.
        events: matches(query, period.period)
          ? period.events
          : period.events.filter((event) => matches(query, event.title, ...event.people)),
      }))
      .filter((period) => period.events.length > 0)
    const foundExcobods = excobods.filter((term) =>
      matches(query, term.term, ...term.roles.map((entry) => `${entry.role} ${entry.name}`)),
    )
    return { foundAchievements, foundPeriods, foundExcobods }
  }, [query])

  const { foundAchievements, foundPeriods, foundExcobods } = results
  const total =
    foundAchievements.length + foundPeriods.reduce((sum, period) => sum + period.events.length, 0) + foundExcobods.length
  // While searching, show every matching month; otherwise only the most recent few.
  const visiblePeriods = query || showAllPeriods ? foundPeriods : foundPeriods.slice(0, RECENT_PERIODS)

  return (
    <section id="fame" className="section">
      <div className="container">
        <SectionHeading {...sections.fame} />

        <div className="fame-search">
          <label htmlFor="fame-search" className="visually-hidden">
            Search the Wall of Fame
          </label>
          <input
            id="fame-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name or achievement..."
          />
          <p className="fame-search__status" role="status">
            {query ? (total === 0 ? `No results for “${search.trim()}”.` : `${total} result${total === 1 ? '' : 's'}`) : ''}
          </p>
        </div>

        {foundAchievements.length > 0 && (
          <Reveal className="term-group">
            <h3 className="dept dept--left">Achievements</h3>
            <ul className="fame-grid">
              {foundAchievements.map((item) => (
                <li key={`${item.name}-${item.achievement}`} className="fame-card" tabIndex={0}>
                  <div className="fame-card__media">
                    <Photo className="fame-card__photo" src={item.image} alt={item.alt} />
                    <div className="fame-card__overlay">
                      <p className="fame-card__achievement">{item.achievement}</p>
                      <p>{item.description}</p>
                      {item.link && (
                        <a className="fame-card__more" href={item.link}>
                          See More
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="fame-card__caption">
                    <h4>{item.name}</h4>
                    <p>{item.summary}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {foundPeriods.length > 0 && (
          <div className="term-group">
            <h3 className="dept dept--left">PMAPMs</h3>
            {visiblePeriods.map((period) => (
              <div key={period.period} className="pmapm-period">
                <h4 className="pmapm-period__title">{period.period}</h4>
                <ul className="pmapm-grid">
                  {period.events.map((event, index) => (
                    <li key={`${event.title}-${index}`} className="pmapm-card">
                      <h5>{event.title}</h5>
                      <ul>
                        {event.people.map((person) => (
                          <li key={person}>{person}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {!query && foundPeriods.length > RECENT_PERIODS && (
              <div className="pmapm-toggle">
                <button
                  type="button"
                  className="btn btn--outline"
                  aria-expanded={showAllPeriods}
                  onClick={() => setShowAllPeriods((shown) => !shown)}
                >
                  {showAllPeriods ? 'Show recent months only' : `Show all ${foundPeriods.length} months`}
                </button>
              </div>
            )}
          </div>
        )}

        {foundExcobods.length > 0 && (
          <Reveal className="term-group">
            <h3 className="dept dept--left">EXCOBODs</h3>
            <ul className="fame-grid">
              {foundExcobods.map((term) => (
                <li key={term.term} className="fame-card">
                  <div className="fame-card__media">
                    <Photo className="fame-card__photo" src={term.image} alt={term.alt} />
                  </div>
                  <div className="fame-card__caption">
                    <h4>{term.term}</h4>
                    <dl className="roles">
                      {term.roles.map((entry) => (
                        <div key={`${entry.role}-${entry.name}`}>
                          <dt>{entry.role}</dt>
                          <dd>{entry.name}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  )
}
