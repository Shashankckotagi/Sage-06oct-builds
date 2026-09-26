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

interface WorkshopItem {
  id: string;
  title: string;
  duration: string;
  format: string;
  level: string;
  description: string;
  curriculum: string[];
  equipment: string;
}

const workshopsList: WorkshopItem[] = [
  {
    id: 'w1',
    title: 'VNA Calibration, De-Embedding & mmWave Characterization',
    duration: '3 Days (24 Hours)',
    format: 'Laboratory Hands-On',
    level: 'Advanced',
    description:
      'Rigorous bench clinic on SOLT, TRL, and LRL calibration standards, fixture de-embedding, multi-port S-parameters, and wafer-level probe measurements.',
    curriculum: [
      'Error models and 12-term systematic vector calibration',
      'TRL (Thru-Reflect-Line) calibration kit design and substrate standards',
      'Differential impedance and mixed-mode S-parameter conversion',
      'Time-domain gating and high-frequency fixture removal',
    ],
    equipment: 'Keysight / R&S VNAs (up to 40 GHz), coplanar probe stations, microstrip test fixtures',
  },
  {
    id: 'w2',
    title: 'High-Frequency PCB Layout, Grounding & EMC Optimization',
    duration: '2 Days (16 Hours)',
    format: 'Interactive Design Lab',
    level: 'Intermediate',
    description:
      'Bridge electromagnetic boundary theory with board fabrication. Minimize parasitic inductance, prevent cavity resonances, and ensure FCC/CISPR compliance.',
    curriculum: [
      'Microstrip and GCPW transition geometries for low VSWR',
      'Via fence design, ground stitching, and return path continuity',
      'Split-plane crossing mitigation and differential pair skew control',
      'Near-field magnetic probe scanning and radiation hotspot fixes',
    ],
    equipment: 'Spectrum analyzers, near-field sniffer probes, high-speed TDR scopes',
  },
  {
    id: 'w3',
    title: 'Phased Array Antenna & Digital Beamforming Masterclass',
    duration: '3 Days (24 Hours)',
    format: 'Hybrid Lab & Simulation',
    level: 'Advanced',
    description:
      'Comprehensive workshop on active antenna array synthesis, mutual coupling mitigation, grating lobe suppression, and multi-channel phase calibration.',
    curriculum: [
      'Linear, planar, and conformal array factor derivations',
      'Active reflection coefficient and scan blindness diagnosis',
      'True time delay (TTD) vs. phase shifter beam steering trade-offs',
      'Far-field radiation pattern measurement inside anechoic chambers',
    ],
    equipment: 'Compact anechoic chamber, multi-channel RF front-end modules, dipole/patch arrays',
  },
  {
    id: 'w4',
    title: 'RF Power Amplifier Linearization & Doherty Design Clinic',
    duration: '2 Days (16 Hours)',
    format: 'Design & Test Intensive',
    level: 'Advanced',
    description:
      'Design, simulate, and bench-test high-efficiency GaN/GaAs power amplifiers with digital predistortion (DPD) and Doherty load modulation.',
    curriculum: [
      'Class AB, F, and inverse Class F amplifier matching strategies',
      'Doherty main/peaking transistor bias optimization and impedance inverters',
      'Two-tone intermodulation distortion (IMD) and memory effects',
      'Efficiency enhancement under complex 5G modulated waveforms',
    ],
    equipment: 'Signal generators, power meters, high-power attenuators, real-time spectrum analyzers',
  },
];

