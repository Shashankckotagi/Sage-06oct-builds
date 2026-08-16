import styled from 'styled-components'
import { DISCIPLINES, DisciplineId } from 'sage-data'

export interface FilterPillsProps {
  activeId: DisciplineId
  onSelect: (id: DisciplineId) => void
}

export default function FilterPills({ activeId, onSelect }: FilterPillsProps) {
  return (
    <SegmentGroupRoot role="tablist" aria-label="Filter Team by Discipline">
      {DISCIPLINES.map((item) => {
        const isActive = activeId === item.id
        return (
          <SegmentItem
            key={item.id}
            role="tab"
            aria-selected={isActive}
            isActive={isActive}
            onClick={() => onSelect(item.id as DisciplineId)}
          >
            {item.label}
          </SegmentItem>
        )
      })}
    </SegmentGroupRoot>
  )
}

const SegmentGroupRoot = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem;
  background: var(--cardBackground);
  border: 1px solid var(--lineColor);
  border-radius: 9999px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);

  @media (max-width: 768px) {
    border-radius: 1.6rem;
    width: 100%;
    justify-content: center;
  }
`

const SegmentItem = styled.button<{ isActive: boolean }>`
  border: none;
  background: ${(p) => (p.isActive ? 'var(--brandBlue)' : 'transparent')};
  color: ${(p) => (p.isActive ? '#ffffff' : 'var(--mutedColor)')};
  font-family: var(--font-body);
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0.8rem 1.8rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${(p) => (p.isActive ? '#ffffff' : 'var(--text)')};
    background: ${(p) => (p.isActive ? 'var(--brandBlue)' : 'var(--tertiary)')};
  }

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
`
