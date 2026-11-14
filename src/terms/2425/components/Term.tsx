import { apprentices, bod, exco, seniors, sharedThankYou } from '../data/members'
import { sections } from '../data/site'
import { MemberCard } from './MemberCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

/** Our Term 24/25: EXCO, BOD by department, senior members and apprentices. */
export function Term() {
  return (
    <section id="term" className="section">
      <div className="container">
        <SectionHeading {...sections.term} />

        <Reveal className="term-group">
          <h3 className="subtitle">Executive Committee (EXCO)</h3>
          <ul className="member-grid">
            {exco.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </ul>
        </Reveal>

        <div className="term-group">
          <h3 className="subtitle">Board of Directors (BOD)</h3>
          <div className="dept-grid">
            {bod.map((department) => (
              <Reveal key={department.name} className="dept-group">
                <h4 className="dept">{department.name}</h4>
                <ul className="member-grid">
                  {department.members.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="term-group">
          <h3 className="subtitle">Senior Members</h3>
          <ul className="member-grid member-grid--small">
            {seniors.map((member) => (
              <MemberCard key={member.name} member={member} message={sharedThankYou} size="small" />
            ))}
          </ul>
        </Reveal>

        <Reveal className="term-group">
          <h3 className="subtitle">Apprentices 2025</h3>
          <ul className="member-grid member-grid--small">
            {apprentices.map((member) => (
              <MemberCard key={member.name} member={member} message={sharedThankYou} size="small" />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
