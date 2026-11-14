import type { TextPart } from '../data/types'

/** Renders text from the data files, putting the parts marked `strong` in bold. */
export function RichText({ parts }: { parts: TextPart[] }) {
  return (
    <>
      {parts.map((part, index) =>
        part.strong ? <strong key={index}>{part.text}</strong> : <span key={index}>{part.text}</span>,
      )}
    </>
  )
}
