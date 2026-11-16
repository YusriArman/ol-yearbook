import { useState } from 'react'
import { apprentices, bod, exco, seniors } from '../data/members'
import { sections } from '../data/site'
import type { Member } from '../data/types'
import { MemberCard } from './MemberCard'
import { MemberDialog } from './MemberDialog'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

/** Our Term 24/25: EXCO, BOD by department, senior members and apprentices. */
export function Term() {
  // The member whose message is open; null means the pop-up is closed.
  const [openMember, setOpenMember] = useState<Member | null>(null)

  const grid = (members: Member[], size: 'large' | 'small') => (
    <ul className="member-grid">
      {members.map((member) => (
        <MemberCard key={member.name} member={member} size={size} onOpen={setOpenMember} />
      ))}
    </ul>
  )

  return (
    <section id="term" className="section">
      <div className="container">
        <SectionHeading title={sections.term.title} intro={sections.term.intro} />
        <p className="term-hint">{sections.term.hint}</p>

        <Reveal className="term-group">
          <h3 className="subtitle">Executive Committee (EXCO)</h3>
          {grid(exco, 'large')}
        </Reveal>

        <div className="term-group">
          <h3 className="subtitle">Board of Directors (BOD)</h3>
          <div className="dept-grid">
            {bod.map((department) => (
              <Reveal key={department.name} className="dept-group">
                <h4 className="dept">{department.name}</h4>
                {grid(department.members, 'large')}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="term-group">
          <h3 className="subtitle">Senior Members</h3>
          {grid(seniors, 'small')}
        </Reveal>

        <Reveal className="term-group">
          <h3 className="subtitle">Apprentices 2025</h3>
          {grid(apprentices, 'small')}
        </Reveal>
      </div>

      <MemberDialog member={openMember} onClose={() => setOpenMember(null)} />
    </section>
  )
}
