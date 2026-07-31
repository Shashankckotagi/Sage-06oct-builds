import NextImage from 'next/image';
import styled from 'styled-components';

export default function Logo({ ...rest }) {
  return (
    <LogoWrapper {...rest}>
      <IconContainer>
        <NextImage
          src="/Shastryhexagon(Orange).png"
          alt="SAGE Hexagon Emblem"
          width={50}
          height={50}
          objectFit="contain"
          priority
        />
      </IconContainer>
      <TextGroup>
        <NextImage
          src="/sage-text.png"
          alt="Shastry Associates Global Enterprises (SAGE)"
          width={110}
          height={28}
          objectFit="contain"
          priority
        />
        <SubText>Shastry Associates Global Enterprises</SubText>
      </TextGroup>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
  user-select: none;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const SubText = styled.span`
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: rgb(var(--brandBlue, 0, 106, 173));
  margin-top: 0.2rem;
  text-transform: uppercase;
  white-space: nowrap;
`;

