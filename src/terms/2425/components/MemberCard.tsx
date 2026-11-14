import type { Member } from '../data/types'
import { Photo } from './Photo'

interface MemberCardProps {
  member: Member
  /** Fallback note for members without one of their own. */
  message?: string
  /** 'large' for EXCO and BOD, 'small' for seniors and apprentices. */
  size?: 'large' | 'small'
}

/** A portrait card. Its note appears on hover, and on keyboard focus or tap. */
export function MemberCard({ member, message, size = 'large' }: MemberCardProps) {
  const note = member.message ?? message

  return (
    <li className={`card member-card member-card--${size}`} tabIndex={note ? 0 : undefined}>
      <Photo
        className="member-card__avatar"
        variant="portrait"
        src={member.image}
        alt={`Portrait of ${member.name}`}
        name={member.name}
      />
      <h4 className="member-card__name">{member.name}</h4>
      {member.role && <p className="member-card__role">{member.role}</p>}
      {note && <p className="member-card__note">“{note}”</p>}
    </li>
  )
}
