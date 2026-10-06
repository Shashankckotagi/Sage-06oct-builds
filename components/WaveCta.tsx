import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function WaveCta() {
  return (
    <>
      <WaveSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" preserveAspectRatio="none">
        <path
          fill="rgb(var(--secondary))"
          fillOpacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,160,960,150C1120,140,1280,80,1360,40L1440,0L1440,220L1360,220C1280,220,1120,220,960,220C800,220,640,220,480,220C320,220,160,220,80,220L0,220Z"
        ></path>
      </WaveSvg>
      <CtaWrapper>
        <Container>
          <Title>Your next step into the wireless world starts here with SAGE.</Title>
          <CustomButtonGroup>
            <NextLink href="/courses" passHref>
              <Button>
                Explore Courses <span>&rarr;</span>
              </Button>
            </NextLink>
            <NextLink href="/events" passHref>
              <OutlinedButton transparent>
                Explore Events <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>
          </CustomButtonGroup>
        </Container>
      </CtaWrapper>
    </>
  );
}

const WaveSvg = styled.svg`
  display: block;
  width: 100%;
  height: 140px;

  ${media('<=tablet')} {
    height: 90px;
  }
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
  margin-top: -1rem;
  padding-bottom: 5rem;

  ${media('<=tablet')} {
    padding-top: 2rem;
    padding-bottom: 3.5rem;
  }
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 3rem;
`;

const OutlinedButton = styled(Button)`
  border: 1.5px solid rgb(var(--skyBlue, 53, 169, 239));
  color: #FFFFFF;
  background: rgba(53, 169, 239, 0.12);

  &:hover {
    background: rgb(var(--skyBlue, 53, 169, 239));
    border-color: rgb(var(--skyBlue, 53, 169, 239));
    color: #FFFFFF;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  justify-content: center;
`;
