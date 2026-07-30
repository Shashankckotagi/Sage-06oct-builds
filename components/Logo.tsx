import styled from 'styled-components';

export default function Logo({ ...rest }) {
  return (
    <LogoWrapper {...rest}>
      <LogoMark>
        SAGE<Dot>.</Dot>
      </LogoMark>
      <SubText>Shastry Associates Global Enterprises</SubText>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  user-select: none;
`;

const LogoMark = styled.span`
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 2.6rem;
  letter-spacing: -0.03em;
  color: rgb(var(--brandBlue, 0, 106, 173));
  line-height: 1;
`;

const Dot = styled.span`
  color: rgb(var(--primary, 251, 107, 49));
`;

const SubText = styled.span`
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: rgb(var(--skyBlue, 53, 169, 239));
  margin-top: 0.2rem;
  text-transform: uppercase;
`;

