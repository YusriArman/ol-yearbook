import { about, advisor, navigation } from '../data/site'
import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { RichText } from './RichText'

const termLabel = navigation.find((item) => item.id === 'term')?.label

/** Who we are, plus the note from our advisor. */
export function About() {
  return (
    <div id="home-about" className="about container">
      <Reveal>
        <h2 className="subtitle">{about.heading}</h2>
        <p className="about__body">
          <RichText parts={about.body} />
        </p>
        <div className="about__actions">
          <a className="btn" href="#events">
            View Events
          </a>
          <a className="btn btn--outline" href="#term">
            {termLabel}
          </a>
        </div>
      </Reveal>

      <Reveal>
        <figure className="advisor">
          <Photo
            className="advisor__photo"
            variant="portrait"
            src={advisor.image}
            alt={`Portrait of ${advisor.name}`}
            name={advisor.name}
          />
          <div className="advisor__text">
            <h3>{advisor.heading}</h3>
            <blockquote>
              <p>{advisor.greeting}</p>
              <p>
                <RichText parts={advisor.message} />
              </p>
            </blockquote>
            <figcaption>{advisor.signature}</figcaption>
          </div>
        </figure>
      </Reveal>
    </div>
  )
}
