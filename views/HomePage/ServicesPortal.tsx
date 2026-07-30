import NextLink from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

interface ServiceTab {
  id: string;
  title: string;
  badge: string;
  icon: string;
  headline: string;
  description: string;
  highlights: string[];
  formats: string[];
  ctaText: string;
  ctaLink: string;
  imageBg: string;
  accentColor: string;
}

const SERVICE_TABS: ServiceTab[] = [
  {
    id: 'courses',
    title: 'Courses',
    badge: 'Educational Programs',
    icon: '📚',
    headline: 'Structured Engineering Courses from Fundamentals to Advanced Design',
    description:
      'Rigorous, self-paced and instructor-led courses covering RF circuit design, microwave passive networks, 5G wireless architectures, and antenna theory.',
    highlights: [
      'Comprehensive curriculum with real-world circuit formulas',
      'Hands-on design exercises and prototype guidelines',
      'Certificate of completion from SAGE senior faculty',
    ],
    formats: ['Online Self-Paced', 'Live Online Seminars', 'Campus Sessions'],
    ctaText: 'Explore All Courses',
    ctaLink: '/courses',
    imageBg: 'linear-gradient(135deg, #006AAD 0%, #35A9EF 100%)',
    accentColor: '#FB6B31',
  },
  {
    id: 'tutorials',
    title: 'Tutorials',
    badge: 'Applied Guides',
    icon: '📖',
    headline: 'In-Depth Technical Tutorials & Mathematical Insights',
    description:
      'Clear, practical tutorials bridging complex electromagnetic theory with physical circuit design guidelines, S-parameter analysis, and link budgets.',
    highlights: [
      'Step-by-step mathematical derivations & design rules',
      'Applied electromagnetics & impedance matching guides',
      'Downloadable design tables and calculation cheatsheets',
    ],
    formats: ['Web Tutorials', 'PDF Reference Guides', 'Video Demonstrations'],
    ctaText: 'Browse Tutorials',
    ctaLink: '/courses#tutorials',
    imageBg: 'linear-gradient(135deg, #0F172A 0%, #006AAD 100%)',
    accentColor: '#35A9EF',
  },
  {
    id: 'training',
    title: 'Training',
    badge: 'Professional Upskilling',
    icon: '🎓',
    headline: 'Customized Training Programs for Industry Teams & Faculty',
    description:
      'Targeted professional development programs designed for corporate R&D teams, engineering organizations, and university faculty looking to upgrade their skills.',
    highlights: [
      'Tailored curriculum mapped to your team engineering goals',
      'Flexible scheduling: on-site, off-site, or live online',
      'Direct interaction with veteran RF industry associates',
    ],
    formats: ['Corporate On-Site', 'Off-Site Retreats', 'Virtual Bootcamps'],
    ctaText: 'Request Training Info',
    ctaLink: '/services#training',
    imageBg: 'linear-gradient(135deg, #006AAD 0%, #1E293B 100%)',
    accentColor: '#FB6B31',
  },
  {
    id: 'consulting',
    title: 'Consulting',
    badge: 'Expert Advisory',
    icon: '💼',
    headline: 'Specialized RF, Microwave & Wireless System Consulting',
    description:
      'Direct consulting engagements with Dr. S.N. Prasad and senior SAGE associates to solve critical electromagnetic design challenges and optimize system performance.',
    highlights: [
      'Antenna array optimization & beamforming consulting',
      'RF transceiver architecture review & troubleshooting',
      'Electromagnetic compatibility (EMC) & signal integrity',
    ],
    formats: ['Direct Retainer', 'Project-Based Advisory', 'Design Audits'],
    ctaText: 'Schedule Consultation',
    ctaLink: '/contact',
    imageBg: 'linear-gradient(135deg, #15803D 0%, #006AAD 100%)',
    accentColor: '#FB6B31',
  },
  {
    id: 'workshops',
    title: 'Workshops',
    badge: 'Interactive Seminars',
    icon: '🛠️',
    headline: 'Hands-On Technical Workshops & Interactive Seminars',
    description:
      'Intensive 1-day to 3-day technical workshops focusing on specialized topics in mmWave circuits, 5G wireless deployment, and microwave component measurement.',
    highlights: [
      'Interactive problem-solving & prototype design labs',
      'Guest lectures by international faculty & industry leaders',
      'Networking with fellow wireless & microwave engineers',
    ],
    formats: ['On-Site Workshops', 'IEEE Conference Sessions', 'Webinars'],
    ctaText: 'View Workshops',
    ctaLink: '/services#workshops',
    imageBg: 'linear-gradient(135deg, #0369A1 0%, #35A9EF 100%)',
    accentColor: '#FB6B31',
  },
  {
    id: 'news',
    title: 'News',
    badge: 'Research & Industry Updates',
    icon: '📰',
    headline: 'Latest SAGE Announcements, Research Insights & Publications',
    description:
      'Stay informed with technical articles, research publications, industry trends, and institutional announcements from the SAGE global network.',
    highlights: [
      'Peer-reviewed insights & IEEE publication summaries',
      'Industry trend analysis in 5G, 6G, and satellite RF',
      'SAGE global associate news and milestone updates',
    ],
    formats: ['Editorial Articles', 'Research Papers', 'Quarterly Digest'],
    ctaText: 'Read Latest News',
    ctaLink: '/blog',
    imageBg: 'linear-gradient(135deg, #334155 0%, #006AAD 100%)',
    accentColor: '#35A9EF',
  },
  {
    id: 'events',
    title: 'Upcoming Events',
    badge: 'Global Schedule',
    icon: '📅',
    headline: 'Upcoming Webinars, IEEE Keynotes & Academic Conferences',
    description:
      'Explore upcoming international keynote addresses, conference presentations, IEEE chapter meetings, and virtual Q&A sessions hosted by SAGE.',
    highlights: [
      'Live Q&A sessions with senior RF & wireless experts',
      'Keynote addresses at international IEEE symposia',
      'Free informational webinars for engineering students',
    ],
    formats: ['IEEE Symposia', 'Global Webinars', 'Academic Panels'],
    ctaText: 'Check Event Calendar',
    ctaLink: '/contact#events',
    imageBg: 'linear-gradient(135deg, #006AAD 0%, #0284C7 100%)',
    accentColor: '#FB6B31',
  },
];

