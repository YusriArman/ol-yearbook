import type { Member } from '../data/types'
import { Photo } from './Photo'

interface MemberCardProps {
  member: Member
  /** 'large' for EXCO and BOD, 'small' for seniors and apprentices. */
  size?: 'large' | 'small'
  /** Called when the card is chosen, so the parent can show the member's message. */
  onOpen: (member: Member) => void
}

/** A portrait card. Members with a message are buttons that open it. */
export function MemberCard({ member, size = 'large', onOpen }: MemberCardProps) {
  const content = (
    <>
      <Photo
        className="member-card__avatar"
        variant="portrait"
        src={member.image}
        alt={`Portrait of ${member.name}`}
        name={member.name}
      />
      <span className="member-card__name">{member.name}</span>
      {member.role && <span className="member-card__role">{member.role}</span>}
    </>
  )

  return (
    <li className={`member-item member-item--${size}`}>
      {member.message ? (
        <button type="button" className="card member-card" onClick={() => onOpen(member)}>
          {content}
          <span className="visually-hidden"> — read message</span>
        </button>
      ) : (
        <div className="card member-card">{content}</div>
      )}
    </li>
  )
}
