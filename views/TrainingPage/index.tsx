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

interface TrainingTrack {
  id: string;
  title: string;
  audience: string;
  duration: string;
  description: string;
  modules: string[];
}

const trainingTracks: TrainingTrack[] = [
  {
    id: 'tr1',
    title: 'Applied Electromagnetics & RF Circuit Design Bootcamp',
    audience: 'Corporate R&D Teams & System Architects',
    duration: '40 Hours (5 Days / 4 Weeks)',
    description:
      'A rigorous foundational upskilling program bridging Maxwell’s equations, transmission line theory, impedance matching networks, and non-linear circuit behaviors.',
    modules: [
      'Electromagnetic wave propagation, skin depth & dielectric interfaces',
      'Smith Chart matching for discrete L, Pi, T and distributed networks',
      'Low Noise Amplifier (LNA) design and noise figure optimization',
      'Power amplifier fundamentals, load-line matching & harmonic suppression',
    ],
  },
  {
    id: 'tr2',
    title: 'Wireless Transceiver Architecture & Cascaded System Budgets',
    audience: 'Communications Engineers & Hardware Developers',
    duration: '32 Hours (4 Days / 4 Weeks)',
    description:
      'End-to-end design methodology for modern cellular, satellite, and tactical transceivers from antenna port to ADC/DAC digital interface.',
    modules: [
      'Cascaded Gain, Noise Figure (NF), and Third-Order Intercept (IIP3/OIP3)',
      'Direct conversion (Zero-IF) vs. Superheterodyne architecture trade-offs',
      'Phase noise, jitter budgets, and synthesizer lock time dynamics',
      'Link budget calculations for terrestrial 5G and satellite links',
    ],
  },
  {
    id: 'tr3',
    title: 'Graduate Engineering Fast-Track (BS/MS Transition Program)',
    audience: 'Recent Engineering Graduates & Junior Hires',
    duration: '60 Hours (8 Weeks)',
    description:
      'Bridges the crucial gap between textbook academic electromagnetics and real-world industrial RF bench design, simulation tools, and testing methodologies.',
    modules: [
      'Practical RF board layout rules and ground return integrity',
      'Laboratory instrumentation: VNA, spectrum analyzer & signal generators',
      'Component parasitics, SMD package models & decoupling strategies',
      'Hands-on design review and troubleshooting exercises',
    ],
  },
  {
    id: 'tr4',
    title: 'Faculty Development Program (FDP) in Microwave Technologies',
    audience: 'University Faculty & Academic Researchers',
    duration: '30 Hours (1 Week Intensive)',
    description:
      'Equips engineering professors and lab directors with modern pedagogical frameworks, hands-on lab experiments, and industry-relevant research insights.',
    modules: [
      'Modernizing university RF/Microwave curricula for industry readiness',
      'Designing affordable, high-impact benchtop laboratory experiments',
      'Electromagnetic simulation software integration in classroom teaching',
      'Industry-academia collaboration and research grant proposal best practices',
    ],
  },
];

