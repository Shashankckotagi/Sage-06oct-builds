import React, { useState } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import Container from 'components/Container';
import PageHero from 'components/PageHero';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import WaveCta from 'components/WaveCta';
import { pageHeroes } from 'sage-data';

interface TutorialItem {
  id: string;
  title: string;
  category: string;
  level: 'Fundamentals' | 'Intermediate' | 'Advanced';
  readTime: string;
  description: string;
  keyFormulas: string[];
  takeaway: string;
}

const tutorialsData: TutorialItem[] = [
  {
    id: 't1',
    title: 'Smith Chart Navigation: Discrete Component Impedance Matching',
    category: 'RF Circuit Analysis',
    level: 'Intermediate',
    readTime: '15 min read',
    description:
      'Step-by-step guide on moving along constant resistance and conductance circles for L, Pi, and T broadband matching networks.',
    keyFormulas: ['Z_in = Z_0 (Z_L + j Z_0 tan(βl)) / (Z_0 + j Z_L tan(βl))', 'Γ = (Z_L - Z_0) / (Z_L + Z_0)'],
    takeaway: 'Learn how to transform reactive loads to 50Ω with minimal insertion loss.',
  },
  {
    id: 't2',
    title: 'Cascaded Noise Figure & Friis Formula Derivation',
    category: 'Applied Electromagnetics',
    level: 'Advanced',
    readTime: '20 min read',
    description:
      'Detailed analytical calculation of total noise figure across multi-stage receiver front-ends, LNA gain trade-offs, and mixer noise contribution.',
    keyFormulas: ['F_total = F_1 + (F_2 - 1)/G_1 + (F_3 - 1)/(G_1 G_2)', 'SNR_out = SNR_in / F'],
    takeaway: 'Master front-end receiver budget design to maximize receiver sensitivity.',
  },
  {
    id: 't3',
    title: 'Microstrip vs. Grounded Coplanar Waveguide (GCPW) Analysis',
    category: 'High-Speed Layout',
    level: 'Intermediate',
    readTime: '12 min read',
    description:
      'Comprehensive comparison of dispersion, radiation loss, dielectric losses, and via fences for microwave PCB substrates.',
    keyFormulas: ['Z_0 ≈ (60/√ε_eff) ln(8h/w + w/(4h))', 'ε_eff = (ε_r + 1)/2 + (ε_r - 1)/2 (1 + 12h/w)^(-1/2)'],
    takeaway: 'Choose the optimal transmission line geometry for frequencies up to 40 GHz.',
  },
  {
    id: 't4',
    title: 'S-Parameter Matrix Transformation & Return Loss Verification',
    category: 'RF Circuit Analysis',
    level: 'Fundamentals',
    readTime: '10 min read',
    description:
      'Interpreting 2-port and 4-port S-parameters, converting S to ABCD matrices, and verifying stability factors (K > 1, Δ < 1).',
    keyFormulas: ['RL (dB) = -20 log10 |S_11|', 'IL (dB) = -20 log10 |S_21|'],
    takeaway: 'Confidently measure and interpret VNA return loss and transmission curves.',
  },
  {
    id: 't5',
    title: 'Antenna Near-Field vs. Far-Field (Fraunhofer) Radiation',
    category: 'Antennas & Propagation',
    level: 'Intermediate',
    readTime: '18 min read',
    description:
      'Rigorous physical boundary calculation separating reactive near-field, radiating Fresnel zone, and Fraunhofer far-field region.',
    keyFormulas: ['R_far = 2 D^2 / λ', 'E_θ ∝ (e^(-jkr) / r) F(θ, φ)'],
    takeaway: 'Determine required anechoic chamber testing distance for aperture antennas.',
  },
  {
    id: 't6',
    title: 'Intermodulation Distortion (IP3, P1dB) & Linearity Budgets',
    category: 'RF Circuit Analysis',
    level: 'Advanced',
    readTime: '25 min read',
    description:
      'Harmonic generation, two-tone third-order intermodulation products (IMD3), and system-level compression point analysis.',
    keyFormulas: ['IIP3 = P_in + ΔP / 2', 'OIP3 = P_out + ΔP / 2 = IIP3 + Gain'],
    takeaway: 'Calculate spurious-free dynamic range (SFDR) for transceivers in dense RF environments.',
  },
];

const categories = ['All Topics', 'RF Circuit Analysis', 'Applied Electromagnetics', 'High-Speed Layout', 'Antennas & Propagation'];

