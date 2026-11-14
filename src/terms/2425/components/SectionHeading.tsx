interface SectionHeadingProps {
  title: string
  intro?: string
}

/** The centred title that opens each section of the page. */
export function SectionHeading({ title, intro }: SectionHeadingProps) {
  return (
    <header className="section-head">
      <h2 className="title">{title}</h2>
      {intro && <p>{intro}</p>}
    </header>
  )
}
