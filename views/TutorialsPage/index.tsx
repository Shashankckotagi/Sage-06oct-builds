import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import Container from 'components/Container';
import PageHero from 'components/PageHero';
import WaveCta from 'components/WaveCta';
import { pageHeroes } from 'sage-data';

export default function TutorialsPage() {
  const heroData = pageHeroes['/tutorials'] || pageHeroes['tutorials'];

  const upcomingTopics = [
    {
      title: 'Applied Electromagnetics & Wave Theory',
      description: 'Foundational tutorials connecting electromagnetic field theory to practical high-frequency design principles.',
      icon: '🌊',
    },
    {
      title: 'RF & Microwave Circuit Analysis',
      description: 'Step-by-step guides covering impedance matching, transmission lines, and high-frequency passive networks.',
      icon: '⚡',
    },
    {
      title: 'Antenna Theory & Propagation',
      description: 'Practical application notes on antenna parameters, radiation characteristics, and array fundamentals.',
      icon: '📡',
    },
    {
      title: 'High-Speed Layout & Signal Integrity',
      description: 'Practical design guidelines for high-frequency PCB layout, grounding, and electromagnetic compatibility.',
      icon: '🔌',
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

              <CardTitle>Technical Tutorials & Reference Guides</CardTitle>
              <CardDescription>
                We are currently curating and formatting our comprehensive library of technical tutorials, application notes, and guided reference materials in applied electromagnetics and RF systems engineering.
              </CardDescription>

              <CardFootnote>
                In the meantime, explore our active course offerings or get in touch with our team to inquire about specific technical topics and training programs.
              </CardFootnote>

              <ActionRow>
                <NextLink href="/courses" passHref>
                  <PrimaryButton>Explore Courses →</PrimaryButton>
                </NextLink>
                <NextLink href="/contact" passHref>
                  <SecondaryButton>Contact Us</SecondaryButton>
                </NextLink>
              </ActionRow>
            </NoticeCard>
          </motion.div>

          <PreviewSection>
            <PreviewTitle>Upcoming Tutorial Topics</PreviewTitle>
            <TopicsGrid>
              {upcomingTopics.map((topic, idx) => (
                <TopicCard key={idx}>
                  <TopicIcon>{topic.icon}</TopicIcon>
                  <TopicTitle>{topic.title}</TopicTitle>
                  <TopicDesc>{topic.description}</TopicDesc>
                </TopicCard>
              ))}
            </TopicsGrid>
          </PreviewSection>
        </Container>
      </MainSection>

      <WaveCta
        title="Looking for Structured Instruction?"
        subtitle="Explore our comprehensive courses or connect with SAGE faculty for customized training."
        primaryLabel="Explore Courses"
        primaryHref="/courses"
        secondaryLabel="Contact SAGE"
        secondaryHref="/contact"
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
  border-left: 5px solid var(--brandBlue);
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
  background: rgba(0, 106, 173, 0.1);
  color: var(--brandBlue);
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.5rem 1.2rem;
  border-radius: 0.6rem;
`;

const TimelineBadge = styled.span`
  background: rgba(251, 107, 49, 0.1);
  color: var(--primary);
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
  background: var(--brandBlue);
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #00558b;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 106, 173, 0.3);
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

const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TopicCard = styled.div`
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

const TopicIcon = styled.div`
  font-size: 3rem;
`;

const TopicTitle = styled.h4`
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1.3;
`;

const TopicDesc = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--mutedColor);
  margin: 0;
`;