export default function TutorialsPage() {
  const heroData = pageHeroes['/tutorials'] || pageHeroes['tutorials'];
  const [selectedCategory, setSelectedCategory] = useState('All Topics');

  const filteredTutorials =
    selectedCategory === 'All Topics'
      ? tutorialsData
      : tutorialsData.filter((t) => t.category === selectedCategory);

  return (
    <PageWrapper>
      {heroData && <PageHero {...heroData} />}

      {/* Featured Deep-Dive Guide */}
      <FeaturedSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FeaturedCard>
              <FeaturedBadgeRow>
                <FeaturedBadge>FLAGSHIP TUTORIAL</FeaturedBadge>
                <ReadBadge>25 min in-depth guide</ReadBadge>
              </FeaturedBadgeRow>
              <FeaturedTitle>
                Foundations of Applied Electromagnetics: Bridging Maxwell's Equations to Microstrip Transmission Lines
              </FeaturedTitle>
              <FeaturedDescription>
                An exhaustive engineering guide authored by SAGE senior faculty. Explores how electromagnetic boundary conditions at dielectric interfaces dictate high-frequency wave propagation, effective permittivity, phase velocity, and frequency-dependent dispersion in modern RFICs and PCB layouts.
              </FeaturedDescription>

              <FormulaBox>
                <FormulaTitle>Core Analytical Relationship:</FormulaTitle>
                <code>v_p = c / √ε_eff | λ_g = λ_0 / √ε_eff | Z_0 = √(L / C)</code>
              </FormulaBox>

              <FeaturedActionRow>
                <NextLink href="/courses" passHref>
                  <PrimaryBtn>Explore Related Course →</PrimaryBtn>
                </NextLink>
                <NextLink href="/contact" passHref>
                  <SecondaryBtn>Request Reference Notes</SecondaryBtn>
                </NextLink>
              </FeaturedActionRow>
            </FeaturedCard>
          </motion.div>
        </Container>
      </FeaturedSection>

      {/* Tutorials Catalog */}
      <CatalogSection>
        <Container>
          <HeaderWrapper>
            <OverTitle>TECHNICAL LIBRARY</OverTitle>
            <SectionTitle>Applied Engineering Guides & Derivations</SectionTitle>
            <SubText>
              Clear, practical tutorials bridging complex electromagnetic theory with physical circuit design guidelines, S-parameter analysis, and link budgets.
            </SubText>
          </HeaderWrapper>

          {/* Filter Pills */}
          <FilterPillsRow>
            {categories.map((cat) => (
              <FilterPill
                key={cat}
                $active={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </FilterPill>
            ))}
          </FilterPillsRow>

          {/* Tutorial Grid */}
          <TutorialsGrid>
            {filteredTutorials.map((tut, idx) => (
              <motion.div
                key={tut.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <TutorialCard>
                  <CardTop>
                    <CategoryTag>{tut.category}</CategoryTag>
                    <LevelBadge $level={tut.level}>{tut.level}</LevelBadge>
                  </CardTop>
                  <CardTitle>{tut.title}</CardTitle>
                  <CardDesc>{tut.description}</CardDesc>

                  <FormulaSnippet>
                    <span className="label">Key Equation:</span>
                    <code>{tut.keyFormulas[0]}</code>
                  </FormulaSnippet>

                  <TakeawayBox>
                    <strong>Takeaway:</strong> {tut.takeaway}
                  </TakeawayBox>

                  <CardFooter>
                    <ReadTime>{tut.readTime}</ReadTime>
                    <NextLink href="/courses" passHref>
                      <CardActionLink>View Course Module →</CardActionLink>
                    </NextLink>
                  </CardFooter>
                </TutorialCard>
              </motion.div>
            ))}
          </TutorialsGrid>
        </Container>
      </CatalogSection>

      {/* Practical Reference Tables Section */}
      <CheatsheetSection>
        <Container>
          <HeaderWrapper>
            <OverTitle>QUICK REFERENCE</OverTitle>
            <SectionTitle>RF & Microwave Reference Equations</SectionTitle>
          </HeaderWrapper>

          <TableWrapper>
            <StyledTable>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Formula</th>
                  <th>Description / Application</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Free-Space Wavelength</strong></td>
                  <td><code>λ_0 = c / f</code></td>
                  <td>Fundamental wavelength calculation in air / vacuum</td>
                </tr>
                <tr>
                  <td><strong>Skin Depth (δ)</strong></td>
                  <td><code>δ = √(1 / (π f μ σ))</code></td>
                  <td>RF current penetration depth in copper conductors</td>
                </tr>
                <tr>
                  <td><strong>VSWR to Return Loss</strong></td>
                  <td><code>RL = -20 log10((VSWR - 1)/(VSWR + 1))</code></td>
                  <td>Relationship between reflection coefficient and VSWR</td>
                </tr>
                <tr>
                  <td><strong>Friis Transmission</strong></td>
                  <td><code>P_r = P_t G_t G_r (λ / (4π R))^2</code></td>
                  <td>Line-of-sight wireless link power budget</td>
                </tr>
              </tbody>
            </StyledTable>
          </TableWrapper>
        </Container>
      </CheatsheetSection>

      <WaveCta
        title="Ready to Deepen Your RF Expertise?"
        subtitle="Explore our comprehensive instructor-led courses or request a customized corporate training session."
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

const FeaturedSection = styled.section`
  padding: 6rem 0 4rem 0;
  background: var(--background);
`;

const FeaturedCard = styled.div`
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

const FeaturedBadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FeaturedBadge = styled.span`
  background: var(--brandBlue);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 0.4rem 1.2rem;
  border-radius: 0.6rem;
`;

const ReadBadge = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--mutedColor);
`;

const FeaturedTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1.3;
  margin-bottom: 1.8rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const FeaturedDescription = styled.p`
  font-size: 1.7rem;
  line-height: 1.7;
  color: var(--mutedColor);
  margin-bottom: 2.4rem;
`;

const FormulaBox = styled.div`
  background: var(--secondBackground);
  border: 1px dashed var(--lineColor);
  border-radius: 1.2rem;
  padding: 1.8rem 2.4rem;
  margin-bottom: 3rem;

  code {
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--brandBlue);
  }
`;

const FormulaTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--mutedColor);
  margin-bottom: 0.8rem;
`;

const FeaturedActionRow = styled.div`
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
  background: var(--brandBlue);
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #005286;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 106, 173, 0.3);
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
  margin-bottom: 4rem;
`;

const SubText = styled.p`
  font-size: 1.7rem;
  line-height: 1.6;
  color: var(--mutedColor);
  margin-top: 1.2rem;
`;

const FilterPillsRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`;

const FilterPill = styled.button<{ $active: boolean }>`
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0.8rem 1.8rem;
  border-radius: 2rem;
  cursor: pointer;
  border: 1px solid ${(p) => (p.$active ? 'var(--brandBlue)' : 'var(--lineColor)')};
  background: ${(p) => (p.$active ? 'var(--brandBlue)' : 'var(--cardBackground)')};
  color: ${(p) => (p.$active ? '#ffffff' : 'var(--text)')};
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--brandBlue);
  }
`;

const TutorialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TutorialCard = styled.div`
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

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

const CategoryTag = styled.span`
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--brandBlue);
`;

const LevelBadge = styled.span<{ $level: string }>`
  font-size: 1.15rem;
  font-weight: 700;
  padding: 0.3rem 0.9rem;
  border-radius: 0.4rem;
  background: ${(p) =>
    p.$level === 'Advanced'
      ? 'rgba(251, 107, 49, 0.12)'
      : p.$level === 'Intermediate'
      ? 'rgba(0, 106, 173, 0.1)'
      : 'rgba(22, 163, 74, 0.1)'};
  color: ${(p) =>
    p.$level === 'Advanced'
      ? 'var(--primary)'
      : p.$level === 'Intermediate'
      ? 'var(--brandBlue)'
      : '#16A34A'};
`;

const CardTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1.35;
  margin-bottom: 1.4rem;
`;

const CardDesc = styled.p`
  font-size: 1.55rem;
  line-height: 1.6;
  color: var(--mutedColor);
  margin-bottom: 2rem;
  flex: 1;
`;

const FormulaSnippet = styled.div`
  background: var(--secondBackground);
  border-radius: 0.8rem;
  padding: 1.2rem 1.6rem;
  margin-bottom: 1.6rem;
  font-size: 1.35rem;

  .label {
    display: block;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--mutedColor);
    margin-bottom: 0.4rem;
  }

  code {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
    color: var(--brandBlue);
  }
`;

const TakeawayBox = styled.div`
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--text);
  margin-bottom: 2.4rem;
  padding-left: 1.2rem;
  border-left: 2px solid var(--primary);
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--lineColor);
  padding-top: 1.8rem;
`;

const ReadTime = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--mutedColor);
`;

const CardActionLink = styled.a`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--brandBlue);
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(3px);
  }
`;

const CheatsheetSection = styled.section`
  padding: 8rem 0;
  background: var(--background);
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  background: var(--cardBackground);
  border: 1px solid var(--lineColor);
  border-radius: 1.6rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 1.5rem;

  th {
    background: var(--secondBackground);
    padding: 1.8rem 2.4rem;
    font-weight: 800;
    color: var(--text);
    border-bottom: 1px solid var(--lineColor);
  }

  td {
    padding: 1.8rem 2.4rem;
    border-bottom: 1px solid var(--lineColor);
    color: var(--text);

    code {
      font-family: 'Courier New', Courier, monospace;
      font-weight: 700;
      color: var(--brandBlue);
      background: var(--secondBackground);
      padding: 0.4rem 0.8rem;
      border-radius: 0.4rem;
    }
  }

  tr:last-child td {
    border-bottom: none;
  }
`;
