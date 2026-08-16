import Head from 'next/head'
import { useState } from 'react'
import Page from 'components/Page'
import TeamHero from 'views/TeamPage/TeamHero'
import FilterableTeamGrid from 'views/TeamPage/FilterableTeamGrid'
import BioDrawer from 'components/BioDrawer'

import { DisciplineId, TeamMember } from 'sage-data'

export default function TeamPage() {
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineId>('all')
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <Page title="Faculty & Associates | SAGE — Shastry Associates Global Enterprises">
      <Head>
        <meta
          name="description"
          content="Meet the faculty, research fellows, and principal corporate advisory consultants at SAGE specializing in RF circuits, antennas, and 5G/6G wireless systems."
        />
      </Head>

      <TeamHero
        activeDiscipline={activeDiscipline}
        onSelectDiscipline={(id) => setActiveDiscipline(id)}
      />

      <FilterableTeamGrid
        activeDiscipline={activeDiscipline}
        onSelectMember={(member) => setSelectedMember(member)}
      />

      <BioDrawer member={selectedMember} onClose={() => setSelectedMember(null)} />


    </Page>
  )
}
