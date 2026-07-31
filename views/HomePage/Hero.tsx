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
  padding-top: 1.5rem;
  padding-bottom: 3rem;

  ${media('<=desktop')} {
    min-height: calc(100vh - 8rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const TaglineBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto 1.5rem auto;
  padding: 0.8rem 2rem;
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
    font-size: 1.05rem;
    padding: 0.6rem 1.4rem;
    text-align: center;
    margin-bottom: 1.2rem;
  }

  ${media('<=phone')} {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    gap: 0.6rem;
    letter-spacing: 0.03em;
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
  align-items: center;
  width: 100%;

  ${media('<=desktop')} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 52rem;

  ${media('<=desktop')} {
    max-width: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 2.5rem;

  ${media('<=desktop')} {
    margin-top: 2.5rem;
    justify-content: center;
  }

  ${media('<=tablet')} {
    margin-top: 2rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1.3;
  justify-content: flex-end;
  align-items: center;

  svg {
    max-width: 72rem;
    width: 100%;
    height: auto;
  }

  ${media('<=desktop')} {
    display: none;
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
