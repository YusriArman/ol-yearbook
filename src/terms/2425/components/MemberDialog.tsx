import { useEffect, useRef, useState } from 'react'
import type { Member } from '../data/types'
import { Photo } from './Photo'

interface MemberDialogProps {
  /** The member whose message to show, or null when closed. */
  member: Member | null
  onClose: () => void
}

/**
 * A member's message in a pop-up. Like the lightbox, it uses the browser's
 * <dialog>: focus stays inside, Escape closes it, and focus returns to the card.
 */
export function MemberDialog({ member, onClose }: MemberDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  // Remember the last member so the text doesn't vanish while the dialog fades out.
  const [shown, setShown] = useState<Member | null>(member)
  if (member && member !== shown) setShown(member)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (member && !dialog.open) dialog.showModal()
    if (!member && dialog.open) dialog.close()
  }, [member])

  return (
    <dialog
      ref={dialogRef}
      className="member-dialog"
      aria-labelledby="member-dialog-name"
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      {shown && (
        <div className="member-dialog__body">
          <Photo
            className="member-dialog__avatar"
            variant="portrait"
            src={shown.image}
            alt={`Portrait of ${shown.name}`}
            name={shown.name}
            eager
          />
          <h3 id="member-dialog-name">{shown.name}</h3>
          {shown.role && <p className="member-dialog__role">{shown.role}</p>}
          <blockquote>{shown.message}</blockquote>
          <button type="button" className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      )}
    </dialog>
  )
}
