import { events } from '../data/events'
import { sections } from '../data/site'
import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

/** Orientation Highlights: one card per event. */
export function Events() {
  return (
    <section id="events" className="section section--tint">
      <div className="container">
        <SectionHeading {...sections.events} />
        <Reveal className="events-grid">
          {events.map((event) => (
            <article key={event.title} className="card event-card">
              <Photo className="event-card__thumb" src={event.image} alt="" />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
