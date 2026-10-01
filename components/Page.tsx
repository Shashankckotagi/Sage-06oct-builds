import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import SEOHead, { SEOHeadProps } from 'components/SEOHead';
import { media } from 'utils/media';
import Container from './Container';
import SectionTitle from './SectionTitle';

export interface PageProps extends Partial<SEOHeadProps> {
  title: string;
  description?: string;
  hasHeader?: boolean;
}

export default function Page({
  title,
  description,
  canonicalPath,
  ogImage,
  ogType,
  jsonLd,
  noIndex,
  hasHeader = false,
  children,
}: PropsWithChildren<PageProps>) {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        ogImage={ogImage}
        ogType={ogType}
        jsonLd={jsonLd}
        noIndex={noIndex}
      />
      <Wrapper>
        {hasHeader && (
          <HeaderContainer>
            <Container>
              <Title>{title}</Title>
              {description && <Description>{description}</Description>}
            </Container>
          </HeaderContainer>
        )}
        {children}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background: rgb(var(--background));
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(var(--secondary));
  min-height: 40rem;
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 2rem;
`;

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
  text-align: center;
  max-width: 60%;
  margin: auto;

  ${media('<=tablet')} {
    max-width: 100%;
  }
`;

const ChildrenWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
`;
