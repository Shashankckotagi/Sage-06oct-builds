import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import Container from 'components/Container';
import PageHero from 'components/PageHero';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import WaveCta from 'components/WaveCta';
import { pageHeroes } from 'sage-data';

interface PracticeArea {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

const practiceAreas: PracticeArea[] = [
  {
    id: 'p1',
    title: 'Transceiver Architecture & Cascade Audits',
    icon: '📡',
    tagline: 'Dynamic Range & Noise Optimization',
    description:
      'Independent architectural evaluation of RF front-end cascades. We audit multi-stage gain distribution, cascaded noise figure, IP2/IP3 linearity, and phase noise margins.',
    deliverables: [
      'Spreadsheet-level cascaded budget modeling (NF, Gain, P1dB, IIP3)',
      'Mixer spur analysis, image rejection, and intermediate frequency (IF) selection',
      'Local oscillator (LO) leakage and phase noise mask verification',
    ],
  },
  {
    id: 'p2',
    title: 'Antenna Array Synthesis & Beamforming',
    icon: '📶',
    tagline: 'Pattern Synthesis & Mutual Coupling Mitigation',
    description:
      'Specialist advisory for phased array radars, satellite communications, and 5G mmWave massive MIMO apertures. We optimize beam steering performance and array feeding networks.',
    deliverables: [
      'Array factor synthesis with low sidelobe windowing (Chebyshev, Taylor)',
      'Active reflection coefficient analysis and scan blindness elimination',
      'True-time-delay vs. digital phase shifter trade-off optimization',
    ],
  },
  {
    id: 'p3',
    title: 'EMI / EMC Troubleshooting & Certification',
    icon: '⚡',
    tagline: 'Compliance Pre-Scans & Root-Cause Fixes',
    description:
      'Diagnostic troubleshooting for failing FCC, CE, and CISPR radiated or conducted emissions. We locate parasitic resonances, ground loops, and aperture leakage.',
    deliverables: [
      'Near-field magnetic/electric probe hot-spot identification',
      'Differential return-path continuity and split plane crossing fixes',
      'Shielding enclosure cavity resonance suppression techniques',
    ],
  },
  {
    id: 'p4',
    title: 'High-Speed Signal Integrity & PCB Interconnects',
    icon: '🔌',
    tagline: 'Multi-Gigabit Trace & Via Transitions',
    description:
      'Ensuring signal integrity across high-speed digital and mixed-signal PCB interfaces operating into the microwave regime (up to 40 GHz).',
    deliverables: [
      'Differential impedance matching and microstrip-to-GCPW transitions',
      'Back-drilling, via stub resonance elimination, and antipad design',
      'Eye diagram jitter budgeting and high-speed channel simulation',
    ],
  },
];

export default function ConsultingPage() {
  const heroData = pageHeroes['/consulting'] || pageHeroes['consulting'];

  return (
    <PageWrapper>
      {heroData && <PageHero {...heroData} />}

      {/* Leadership Credential Section */}
      <LeadershipSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <LeadershipCard>
              <LeadTag>SENIOR ADVISORY BOARD</LeadTag>
              <LeadTitle>
                Direct Access to Decades of International RF & Microwave Leadership
              </LeadTitle>
              <LeadText>
                SAGE technical consulting is spearheaded by <strong>Dr. S.N. Prasad</strong> and our network of senior associates. Our advisors combine distinguished tenures across top research universities, semiconductor design centers, and international defense research laboratories.
              </LeadText>

              <StatsRow>
                <StatBox>
                  <StatNumber>30+</StatNumber>
                  <StatLabel>Years Industry Leadership</StatLabel>
                </StatBox>

                <StatBox>
                  <StatNumber>100+</StatNumber>
                  <StatLabel>Peer-Reviewed Publications</StatLabel>
                </StatBox>

                <StatBox>
                  <StatNumber>40 GHz</StatNumber>
                  <StatLabel>mmWave Bench Expertise</StatLabel>
                </StatBox>
              </StatsRow>
            </LeadershipCard>
          </motion.div>
        </Container>
      </LeadershipSection>

      {/* Core Practice Areas */}
      <PracticeSection>
        <Container>
          <HeaderWrapper>
            <OverTitle>PRACTICE AREAS</OverTitle>
            <SectionTitle>Specialized Engineering Advisory</SectionTitle>
            <SubText>
              Targeted technical consulting to solve your most demanding electromagnetic, antenna, and wireless transceiver challenges.
            </SubText>
          </HeaderWrapper>

          <PracticeGrid>
            {practiceAreas.map((pa, idx) => (
              <motion.div
                key={pa.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <PracticeCard>
                  <PracticeTop>
                    <PIcon>{pa.icon}</PIcon>
                    <PTagline>{pa.tagline}</PTagline>
                  </PracticeTop>

                  <PTitle>{pa.title}</PTitle>
                  <PDesc>{pa.description}</PDesc>

                  <DeliverablesBox>
                    <DelivHeader>Core Deliverables:</DelivHeader>
                    <DelivList>
                      {pa.deliverables.map((d, dIdx) => (
                        <li key={dIdx}>
                          <span className="check">✓</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </DelivList>
                  </DeliverablesBox>

                  <NextLink href="/contact" passHref>
                    <ConsultBtn>Schedule Advisory Discussion →</ConsultBtn>
                  </NextLink>
                </PracticeCard>
              </motion.div>
            ))}
          </PracticeGrid>
        </Container>
      </PracticeSection>

      {/* Engagement Models */}
      <EngagementSection>
        <Container>
          <HeaderWrapper>
            <OverTitle>ENGAGEMENT MODELS</OverTitle>
            <SectionTitle>Flexible Ways to Collaborate</SectionTitle>
          </HeaderWrapper>

          <EngageGrid>
            <EngageCard>
              <EngageBadge>MODEL 01</EngageBadge>
              <EngageTitle>Design Audit & Architecture Review</EngageTitle>
              <EngageDesc>
                A time-boxed 1 to 2-week deep-dive review of your schematics, component budgets, layout Gerber files, and simulation decks before fabrication release.
              </EngageDesc>
            </EngageCard>

            <EngageCard $highlighted>
              <EngageBadge $accent>MODEL 02</EngageBadge>
              <EngageTitle>Rapid Prototype Troubleshooting</EngageTitle>
              <EngageDesc>
                Direct bench diagnostic support to isolate unexpected spurious oscillations, poor return loss, noise degradation, or board-level resonances.
              </EngageDesc>
            </EngageCard>

            <EngageCard>
              <EngageBadge>MODEL 03</EngageBadge>
              <EngageTitle>Strategic Technical Retainer</EngageTitle>
              <EngageDesc>
                Ongoing quarterly or annual advisory providing your R&D leadership with continuous peer reviews, patent analysis, and technology roadmap guidance.
              </EngageDesc>
            </EngageCard>
          </EngageGrid>
        </Container>
      </EngagementSection>

      <WaveCta
        title="Resolve Complex RF Challenges with Senior Specialists"
        subtitle="Schedule an initial technical consultation with our senior advisory team."
        primaryLabel="Schedule a Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore Training Programs"
        secondaryHref="/training"
      />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--background);
`;

const LeadershipSection = styled.section`
  padding: 6rem 0 4rem 0;
  background: var(--background);
`;

const LeadershipCard = styled.div`
  background: var(--cardBackground);
  border: 1px solid var(--lineColor);
  border-left: 5px solid var(--brandBlue);
  border-radius: 2rem;
  padding: 4.8rem;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 3rem 2.2rem;
  }
`;

const LeadTag = styled.span`
  background: var(--brandBlue);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 0.4rem 1.2rem;
  border-radius: 0.6rem;
  display: inline-block;
  margin-bottom: 1.8rem;
`;

const LeadTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1.3;
  margin-bottom: 1.6rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const LeadText = styled.p`
  font-size: 1.7rem;
  line-height: 1.7;
  color: var(--mutedColor);
  margin-bottom: 3.2rem;

  strong {
    color: var(--text);
  }
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
  border-top: 1px solid var(--lineColor);
  padding-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const StatNumber = styled.span`
  font-family: var(--font-heading);
  font-size: 3.2rem;
  font-weight: 900;
  color: var(--primary);
`;

const StatLabel = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--mutedColor);
`;

const PracticeSection = styled.section`
  padding: 6rem 0 8rem 0;
  background: var(--secondBackground);
`;

const HeaderWrapper = styled.div`
  max-width: 76rem;
  margin-bottom: 4.8rem;
`;

const SubText = styled.p`
  font-size: 1.7rem;
  line-height: 1.6;
  color: var(--mutedColor);
  margin-top: 1.2rem;
`;

const PracticeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PracticeCard = styled.div`
  background: var(--cardBackground);
  border: 1px solid var(--lineColor);
  border-radius: 1.8rem;
  padding: 3.6rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.03);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(0, 106, 173, 0.08);
    border-color: var(--brandBlue);
  }

  @media (max-width: 600px) {
    padding: 2.8rem 2rem;
  }
`;

const PracticeTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

const PIcon = styled.span`
  font-size: 2.8rem;
`;

const PTagline = styled.span`
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--brandBlue);
`;

const PTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 2.3rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1.35;
  margin-bottom: 1.4rem;
`;

const PDesc = styled.p`
  font-size: 1.55rem;
  line-height: 1.6;
  color: var(--mutedColor);
  margin-bottom: 2rem;
`;

const DeliverablesBox = styled.div`
  background: var(--secondBackground);
  border-radius: 1rem;
  padding: 1.8rem 2rem;
  margin-bottom: 2.4rem;
  flex: 1;
`;

const DelivHeader = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--mutedColor);
  margin-bottom: 1rem;
`;

const DelivList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    font-size: 1.4rem;
    line-height: 1.45;
    color: var(--text);

    .check {
      color: var(--brandBlue);
      font-weight: 800;
    }
  }
`;

const ConsultBtn = styled.a`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--brandBlue);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  border-top: 1px solid var(--lineColor);
  padding-top: 1.8rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(3px);
  }
`;

const EngagementSection = styled.section`
  padding: 8rem 0;
  background: var(--background);
`;

const EngageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const EngageCard = styled.div<{ $highlighted?: boolean }>`
  background: var(--cardBackground);
  border: 1px solid ${(p) => (p.$highlighted ? 'var(--brandBlue)' : 'var(--lineColor)')};
  border-radius: 1.6rem;
  padding: 3.2rem 2.6rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const EngageBadge = styled.span<{ $accent?: boolean }>`
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: ${(p) => (p.$accent ? 'var(--primary)' : 'var(--brandBlue)')};
`;

const EngageTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 2.1rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1.3;
`;

const EngageDesc = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--mutedColor);
`;
