import { useEffect } from 'react'
import { navigation, site } from './data/site'
import { useActiveSection } from './hooks/useActiveSection'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Events } from './components/Events'
import { Term } from './components/Term'
import { Gallery } from './components/Gallery'
import { WallOfFame } from './components/WallOfFame'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import './styles/tokens.css'
import './styles/base.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/home.css'
import './styles/cards.css'
import './styles/gallery.css'
import './styles/fame.css'

const sectionIds = navigation.map((item) => item.id)

/** The whole 24/25 yearbook. Everything it renders sits inside .term-2425. */
export default function Yearbook() {
  // Which section is on screen right now; the header highlights its link.
  const activeId = useActiveSection(sectionIds)

  // This page loads a moment after the address does, so a link such as
  // /24-25#gallery has nothing to jump to at first. Jump once we are on screen.
  useEffect(() => {
    const target = window.location.hash && document.getElementById(window.location.hash.slice(1))
    if (target) target.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <div className="term-2425">
      <title>{site.title}</title>
      <a className="skip-link" href="#home-about">
        Skip to content
      </a>
      <Header activeId={activeId} />
      <main>
        <section id="home" aria-label="Home">
          <Hero />
          <About />
        </section>
        <Events />
        <Term />
        <Gallery />
        <WallOfFame />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
