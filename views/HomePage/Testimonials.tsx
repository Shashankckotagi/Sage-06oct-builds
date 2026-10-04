import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

const TESTIMONIALS = [
  {
    content: `The advanced RF system design principles and practical circuit guidelines provided by SAGE are unparalleled in clarity and mathematical rigor.`,
    initials: 'V. S.',
  },
  {
    content: `SAGE's specialized faculty training program transformed our laboratory curriculum. The bridge from theoretical electromagnetics to microwave prototyping is exceptional.`,
    initials: 'R. K.',
  },
  {
    content: `Taking SAGE's microwave passive circuits course gave me the exact design formulas and link budget insights needed for my industrial antenna research.`,
    initials: 'E. R.',
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader>
          <Overline>Feedback & Endorsements</Overline>
        </SectionHeader>
        <Grid>
          {TESTIMONIALS.map((item, idx) => (
            <CompactCard key={idx}>
              <QuoteText>“{item.content}”</QuoteText>
              <AuthorRow>
                <InitialsAvatar>{item.initials}</InitialsAvatar>
              </AuthorRow>
            </CompactCard>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  padding: 5rem 0 6rem 0;
  background: transparent;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Overline = styled.h3`
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgb(var(--mutedColor, 100, 116, 139));

  ${media('<=tablet')} {
    font-size: 1.8rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  ${media('<=desktop')} {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }
`;

const CompactCard = styled.div`
  background: rgb(var(--secondBackground));
  border: 1px solid rgb(var(--lineColor, 226, 232, 240));
  border-radius: 0.8rem;
  padding: 2rem 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow-sm);
`;

const QuoteText = styled.p`
  font-size: 1.35rem;
  line-height: 1.55;
  font-style: italic;
  color: rgb(var(--text));
  opacity: 0.88;
  margin-bottom: 1.5rem;
`;

const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`;

const InitialsAvatar = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background: rgb(var(--brandBlue, 0, 106, 173));
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const InitialsLabel = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: rgb(var(--mutedColor, 100, 116, 139));
`;