export default function WorkshopsPage() {
  const heroData = pageHeroes['/workshops'] || pageHeroes['workshops'];

  return (
    <PageWrapper>
      {heroData && <PageHero {...heroData} />}

      {/* Formats Banner */}
      <FormatsSection>
        <Container>
          <FormatsGrid>
            <FormatCard>
              <FormatBadge>FORMAT 01</FormatBadge>
              <FormatTitle>1-Day Intensive Seminars</FormatTitle>
              <FormatDesc>
                Fast-paced, high-impact focus sessions covering specialized topics, design equations, and industry case studies.
              </FormatDesc>
            </FormatCard>

            <FormatCard $highlighted>
              <FormatBadge $accent>FORMAT 02</FormatBadge>
              <FormatTitle>3-Day Hands-On Clinics</FormatTitle>
              <FormatDesc>
                Deep-dive bench workshops combining electromagnetic theory, prototype simulation, and live laboratory measurement on vector analyzers.
              </FormatDesc>
            </FormatCard>

            <FormatCard>
              <FormatBadge>FORMAT 03</FormatBadge>
              <FormatTitle>On-Site Corporate Labs</FormatTitle>
              <FormatDesc>
                Customized workshops delivered directly at your corporate R&D facility with tailored test scenarios mapped to your product pipeline.
              </FormatDesc>
            </FormatCard>
          </FormatsGrid>
        </Container>
      </FormatsSection>

      {/* Featured Workshop Spotlight */}
      <SpotlightSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightBox>
              <SpotlightHeader>
                <SpotlightTag>FEATURED WORKSHOP SPOTLIGHT</SpotlightTag>
                <DurationTag>3 Days • Laboratory Intensive</DurationTag>
              </SpotlightHeader>

              <SpotlightTitle>
                VNA Calibration, De-Embedding & High-Frequency RF Characterization
              </SpotlightTitle>
              <SpotlightText>
                Conducted under the direct supervision of Dr. S.N. Prasad and senior SAGE engineering associates. Designed for practicing RF engineers, test bench leaders, and post-graduate researchers seeking uncompromising mastery in precision high-frequency measurements.
              </SpotlightText>

              <ModuleGrid>
                <ModuleCol>
                  <ModNum>Day 1</ModNum>
                  <ModTitle>Vector Network Theory & Error Models</ModTitle>
                  <ModText>12-term error box calibration, systematic vs. random drift, and directivity limits.</ModText>
                </ModuleCol>

                <ModuleCol>
                  <ModNum>Day 2</ModNum>
                  <ModTitle>SOLT vs. TRL Calibration Standards</ModTitle>
                  <ModText>Precision fixture design, reference plane shifting, and 2-tier de-embedding.</ModText>
                </ModuleCol>

                <ModuleCol>
                  <ModNum>Day 3</ModNum>
                  <ModTitle>Active Device Characterization</ModTitle>
                  <ModText>Multi-port S-parameters, non-linear distortion, and automated test automation scripts.</ModText>
                </ModuleCol>
              </ModuleGrid>

              <ActionRow>
                <NextLink href="/contact" passHref>
                  <PrimaryBtn>Request Workshop Syllabus & Booking →</PrimaryBtn>
                </NextLink>
                <NextLink href="/courses" passHref>
                  <SecondaryBtn>Explore Core Courses</SecondaryBtn>
                </NextLink>
              </ActionRow>
            </SpotlightBox>
          </motion.div>
        </Container>
      </SpotlightSection>

      {/* Workshops Catalog */}
      <CatalogSection>
        <Container>
          <HeaderWrapper>
            <OverTitle>WORKSHOP OFFERINGS</OverTitle>
            <SectionTitle>Technical Workshops & Specialized Labs</SectionTitle>
            <SubText>
              Hands-on engineering workshops designed to bridge theory with physical prototype verification, circuit layouts, and bench measurement.
            </SubText>
          </HeaderWrapper>

          <WorkshopsGrid>
            {workshopsList.map((ws, idx) => (
              <motion.div
                key={ws.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <WorkshopCard>
                  <CardMetaRow>
                    <MetaBadge>{ws.format}</MetaBadge>
                    <LevelTag>{ws.level}</LevelTag>
                  </CardMetaRow>

                  <WSTitle>{ws.title}</WSTitle>
                  <WSDesc>{ws.description}</WSDesc>

                  <CurriculumBox>
                    <CurriculumHeading>Key Lab Modules:</CurriculumHeading>
                    <CurriculumList>
                      {ws.curriculum.map((c, cIdx) => (
                        <li key={cIdx}>
                          <span className="bullet">✓</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </CurriculumList>
                  </CurriculumBox>

                  <EquipmentBox>
                    <strong>Instruments:</strong> {ws.equipment}
                  </EquipmentBox>

                  <CardBottomRow>
                    <DurationLabel>Duration: {ws.duration}</DurationLabel>
                    <NextLink href="/contact" passHref>
                      <EnrollBtn>Register / Inquire →</EnrollBtn>
                    </NextLink>
                  </CardBottomRow>
                </WorkshopCard>
              </motion.div>
            ))}
          </WorkshopsGrid>
        </Container>
      </CatalogSection>

      {/* What We Provide Section */}
      <BenefitsSection>
        <Container>
          <HeaderWrapper>
            <OverTitle>THE SAGE DIFFERENCE</OverTitle>
            <SectionTitle>What Every Workshop Delivers</SectionTitle>
          </HeaderWrapper>

          <BenefitsGrid>
            <BenefitCard>
              <BenefitNumber>01</BenefitNumber>
              <BenefitTitle>Benchtop Hardware Access</BenefitTitle>
              <BenefitDesc>
                Direct hands-on experience using calibrated VNAs, spectrum analyzers, microstrip test fixtures, and probe stations.
              </BenefitDesc>
            </BenefitCard>

            <BenefitCard>
              <BenefitNumber>02</BenefitNumber>
              <BenefitTitle>Senior Specialist Mentorship</BenefitTitle>
              <BenefitDesc>
                Every workshop is facilitated by veteran engineers with 25+ years of industrial R&D and academic leadership.
              </BenefitDesc>
            </BenefitCard>

            <BenefitCard>
              <BenefitNumber>03</BenefitNumber>
              <BenefitTitle>Production-Ready Design Rules</BenefitTitle>
              <BenefitDesc>
                Take home proven layout rules, calibration procedures, and mathematical spreadsheets immediately applicable to your work.
              </BenefitDesc>
            </BenefitCard>

            <BenefitCard>
              <BenefitNumber>04</BenefitNumber>
              <BenefitTitle>Official Certification</BenefitTitle>
              <BenefitDesc>
                Participants receive an official Certificate of Advanced Technical Completion recognized across global engineering partners.
              </BenefitDesc>
            </BenefitCard>
          </BenefitsGrid>
        </Container>
      </BenefitsSection>

      <WaveCta
        title="Host a SAGE Workshop at Your Facility"
        subtitle="Bring our expert faculty and custom testbenches directly to your engineering team."
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

const FormatsSection = styled.section`
  padding: 6rem 0 4rem 0;
  background: var(--background);
`;

const FormatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FormatCard = styled.div<{ $highlighted?: boolean }>`
  background: var(--cardBackground);
  border: 1px solid ${(p) => (p.$highlighted ? 'var(--brandBlue)' : 'var(--lineColor)')};
  border-radius: 1.6rem;
  padding: 3.2rem 2.6rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormatBadge = styled.span<{ $accent?: boolean }>`
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: ${(p) => (p.$accent ? 'var(--primary)' : 'var(--brandBlue)')};
`;

const FormatTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text);
`;

const FormatDesc = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--mutedColor);
`;

const SpotlightSection = styled.section`
  padding: 4rem 0 6rem 0;
  background: var(--background);
`;

const SpotlightBox = styled.div`
  background: var(--cardBackground);
  border: 1px solid var(--lineColor);
  border-left: 5px solid var(--primary);
  border-radius: 2rem;
  padding: 4.8rem;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 3rem 2.2rem;
  }
`;

const SpotlightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.8rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SpotlightTag = styled.span`
  background: var(--primary);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 0.4rem 1.2rem;
  border-radius: 0.6rem;
`;

const DurationTag = styled.span`
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--brandBlue);
`;

const SpotlightTitle = styled.h2`
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

const SpotlightText = styled.p`
  font-size: 1.7rem;
  line-height: 1.7;
  color: var(--mutedColor);
  margin-bottom: 3.2rem;
`;

const ModuleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3.6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ModuleCol = styled.div`
  background: var(--secondBackground);
  border-radius: 1.2rem;
  padding: 2.2rem;
  border: 1px solid var(--lineColor);
`;

const ModNum = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.6rem;
`;

const ModTitle = styled.h4`
  font-family: var(--font-heading);
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 0.8rem;
`;

const ModText = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--mutedColor);
`;

const ActionRow = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
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

const SecondaryBtn = styled.a`
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
  }
`;

const CatalogSection = styled.section`
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

const WorkshopsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const WorkshopCard = styled.div`
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

const CardMetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

const MetaBadge = styled.span`
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--brandBlue);
`;

const LevelTag = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.3rem 0.9rem;
  border-radius: 0.4rem;
  background: rgba(0, 106, 173, 0.1);
  color: var(--brandBlue);
`;

const WSTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 2.3rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1.35;
  margin-bottom: 1.4rem;
`;

const WSDesc = styled.p`
  font-size: 1.55rem;
  line-height: 1.6;
  color: var(--mutedColor);
  margin-bottom: 2rem;
`;

const CurriculumBox = styled.div`
  background: var(--secondBackground);
  border-radius: 1rem;
  padding: 1.8rem 2rem;
  margin-bottom: 2rem;
  flex: 1;
`;

const CurriculumHeading = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--mutedColor);
  margin-bottom: 1rem;
`;

const CurriculumList = styled.ul`
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

    .bullet {
      color: var(--brandBlue);
      font-weight: 800;
    }
  }
`;

const EquipmentBox = styled.div`
  font-size: 1.35rem;
  line-height: 1.5;
  color: var(--mutedColor);
  margin-bottom: 2.4rem;
  border-left: 2px solid var(--primary);
  padding-left: 1.2rem;
`;

const CardBottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--lineColor);
  padding-top: 2rem;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

const DurationLabel = styled.span`
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text);
`;

const EnrollBtn = styled.a`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--brandBlue);
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(3px);
  }
`;

const BenefitsSection = styled.section`
  padding: 8rem 0;
  background: var(--background);
`;

const BenefitsGrid = styled.div`
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

const BenefitCard = styled.div`
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

const BenefitNumber = styled.span`
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary);
`;

const BenefitTitle = styled.h4`
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: var(--text);
`;

const BenefitDesc = styled.p`
  font-size: 1.45rem;
  line-height: 1.6;
  color: var(--mutedColor);
`;
