import styled from 'styled-components'
import Container from 'components/Container'
import AutofitGrid from 'components/AutofitGrid'
import FacultyAvatar from 'components/FacultyAvatar'
import DisciplineTag from 'components/DisciplineTag'
import { teamMembers, DisciplineId, TeamMember } from 'sage-data'

export interface FilterableTeamGridProps {
  activeDiscipline: DisciplineId
  onSelectMember: (member: TeamMember) => void
}

export default function FilterableTeamGrid({
  activeDiscipline,
  onSelectMember,
}: FilterableTeamGridProps) {
  const filteredMembers =
    activeDiscipline === 'all'
      ? teamMembers
      : teamMembers.filter((m) => m.discipline === activeDiscipline)

  return (
    <GridSection>
      <Container>
        {filteredMembers.length === 0 ? (
          <EmptyState>
            <EmptyTitle>No associates found</EmptyTitle>
            <EmptyText>There are currently no specialists listed under this discipline category.</EmptyText>
          </EmptyState>
        ) : (
          <AutofitGrid minWidth="32rem">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} onClick={() => onSelectMember(member)}>
                <CardTop>
                  <FacultyAvatar
                    initials={member.avatarInitials}
                    name={member.name}
                    imageUrl={member.avatarUrl}
                    size="md"
                  />
                  <CardHeaderMeta>
                    <MemberName>{member.name}</MemberName>
                    <MemberRole>{member.role}</MemberRole>
                  </CardHeaderMeta>
                </CardTop>

                <CardTagsRow>
                  <DisciplineTag variant="solid" colorScheme="orange">
                    {member.disciplineLabel}
                  </DisciplineTag>
                  {member.ieeeStatus && (
                    <DisciplineTag variant="outline" colorScheme="blue">
                      {member.ieeeStatus}
                    </DisciplineTag>
                  )}
                  {member.degrees && (
                    <DisciplineTag variant="outline" colorScheme="slate">
                      {member.degrees}
                    </DisciplineTag>
                  )}
                </CardTagsRow>

                <MemberTeaser>{member.bio}</MemberTeaser>

                <CardActionRow>
                  <ViewBioButton>View Full Bio & Courses →</ViewBioButton>
                </CardActionRow>
              </MemberCard>
            ))}
          </AutofitGrid>
        )}
      </Container>
    </GridSection>
  )
}

const GridSection = styled.section`
  padding: 6rem 0 10rem 0;
  background: var(--background);
`

const MemberCard = styled.article`
  background: var(--cardBackground);
  border: 1px solid var(--lineColor);
  border-radius: 1.6rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px rgba(0, 106, 173, 0.1);
    border-color: var(--brandBlue);
  }
`

const CardTop = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`

const CardHeaderMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

const MemberName = styled.h3`
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1.2;
`

const MemberRole = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--mutedColor);
  line-height: 1.4;
`

const CardTagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`

const MemberTeaser = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: var(--mutedColor);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`

const CardActionRow = styled.div`
  padding-top: 1.2rem;
  border-top: 1px solid var(--lineColor);
  margin-top: auto;
`

const ViewBioButton = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--brandBlue);
  letter-spacing: 0.02em;
  transition: color 0.2s ease;

  ${MemberCard}:hover & {
    color: var(--primary);
  }
`

const EmptyState = styled.div`
  padding: 8rem 2rem;
  text-align: center;
  background: var(--secondBackground);
  border: 1px dashed var(--lineColor);
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`

const EmptyTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text);
`

const EmptyText = styled.p`
  font-size: 1.6rem;
  color: var(--mutedColor);
`
