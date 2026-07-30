import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import { media } from 'utils/media';

export default function Hero() {
  return (
    <HeroOuterContainer>
      <TaglineBadge>
        <BadgeDot />
        Striving for excellence in providing knowledge, skills, and solutions
      </TaglineBadge>
      <HeroWrapper>
        <Contents>
          <Heading>Master the art of RF & wireless engineering.</Heading>
          <Description>
            SAGE (Shastry Associates Global Enterprises) provides expert-led training, consulting, workshops, and courses in radio frequency, microwave, applied electromagnetics, antennas, and wireless communication systems.
          </Description>
          <CustomButtonGroup>
            <NextLink href="/courses" passHref>
              <Button>
                Explore Courses <span>&rarr;</span>
              </Button>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Button transparent>
                Talk to an Expert <span>&rarr;</span>
              </Button>
            </NextLink>
          </CustomButtonGroup>
        </Contents>
        <ImageContainer>
          <HeroIllustration />
        </ImageContainer>
      </HeroWrapper>
    </HeroOuterContainer>
  );
}

const HeroOuterContainer = styled(Container)`
  padding-top: 4rem;
`;

const TaglineBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto 3.5rem auto;
  padding: 1rem 2.4rem;
  width: fit-content;
  background: rgb(var(--tertiary, 235, 246, 254));
  border: 1.5px solid rgba(53, 169, 239, 0.35);
  border-radius: 9999px;
  color: rgb(var(--brandBlue, 0, 106, 173));
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  box-shadow: 0 4px 14px rgba(53, 169, 239, 0.12);

  ${media('<=tablet')} {
    font-size: 1.1rem;
    padding: 0.8rem 1.6rem;
    text-align: center;
  }
`;

const BadgeDot = styled.span`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: rgb(var(--primary, 251, 107, 49));
  display: inline-block;
  flex-shrink: 0;
`;

const HeroWrapper = styled.div`
  display: flex;

  ${media('<=desktop')} {
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const Heading = styled.h1`
  font-size: 6.4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 3rem;
  letter-spacing: -0.03em;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 4.2rem;
    margin-bottom: 2rem;
  }
`;