export default function TrainingPage() {
  const heroData = pageHeroes['/training'] || pageHeroes['training'];

  return (
    <PageWrapper>
      {heroData && <PageHero {...heroData} />}

      {/* Target Audiences Grid */}
      <AudiencesSection>
        <Container>
          <HeaderWrapper>
            <OverTitle>TAILORED SOLUTIONS</OverTitle>
            <SectionTitle>Who We Train</SectionTitle>
            <SubText>
              Customized curricula tailored to the specific skill-level and technology focus of your team.
            </SubText>
          </HeaderWrapper>

          <AudiencesGrid>
            <AudienceCard>
              <AudienceIcon>🏢</AudienceIcon>
              <AudienceTitle>Corporate R&D Teams</AudienceTitle>
              <AudienceDesc>
                Rapidly upskill cross-functional engineers into specialized RF, microwave, and wireless hardware roles to accelerate time-to-market.
              </AudienceDesc>
            </AudienceCard>

            <AudienceCard>
              <AudienceIcon>🛰️</AudienceIcon>
              <AudienceTitle>Defense & Aerospace</AudienceTitle>
              <AudienceDesc>
                Advanced training in phased array radar, electronic warfare, high-power GaN amplifiers, and mission-critical communications.
              </AudienceDesc>
            </AudienceCard>

            <AudienceCard>
              <AudienceIcon>🎓</AudienceIcon>
              <AudienceTitle>Recent College Graduates</AudienceTitle>
              <AudienceDesc>
                Structured transition training enabling Bachelor and Master graduates to contribute productively to engineering projects from day one.
              </AudienceDesc>
            </AudienceCard>

            <AudienceCard>
              <AudienceIcon>🔬</AudienceIcon>
              <AudienceTitle>University Faculty</AudienceTitle>
              <AudienceDesc>
                Faculty Development Programs (FDP) providing professors with cutting-edge industry curriculum materials and practical lab blueprints.
              </AudienceDesc>
            </AudienceCard>
          </AudiencesGrid>
        </Container>
      </AudiencesSection>

      {/* Flagship Training Tracks */}
      <TracksSection>
        <Container>
          <HeaderWrapper>
            <OverTitle>CURRICULUM TRACKS</OverTitle>
            <SectionTitle>Flagship Professional Programs</SectionTitle>
            <SubText>
              Structured modular programs delivered by senior SAGE faculty, available for on-site or virtual enterprise deployment.
            </SubText>
          </HeaderWrapper>

          <TracksGrid>
            {trainingTracks.map((tr, idx) => (
              <motion.div
                key={tr.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <TrackCard>
                  <TrackMetaRow>
                    <AudienceBadge>{tr.audience}</AudienceBadge>
                    <DurationBadge>{tr.duration}</DurationBadge>
                  </TrackMetaRow>

                  <TrackTitle>{tr.title}</TrackTitle>
                  <TrackDesc>{tr.description}</TrackDesc>

                  <ModulesBox>
                    <ModulesHeader>Included Modules:</ModulesHeader>
                    <ModulesList>
                      {tr.modules.map((m, mIdx) => (
                        <li key={mIdx}>
                          <span className="check">✓</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ModulesList>
                  </ModulesBox>

                  <TrackCardFooter>
                    <NextLink href="/contact" passHref>
                      <CustomPlanBtn>Request Custom Syllabus →</CustomPlanBtn>
                    </NextLink>
                  </TrackCardFooter>
                </TrackCard>
              </motion.div>
            ))}
          </TracksGrid>
        </Container>
      </TracksSection>

      {/* The SAGE 4-Step Process */}
      <ProcessSection>
        <Container>
          <HeaderWrapper>
            <OverTitle>METHODOLOGY</OverTitle>
            <SectionTitle>Our Corporate Training Process</SectionTitle>
          </HeaderWrapper>

          <ProcessGrid>
            <ProcessStep>
              <StepNum>01</StepNum>
              <StepTitle>Diagnostic Assessment</StepTitle>
              <StepDesc>
                We evaluate your team’s current capabilities, product roadmaps, and immediate project milestones to identify key knowledge gaps.
              </StepDesc>
            </ProcessStep>

            <ProcessStep>
              <StepNum>02</StepNum>
              <StepTitle>Curriculum Customization</StepTitle>
              <StepDesc>
                Our faculty customizes theoretical modules, case studies, and bench simulation exercises to align with your proprietary workflows.
              </StepDesc>
            </ProcessStep>

            <ProcessStep>
              <StepNum>03</StepNum>
              <StepTitle>Interactive Execution</StepTitle>
              <StepDesc>
                Live delivery on-site at your facility or through interactive virtual classrooms, emphasizing mathematical rigor and real circuit formulas.
              </StepDesc>
            </ProcessStep>

            <ProcessStep>
              <StepNum>04</StepNum>
              <StepTitle>Evaluation & Certification</StepTitle>
              <StepDesc>
                Practical design challenges, post-program capability reviews, and formal SAGE credentials of engineering proficiency.
              </StepDesc>
            </ProcessStep>
          </ProcessGrid>
        </Container>
      </ProcessSection>

      <WaveCta
        title="Transform Your Team's RF Engineering Capabilities"
        subtitle="Contact our academic and corporate advisory team to discuss a tailored training syllabus."
        primaryLabel="Inquire About Corporate Training"
        primaryHref="/contact"
        secondaryLabel="View Course Catalog"
        secondaryHref="/courses"
      />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--background);
`;

const AudiencesSection = styled.section`
  padding: 6rem 0;
  background: var(--background);
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

const AudiencesGrid = styled.div`
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

const AudienceCard = styled.div`
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
    transform: translateY(-4px);
    border-color: var(--brandBlue);
    box-shadow: 0 12px 28px rgba(0, 106, 173, 0.08);
  }
`;

const AudienceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.4rem;
`;

const AudienceTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1.3;
`;

const AudienceDesc = styled.p`
  font-size: 1.45rem;
  line-height: 1.6;
  color: var(--mutedColor);
  margin: 0;
`;

const TracksSection = styled.section`
  padding: 6rem 0 8rem 0;
  background: var(--secondBackground);
`;

const TracksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TrackCard = styled.div`
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

const TrackMetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const AudienceBadge = styled.span`
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--brandBlue);
  background: rgba(0, 106, 173, 0.1);
  padding: 0.35rem 0.9rem;
  border-radius: 0.4rem;
`;

const DurationBadge = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--mutedColor);
`;

const TrackTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 2.3rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1.35;
  margin-bottom: 1.4rem;
`;

const TrackDesc = styled.p`
  font-size: 1.55rem;
  line-height: 1.6;
  color: var(--mutedColor);
  margin-bottom: 2rem;
`;

const ModulesBox = styled.div`
  background: var(--secondBackground);
  border-radius: 1rem;
  padding: 1.8rem 2rem;
  margin-bottom: 2.4rem;
  flex: 1;
`;

const ModulesHeader = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--mutedColor);
  margin-bottom: 1rem;
`;

const ModulesList = styled.ul`
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

const TrackCardFooter = styled.div`
  border-top: 1px solid var(--lineColor);
  padding-top: 1.8rem;
`;

const CustomPlanBtn = styled.a`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--brandBlue);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(3px);
  }
`;

const ProcessSection = styled.section`
  padding: 8rem 0;
  background: var(--background);
`;

const ProcessGrid = styled.div`
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

const ProcessStep = styled.div`
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
  }
`;

const StepNum = styled.span`
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--primary);
`;

const StepTitle = styled.h4`
  font-family: var(--font-heading);
  font-size: 1.9rem;
  font-weight: 800;
  color: var(--text);
`;

const StepDesc = styled.p`
  font-size: 1.45rem;
  line-height: 1.6;
  color: var(--mutedColor);
`;