export default function ServicesPortal() {
  const [activeTab, setActiveTab] = useState<ServiceTab>(SERVICE_TABS[0]);

  return (
    <SectionWrapper>
      <Container>
        <HeaderContainer>
          <OverTitle>SAGE Ecosystem</OverTitle>
          <Title>Services & Specialized Offerings</Title>
          <LeadText>
            Select a discipline to explore tailored learning, specialized consulting, workshops, and industry insights.
          </LeadText>
        </HeaderContainer>

        {/* Tab Selector Pills */}
        <TabPillsRow>
          {SERVICE_TABS.map((tab) => {
            const isActive = tab.id === activeTab.id;
            return (
              <PillButton
                key={tab.id}
                isActive={isActive}
                onClick={() => setActiveTab(tab)}
              >
                <PillIcon>{tab.icon}</PillIcon>
                <span>{tab.title}</span>
                {isActive && <ActiveIndicator />}
              </PillButton>
            );
          })}
        </TabPillsRow>

        {/* Split View Content Portal */}
        <PortalContainer>
          {/* Left Info Panel */}
          <InfoPanel>
            <BadgeRow>
              <BadgeTag>{activeTab.badge}</BadgeTag>
              <FormatsText>{activeTab.formats.join(' • ')}</FormatsText>
            </BadgeRow>

            <Headline>{activeTab.headline}</Headline>
            <Description>{activeTab.description}</Description>

            <HighlightsList>
              {activeTab.highlights.map((item, idx) => (
                <HighlightItem key={idx}>
                  <CheckIcon>✓</CheckIcon>
                  <span>{item}</span>
                </HighlightItem>
              ))}
            </HighlightsList>

            <CtaButtonRow>
              <NextLink href={activeTab.ctaLink} passHref>
                <Button>
                  {activeTab.ctaText} <span>&rarr;</span>
                </Button>
              </NextLink>
            </CtaButtonRow>
          </InfoPanel>

          {/* Right Visual Card Panel */}
          <VisualCardPanel bgGradient={activeTab.imageBg}>
            <CardHeaderOverlay>
              <BrandMark>SAGE.</BrandMark>
              <CategoryBadge>{activeTab.title}</CategoryBadge>
            </CardHeaderOverlay>

            <AccentDivider style={{ background: activeTab.accentColor }} />

            <CardBodyContent>
              <IconDisplay>{activeTab.icon}</IconDisplay>
              <CardTitle>{activeTab.headline}</CardTitle>
              <FormatPillsRow>
                {activeTab.formats.map((fmt) => (
                  <FormatChip key={fmt}>{fmt}</FormatChip>
                ))}
              </FormatPillsRow>
            </CardBodyContent>
          </VisualCardPanel>
        </PortalContainer>
      </Container>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  padding: 8rem 0;
`;

const HeaderContainer = styled.div`
  text-align: center;
  max-width: 75rem;
  margin: 0 auto 5rem auto;
`;

const Title = styled(SectionTitle)`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;

const LeadText = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: rgb(var(--mutedColor, 100, 116, 139));
`;

const TabPillsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 5rem;
`;

const PillButton = styled.button<{ isActive: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.2rem;
  border-radius: 9999px;
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background: ${(p) => (p.isActive ? 'rgb(var(--brandBlue, 0, 106, 173))' : 'rgb(var(--cardBackground))')};
  color: ${(p) => (p.isActive ? '#FFFFFF' : 'rgb(var(--brandBlue, 0, 106, 173))')};
  border: 1.5px solid ${(p) => (p.isActive ? 'rgb(var(--brandBlue, 0, 106, 173))' : 'rgb(var(--lineColor, 226, 232, 240))')};
  box-shadow: ${(p) => (p.isActive ? '0 8px 20px -4px rgba(0, 106, 173, 0.3)' : 'var(--shadow-sm)')};

  &:hover {
    transform: translateY(-2px);
    border-color: rgb(var(--skyBlue, 53, 169, 239));
  }
`;

const PillIcon = styled.span`
  font-size: 1.6rem;
`;

const ActiveIndicator = styled.span`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 1.2rem;
  height: 0.4rem;
  background: rgb(var(--primary, 251, 107, 49));
  border-radius: 9999px;
`;

const PortalContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  background: rgb(var(--cardBackground));
  border: 1px solid rgb(var(--lineColor, 226, 232, 240));
  border-radius: 1.6rem;
  padding: 4.5rem;
  box-shadow: var(--shadow-md);

  ${media('<=desktop')} {
    grid-template-columns: 1fr;
    padding: 3rem;
  }
`;

const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const BadgeTag = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.4rem 1.2rem;
  border-radius: 9999px;
  background: rgb(var(--tertiary, 235, 246, 254));
  color: rgb(var(--brandBlue, 0, 106, 173));
`;

const FormatsText = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: rgb(var(--mutedColor, 100, 116, 139));
`;

const Headline = styled.h3`
  font-family: var(--font-heading);
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 1.8rem;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: rgb(var(--mutedColor, 100, 116, 139));
  margin-bottom: 2.5rem;
`;

const HighlightsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 3.5rem;
`;

const HighlightItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: rgb(var(--text));
`;

const CheckIcon = styled.span`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: rgba(53, 169, 239, 0.15);
  color: rgb(var(--skyBlue, 53, 169, 239));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const CtaButtonRow = styled.div`
  margin-top: auto;
`;

const VisualCardPanel = styled.div<{ bgGradient: string }>`
  background: ${(p) => p.bgGradient};
  border-radius: 1.2rem;
  padding: 3.5rem;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 38rem;
  box-shadow: 0 12px 30px -5px rgba(0, 106, 173, 0.25);

  ${media('<=desktop')} {
    min-height: 30rem;
  }
`;

const CardHeaderOverlay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandMark = styled.span`
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 2.4rem;
  letter-spacing: -0.02em;
  color: #FFFFFF;
`;

const CategoryBadge = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.4rem 1.2rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
`;

const AccentDivider = styled.div`
  height: 4px;
  width: 6rem;
  border-radius: 9999px;
  margin: 2rem 0;
`;

const CardBodyContent = styled.div`
  margin-top: auto;
`;

const IconDisplay = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h4`
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 2rem;
`;

const FormatPillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const FormatChip = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 0.6rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
`;
