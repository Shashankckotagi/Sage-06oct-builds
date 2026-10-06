import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import WaveCta from 'components/WaveCta';
import { mission, vision, goals, aboutPillars } from 'sage-data';

export default function MissionPage() {
  const goalMeta = [
    {
      badge: 'Knowledge Dissemination',
      subtitle: 'Circuits, Components & Systems',
      cta: 'Explore Courses',
      href: '/courses',
      secondaryCta: 'Browse Tutorials',
      secondaryHref: '/tutorials',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      badge: 'Multilevel Training',
      subtitle: 'Graduates & Industry Engineers',
      cta: 'View Workshops',
      href: '/workshops',
      secondaryCta: 'Corporate Training',
      secondaryHref: '/training',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
        </svg>
      ),
    },
    {
      badge: 'Engineering Advisory',
      subtitle: 'RF, Microwave & Wireless Systems',
      cta: 'Consulting Services',
      href: '/consulting',
      secondaryCta: 'Get in Touch',
      secondaryHref: '/contact',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 3v18" />
          <path d="m14 9 3 3-3 3" />
        </svg>
      ),
    },
  ];

  return (
    <Wrapper>
      {/* Section 1: Mission & Vision Spotlight */}
      <SpotlightSection>
        <Container>
          <SpotlightGrid>
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SpotlightCard $variant="mission">
                <CardHeader>
                  <IconBadge $variant="mission">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </IconBadge>
                  <TagBadge $variant="mission">OUR MISSION</TagBadge>
                </CardHeader>
                <HeadlineTitle>MISSION</HeadlineTitle>
                <QuoteText>"{mission}"</QuoteText>
                <Divider />
                <CardFootnote>
                  Dedicated to making complex electromagnetic theory practical, actionable, and readily accessible for modern engineers worldwide.
                </CardFootnote>
              </SpotlightCard>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <SpotlightCard $variant="vision">
                <CardHeader>
                  <IconBadge $variant="vision">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </IconBadge>
                  <TagBadge $variant="vision">OUR VISION</TagBadge>
                </CardHeader>
                <HeadlineTitle>Vision</HeadlineTitle>
                <QuoteText>"{vision}"</QuoteText>
                <Divider />
                <CardFootnote>
                  Building an international nexus of electromagnetic researchers, corporate practitioners, and students advancing high-frequency wireless frontiers.
                </CardFootnote>
              </SpotlightCard>
            </motion.div>
          </SpotlightGrid>
        </Container>
      </SpotlightSection>

      {/* Section 2: Strategic Goals */}
      <GoalsSection>
        <Container>
          <HeaderWrapper>
            <OverTitle>01 / CORE OBJECTIVES</OverTitle>
            <SectionTitle>Goals & Implementation Roadmap</SectionTitle>
            <SubtitleText>
              How SAGE delivers on its foundational mission through focused initiatives across engineering knowledge, multilevel training, and specialized corporate consulting.
            </SubtitleText>
          </HeaderWrapper>

          <GoalsList>
            {goals.map((goalText, idx) => {
              const meta = goalMeta[idx] || goalMeta[0];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GoalCard>
                    <GoalNumberSide>
                      <NumberLabel>0{idx + 1}</NumberLabel>
                      <GoalIconWrapper>{meta.icon}</GoalIconWrapper>
                    </GoalNumberSide>

                    <GoalContentSide>
                      <GoalBadgeRow>
                        <GoalBadge>{meta.badge}</GoalBadge>
                        <GoalSubtitle>{meta.subtitle}</GoalSubtitle>
                      </GoalBadgeRow>
                      
                      <GoalTextContent>"{goalText}"</GoalTextContent>

                      <GoalActionRow>
                        <NextLink href={meta.href} passHref>
                          <PrimaryActionBtn>{meta.cta} →</PrimaryActionBtn>
                        </NextLink>
                        {meta.secondaryHref && (
                          <NextLink href={meta.secondaryHref} passHref>
                            <SecondaryActionBtn>{meta.secondaryCta}</SecondaryActionBtn>
                          </NextLink>
                        )}
                      </GoalActionRow>
                    </GoalContentSide>
                  </GoalCard>
                </motion.div>
              );
            })}
          </GoalsList>
        </Container>
      </GoalsSection>

      {/* Section 3: Pillars & Engineering Values */}
      <PillarsSection>
        <Container>
          <HeaderWrapper>
            <OverTitle>02 / GUIDING VALUES</OverTitle>
            <SectionTitle>Our Core Operating Principles</SectionTitle>
            <SubtitleText>
              The foundational standards that guide every course, workshop, and consulting engagement at SAGE.
            </SubtitleText>
          </HeaderWrapper>

          <PillarsGrid>
            {aboutPillars.map((pillar, idx) => (
              <PillarCard key={idx}>
                <PillarIndex>0{idx + 1}</PillarIndex>
                <PillarHeading>{pillar.title}</PillarHeading>
                <PillarBody>{pillar.description}</PillarBody>
              </PillarCard>
            ))}
          </PillarsGrid>
        </Container>
      </PillarsSection>

      {/* Wave CTA Section */}
      <WaveCta />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpotlightSection = styled.section`
  padding: 6rem 0 8rem 0;
  background: var(--background);
`;

const SpotlightGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.4rem;
  }
`;

const SpotlightCard = styled.div<{ $variant: 'mission' | 'vision' }>`
  background: var(--cardBackground);
  border: 1px solid var(--lineColor);
  border-radius: 2rem;
  padding: 4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: ${(p) =>
      p.$variant === 'mission'
        ? 'linear-gradient(90deg, #006AAD, #35A9EF)'
        : 'linear-gradient(90deg, #FB6B31, #FF8A50)'};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
    border-color: ${(p) => (p.$variant === 'mission' ? 'var(--brandBlue)' : 'var(--primary)')};
  }

  @media (max-width: 600px) {
    padding: 2.8rem 2.2rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const IconBadge = styled.div<{ $variant: 'mission' | 'vision' }>`
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) =>
    p.$variant === 'mission'
      ? 'rgba(0, 106, 173, 0.1)'
      : 'rgba(251, 107, 49, 0.1)'};
  color: ${(p) =>
    p.$variant === 'mission'
      ? 'var(--brandBlue)'
      : 'var(--primary)'};
`;

const TagBadge = styled.span<{ $variant: 'mission' | 'vision' }>`
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.5rem 1.2rem;
  border-radius: 2rem;
  background: ${(p) =>
    p.$variant === 'mission'
      ? 'rgba(0, 106, 173, 0.08)'
      : 'rgba(251, 107, 49, 0.08)'};
  color: ${(p) =>
    p.$variant === 'mission'
      ? 'var(--brandBlue)'
      : 'var(--primary)'};
`;

const HeadlineTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 1.6rem;
  letter-spacing: -0.01em;
`;

const QuoteText = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  color: var(--text);
  font-weight: 600;
  font-style: italic;
  flex: 1;
`;

const Divider = styled.div`
  height: 1px;
  background: var(--lineColor);
  margin: 2.4rem 0 1.8rem 0;
`;

const CardFootnote = styled.p`
  font-size: 1.45rem;
  line-height: 1.6;
  color: var(--mutedColor);
  margin: 0;
`;

const GoalsSection = styled.section`
  padding: 8rem 0;
  background: var(--secondBackground);
`;

const HeaderWrapper = styled.div`
  max-width: 76rem;
  margin-bottom: 4.8rem;
`;

const SubtitleText = styled.p`
  font-size: 1.7rem;
  line-height: 1.6;
  color: var(--mutedColor);
  margin-top: 1.2rem;
`;

const GoalsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const GoalCard = styled.div`
  background: var(--cardBackground);
  border: 1px solid var(--lineColor);
  border-radius: 1.8rem;
  padding: 3.6rem;
  display: grid;
  grid-template-columns: 10rem 1fr;
  gap: 3rem;
  align-items: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.06);
    border-color: var(--brandBlue);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.8rem 2.2rem;
  }
`;

const GoalNumberSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-right: 2.4rem;
  border-right: 1px solid var(--lineColor);

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    padding-right: 0;
    border-right: none;
    border-bottom: 1px solid var(--lineColor);
    padding-bottom: 1.6rem;
  }
`;

const NumberLabel = styled.span`
  font-family: var(--font-heading);
  font-size: 3.4rem;
  font-weight: 900;
  color: var(--primary);
  line-height: 1;
`;

const GoalIconWrapper = styled.div`
  color: var(--brandBlue);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoalContentSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const GoalBadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const GoalBadge = styled.span`
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brandBlue);
  background: rgba(0, 106, 173, 0.09);
  padding: 0.35rem 1rem;
  border-radius: 0.6rem;
`;

const GoalSubtitle = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--mutedColor);
`;

const GoalTextContent = styled.p`
  font-size: 1.9rem;
  line-height: 1.55;
  color: var(--text);
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const GoalActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  flex-wrap: wrap;
  margin-top: 0.6rem;
`;

const PrimaryActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  background: var(--brandBlue);
  padding: 0.8rem 1.8rem;
  border-radius: 0.8rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #00558b;
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(0, 106, 173, 0.3);
  }
`;

const SecondaryActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
  background: transparent;
  border: 1px solid var(--lineColor);
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--brandBlue);
    color: var(--brandBlue);
    background: rgba(0, 106, 173, 0.05);
  }
`;

const PillarsSection = styled.section`
  padding: 8rem 0 10rem 0;
  background: var(--background);
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const PillarCard = styled.div`
  background: var(--cardBackground);
  border: 1px solid var(--lineColor);
  border-radius: 1.6rem;
  padding: 3.2rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--brandBlue);
    box-shadow: 0 12px 28px rgba(0, 106, 173, 0.08);
  }
`;

const PillarIndex = styled.span`
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary);
`;

const PillarHeading = styled.h4`
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1.3;
`;

const PillarBody = styled.p`
  font-size: 1.45rem;
  line-height: 1.6;
  color: var(--mutedColor);
  margin: 0;
`;
