import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

const STATS = [
  { value: '35+', label: 'Years of Combined Experience' },
  { value: '20+', label: 'Global Associates: Professionals & Faculty' },
  { value: '5', label: 'Workshops & Events to Date' },
];

export default function StatsBar() {
  return (
    <StatsWrapper>
      <StatsContainer>
        {STATS.map((stat) => (
          <StatItem key={stat.label}>
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
          </StatItem>
        ))}
      </StatsContainer>
    </StatsWrapper>
  );
}

const StatsWrapper = styled.div`
  background: rgb(var(--tertiary, 235, 246, 254));
  border-top: 1px solid rgb(var(--lineColor, 226, 232, 240));
  border-bottom: 1px solid rgb(var(--lineColor, 226, 232, 240));
  padding: 3rem 0;
  margin-top: 2rem;
`;

const StatsContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StatValue = styled.span`
  font-family: var(--font-heading);
  font-size: 4.8rem;
  font-weight: 800;
  color: rgb(var(--brandBlue, 0, 106, 173));
  line-height: 1;
  margin-bottom: 0.8rem;
`;

const StatLabel = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: rgb(var(--mutedColor, 100, 116, 139));
  text-transform: uppercase;
  letter-spacing: 0.05em;

  ${media('<=tablet')} {
    font-size: 1.2rem;
  }
`;
