import Head from 'next/head';
import Page from 'components/Page';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const Wrapper = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0a0a1a 0%, #0d1b3e 50%, #0a0a1a 100%);
`;

const Card = styled.div`
  text-align: center;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 4rem 3rem;
  backdrop-filter: blur(12px);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.4);
`;

const Icon = styled.div`
  font-size: 5rem;
  margin-bottom: 1.5rem;
  animation: ${float} 3s ease-in-out infinite;
  display: block;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff, #a0b4e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Badge = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.35rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.5rem;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.8;
  margin: 0;
`;

const Divider = styled.div`
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 999px;
  margin: 1.75rem auto;
`;

const Thanks = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 1.5rem;
  font-style: italic;
`;

export default function CoursesRoute() {
  return (
    <Page
      title="Courses"
      description="Our Courses page is currently under construction. Check back soon for expert-led RF & wireless engineering courses from SAGE."
    >
      <Head>
        <title>Courses | SAGE — Shastry Associates Global Enterprises</title>
        <meta
          name="description"
          content="Our Courses page is currently under construction. Check back soon for expert-led RF & wireless engineering courses from SAGE."
        />
        <link rel="canonical" href="https://shastryassociates.com/courses" />
      </Head>

      <Wrapper>
        <Card>
          <Icon>🚧</Icon>
          <Badge>Under Construction</Badge>
          <Title>Courses — Coming Soon</Title>
          <Divider />
          <Description>
            We&apos;re working hard to bring you comprehensive, expert-led courses in RF system design,
            microwave engineering, 5G wireless architectures, and antenna theory.
            This page is currently under construction.
          </Description>
          <Thanks>Thank you for your patience. Check back soon! 🙏</Thanks>
        </Card>
      </Wrapper>
    </Page>
  );
}

export async function getStaticProps() {
  return {
    props: {
      hideDefaultWaveCta: true,
    },
  };
}
