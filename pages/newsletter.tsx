import React from 'react';
import styled from 'styled-components';
import Page from 'components/Page';
import PageHero from 'components/PageHero';
import Container from 'components/Container';
import AutofitGrid from 'components/AutofitGrid';
import { getNewsletters, NewsletterIssue } from 'data/newsletters.data';
import { Calendar, FileText, ArrowRight } from 'lucide-react';
import NextLink from 'next/link';
import { media } from 'utils/media';

export default function NewsletterPage() {
  const newsletters = getNewsletters();

  return (
    <Page title="SAGE Newsletters & Digests | Shastry Associates Global Enterprises">
      <PageHero
        title="Newsletters & Digests"
        eyebrow="Published Archives & Technical Insights"
        description="Explore our published editions of SAGE Technical Digest covering applied RF engineering, microwave circuit design, antennas, and wireless systems."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Newsletter', href: '/newsletter' },
        ]}
        imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
      />

      <SectionContainer>
        <HeaderGroup>
          <SectionEyebrow>Published Archive</SectionEyebrow>
          <SectionTitle>SAGE Technical Digest Issues</SectionTitle>
          <SectionSubtitle>
            Read through our released newsletter editions, curated articles, and engineering research breakdowns.
          </SectionSubtitle>
        </HeaderGroup>

        <NewsletterGrid>
          {newsletters.map((issue: NewsletterIssue) => (
            <IssueCard key={issue.id}>
              <CardImageWrapper>
                <CardImage src={issue.image} alt={issue.title} loading="lazy" />
                <EditionBadge>{issue.edition}</EditionBadge>
              </CardImageWrapper>
              <CardBody>
                <TagRow>
                  {issue.tags.map((tag, idx) => (
                    <TagPill key={idx}>{tag}</TagPill>
                  ))}
                </TagRow>
                <DateBadge>
                  <Calendar size={13} />
                  <span>{issue.date}</span>
                </DateBadge>
                <IssueTitle>{issue.title}</IssueTitle>
                <IssueSummary>{issue.summary}</IssueSummary>
              </CardBody>
              <CardFooter>
                <ReadTime>
                  <FileText size={14} />
                  <span>{issue.readTime}</span>
                </ReadTime>
                {issue.pdfUrl && (
                  <NextLink href={issue.pdfUrl} passHref>
                    <ReadButton>
                      Read Issue <ArrowRight size={14} />
                    </ReadButton>
                  </NextLink>
                )}
              </CardFooter>
            </IssueCard>
          ))}
        </NewsletterGrid>
      </SectionContainer>
    </Page>
  );
}

const SectionContainer = styled(Container)`
  padding-top: 5rem;
  padding-bottom: 8rem;
`;

const HeaderGroup = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionEyebrow = styled.span`
  color: rgb(var(--brandBlue));
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 3.4rem;
  font-weight: 800;
  color: rgb(var(--text));
  margin-top: 0.6rem;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.6rem;
  color: rgb(var(--mutedColor));
  max-width: 60rem;
  margin: 0 auto;
`;

const NewsletterGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 34rem;
  gap: 3rem;
`;

const IssueCard = styled.div`
  background: rgb(var(--cardBackground));
  border: 1px solid rgb(var(--lineColor));
  border-radius: 1.6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.1);
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 18rem;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${IssueCard}:hover & {
    transform: scale(1.04);
  }
`;

const EditionBadge = styled.span`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: rgb(var(--primary));
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.4rem 1rem;
  border-radius: 0.6rem;
  text-transform: uppercase;
`;

const CardBody = styled.div`
  padding: 2.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
`;

const TagPill = styled.span`
  background: rgb(var(--tertiary));
  color: rgb(var(--brandBlue));
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 0.4rem;
  text-transform: uppercase;
`;

const DateBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  color: rgb(var(--mutedColor));
  margin-bottom: 0.8rem;
`;

const IssueTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: rgb(var(--text));
  line-height: 1.3;
  margin-bottom: 1rem;
`;

const IssueSummary = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: rgb(var(--textSecondary));
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2.2rem;
  border-top: 1px solid rgb(var(--lineColor));
  background: rgba(var(--tertiary), 0.3);
`;

const ReadTime = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  color: rgb(var(--mutedColor));
`;

const ReadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: rgb(var(--brandBlue));
  font-weight: 700;
  font-size: 1.4rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: rgb(var(--primary));
  }
`;
