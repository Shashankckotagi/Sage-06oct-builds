import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import Container from 'components/Container';
import PageHero from 'components/PageHero';
import WaveCta from 'components/WaveCta';
import { pageHeroes } from 'sage-data';

export default function WorkshopsPage() {
  const heroData = pageHeroes['/workshops'] || pageHeroes['workshops'];

  const upcomingWorkshops = [
    {
      title: 'Hands-On RF & Microwave Board Layout',
      description: 'Practical design sessions covering microstrip transmission lines, grounding continuity, and via fences.',
      format: 'Interactive Design Lab',
    },
    {
      title: 'Vector Network Analyzer (VNA) Calibration & Test Clinic',
      description: 'Hands-on calibration standards, fixture de-embedding, and multi-port S-parameter measurements.',
      format: 'Laboratory Clinic',
    },
    {
      title: 'Antenna Array Design & Measurement',
      description: 'Array synthesis, radiation pattern verification, and beam steering fundamentals.',
      format: 'Hands-on Seminar',
    },
    {
      title: 'High-Speed Signal Integrity & EMC Compliance',
      description: 'Locating parasitic resonances, differential skew minimization, and emission debugging.',
      format: 'Design & Debug Lab',
    },
  ];

  return (
    <PageWrapper>
      {heroData && <PageHero {...heroData} />}

      <MainSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NoticeCard>
              <BadgeRow>
                <StatusBadge>UNDER CONSTRUCTION</StatusBadge>
                <TimelineBadge>Coming Soon</TimelineBadge>
              </BadgeRow>

              <CardTitle>Hands-On Technical Workshops</CardTitle>
              <CardDescription>
                We are currently finalizing our upcoming workshop schedule, laboratory equipment setups, and hands-on clinic modules for both institutional and corporate participants.
              </CardDescription>

              <CardFootnote>
                If your organization or university is interested in hosting or participating in a custom on-site or virtual workshop, please reach out to us directly.
              </CardFootnote>

              <ActionRow>
                <NextLink href="/contact" passHref>
                  <PrimaryButton>Inquire About Workshops →</PrimaryButton>
                </NextLink>
                <NextLink href="/courses" passHref>
                  <SecondaryButton>Browse Courses</SecondaryButton>
                </NextLink>
              </ActionRow>
            </NoticeCard>
          </motion.div>

          <PreviewSection>
            <PreviewTitle>Planned Workshop Focus Areas</PreviewTitle>
            <WorkshopsGrid>
              {upcomingWorkshops.map((ws, idx) => (
                <WorkshopCard key={idx}>
                  <FormatBadge>{ws.format}</FormatBadge>
                  <WSTitle>{ws.title}</WSTitle>
                  <WSDesc>{ws.description}</WSDesc>
                </WorkshopCard>
              ))}
            </WorkshopsGrid>
          </PreviewSection>
        </Container>
      </MainSection>

      <WaveCta
        title="Host a SAGE Workshop at Your Organization"
        subtitle="Bring our expert faculty and custom laboratory modules directly to your engineering team."
        primaryLabel="Schedule a Workshop"
        primaryHref="/contact"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--background);
`;

const MainSection = styled.section`
  padding: 6rem 0 8rem 0;
  background: var(--background);
`;

const NoticeCard = styled.div`
  background: var(--cardBackground);
  border: 1px solid var(--lineColor);
  border-left: 5px solid var(--primary);
  border-radius: 2rem;
  padding: 4.8rem;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.04);
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    padding: 3.2rem 2.4rem;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const StatusBadge = styled.span`
  background: rgba(251, 107, 49, 0.1);
  color: var(--primary);
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.5rem 1.2rem;
  border-radius: 0.6rem;
`;

const TimelineBadge = styled.span`
  background: rgba(0, 106, 173, 0.1);
  color: var(--brandBlue);
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 0.5rem 1.2rem;
  border-radius: 0.6rem;
`;

const CardTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1.3;
  margin-bottom: 1.8rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1.8rem;
  line-height: 1.7;
  color: var(--text);
  font-weight: 500;
  margin-bottom: 1.4rem;
`;

const CardFootnote = styled.p`
  font-size: 1.55rem;
  line-height: 1.6;
  color: var(--mutedColor);
  margin-bottom: 3.2rem;
`;

const ActionRow = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  background: var(--primary);
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #e0551b;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(251, 107, 49, 0.35);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  background: transparent;
  border: 1px solid var(--lineColor);
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--brandBlue);
    color: var(--brandBlue);
    background: rgba(0, 106, 173, 0.05);
  }
`;

const PreviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

const PreviewTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--text);
`;

const WorkshopsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const WorkshopCard = styled.div`
  background: var(--cardBackground);
  border: 1px solid var(--lineColor);
  border-radius: 1.6rem;
  padding: 3.2rem 2.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--brandBlue);
  }
`;

const FormatBadge = styled.span`
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--brandBlue);
`;

const WSTitle = styled.h4`
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1.3;
`;

const WSDesc = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--mutedColor);
  margin: 0;
`;
