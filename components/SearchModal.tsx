import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { SearchResultItem } from 'pages/api/search';

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Global keydown shortcut: Ctrl+K or Cmd+K or trigger event
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }

    function handleCustomOpen() {
      setIsOpen(true);
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-search-modal', handleCustomOpen);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-search-modal', handleCustomOpen);
    };
  }, [isOpen]);

  // Focus input & lock body scroll when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Fetch search results debounced
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(query.trim())}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.results) {
            setResults(data.results);
          }
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  // Close modal on router change
  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  if (!isOpen) {
    return (
      <SearchTriggerButton onClick={() => setIsOpen(true)} title="Search site (Ctrl+K)" aria-label="Search website">
        <SearchIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </SearchIcon>
      </SearchTriggerButton>
    );
  }

  return (
    <>
      <SearchTriggerButton onClick={() => setIsOpen(true)} title="Search site (Ctrl+K)" aria-label="Search website">
        <SearchIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </SearchIcon>
      </SearchTriggerButton>

      <Overlay onClick={() => setIsOpen(false)}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <SearchHeader>
            <HeaderSearchIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </HeaderSearchIcon>
            <SearchInput
              ref={inputRef}
              type="text"
              placeholder="Search courses, team members, topics, newsletters..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <ClearButton onClick={() => setQuery('')} aria-label="Clear query">
                &times;
              </ClearButton>
            )}
            <KbdBadge>ESC</KbdBadge>
            <CloseModalButton onClick={() => setIsOpen(false)} title="Close search" aria-label="Close modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </CloseModalButton>
          </SearchHeader>

          <ResultsContainer>
            {loading && <StatusMessage>Searching database...</StatusMessage>}

            {!loading && query && results.length === 0 && (
              <StatusMessage>
                No results found for <strong>&quot;{query}&quot;</strong>. Try searching for &quot;RF&quot;, &quot;5G&quot;, &quot;Prasad&quot;, or &quot;Antennas&quot;.
              </StatusMessage>
            )}

            {!loading && !query && (
              <QuickSuggestions>
                <SuggestionTitle>Popular Searches</SuggestionTitle>
                <ChipGroup>
                  {['5G Wireless', 'RF System Design', 'Dr. Prasad Shastry', 'Phased Arrays', 'Antennas'].map((term) => (
                    <Chip key={term} onClick={() => setQuery(term)}>
                      {term}
                    </Chip>
                  ))}
                </ChipGroup>
              </QuickSuggestions>
            )}

            {!loading && results.length > 0 && (
              <ResultsList>
                {results.map((item) => (
                  <NextLink key={item.id} href={item.url} passHref>
                    <ResultItemLink onClick={() => setIsOpen(false)}>
                      <BadgeType $type={item.type}>{item.type.toUpperCase()}</BadgeType>
                      <ItemDetails>
                        <ItemTitle>{item.title}</ItemTitle>
                        {item.subtitle && <ItemSubtitle>{item.subtitle}</ItemSubtitle>}
                        <ItemDescription>{item.description}</ItemDescription>
                      </ItemDetails>
                      <ArrowIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </ArrowIcon>
                    </ResultItemLink>
                  </NextLink>
                ))}
              </ResultsList>
            )}
          </ResultsContainer>
        </ModalContainer>
      </Overlay>
    </>
  );
}

const SearchTriggerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-left: 0.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.28);
    transform: scale(1.06);
    border-color: #ffffff;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.3);
  }
`;

const SearchIcon = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  color: #ffffff;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 18, 30, 0.78);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 12vh;
  animation: fadeIn 0.2s ease-out;
  cursor: pointer;

  @keyframes fadeIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(16px);
    }
  }
`;

const ModalContainer = styled.div`
  width: 90%;
  max-width: 65rem;
  background: #ffffff;
  border-radius: 1.2rem;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  border: 1px solid rgba(226, 232, 240, 0.8);
  animation: slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: default;

  html[data-theme='dark'] & {
    background: #0f172a;
    border-color: rgba(51, 65, 85, 0.8);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.85);
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-16px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.8rem;
  border-bottom: 1px solid #e2e8f0;

  html[data-theme='dark'] & {
    border-bottom-color: #1e293b;
  }
`;

const HeaderSearchIcon = styled.svg`
  width: 2.2rem;
  height: 2.2rem;
  color: #006aad;
  margin-right: 1.2rem;
  flex-shrink: 0;

  html[data-theme='dark'] & {
    color: #38bdf8;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 1.6rem;
  font-family: inherit;
  color: #0f172a;
  outline: none;

  html[data-theme='dark'] & {
    color: #f8fafc;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const ClearButton = styled.button`
  background: transparent;
  border: none;
  font-size: 2.2rem;
  color: #94a3b8;
  cursor: pointer;
  padding: 0 0.8rem;
  line-height: 1;

  &:hover {
    color: #0f172a;
    html[data-theme='dark'] & {
      color: #ffffff;
    }
  }
`;

const KbdBadge = styled.span`
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 0.4rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: #64748b;
  padding: 0.3rem 0.6rem;
  margin-right: 0.8rem;

  html[data-theme='dark'] & {
    background: #1e293b;
    border-color: #334155;
    color: #94a3b8;
  }
`;

const CloseModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 0.4rem;
  transition: all 0.15s ease;

  &:hover {
    background: #f1f5f9;
    color: #0f172a;

    html[data-theme='dark'] & {
      background: #1e293b;
      color: #ffffff;
    }
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const ResultsContainer = styled.div`
  max-height: 420px;
  overflow-y: auto;
  padding: 1.2rem;
`;

const StatusMessage = styled.div`
  padding: 2.5rem;
  text-align: center;
  font-size: 1.4rem;
  color: #64748b;

  html[data-theme='dark'] & {
    color: #94a3b8;
  }
`;

const QuickSuggestions = styled.div`
  padding: 1rem 1.2rem;
`;

const SuggestionTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
  margin-bottom: 1rem;
`;

const ChipGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const Chip = styled.button`
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 9999px;
  padding: 0.6rem 1.4rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: #006aad;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: #006aad;
    color: #ffffff;
    border-color: #006aad;
  }

  html[data-theme='dark'] & {
    background: #1e293b;
    border-color: #334155;
    color: #38bdf8;

    &:hover {
      background: #38bdf8;
      color: #0f172a;
      border-color: #38bdf8;
    }
  }
`;

const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const ResultItemLink = styled.a`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.5rem;
  border-radius: 0.8rem;
  text-decoration: none;
  background: transparent;
  transition: background 0.15s ease;

  &:hover {
    background: #f8fafc;

    html[data-theme='dark'] & {
      background: #1e293b;
    }
  }
`;

const BadgeType = styled.span<{ $type: string }>`
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 0.3rem 0.7rem;
  border-radius: 0.4rem;
  margin-right: 1.4rem;
  flex-shrink: 0;

  ${(p) =>
    p.$type === 'course' &&
    `
    background: rgba(251, 107, 49, 0.15);
    color: #e0551b;
  `}

  ${(p) =>
    p.$type === 'team' &&
    `
    background: rgba(0, 106, 173, 0.15);
    color: #006aad;
  `}

  ${(p) =>
    p.$type === 'newsletter' &&
    `
    background: rgba(16, 185, 129, 0.15);
    color: #059669;
  `}

  ${(p) =>
    p.$type === 'page' &&
    `
    background: rgba(139, 92, 246, 0.15);
    color: #7c3aed;
  `}
`;

const ItemDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

const ItemTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  html[data-theme='dark'] & {
    color: #f8fafc;
  }
`;

const ItemSubtitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #006aad;
  margin-top: 0.2rem;

  html[data-theme='dark'] & {
    color: #38bdf8;
  }
`;

const ItemDescription = styled.div`
  font-size: 1.25rem;
  color: #64748b;
  margin-top: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  html[data-theme='dark'] & {
    color: #94a3b8;
  }
`;

const ArrowIcon = styled.svg`
  width: 1.6rem;
  height: 1.6rem;
  color: #94a3b8;
  margin-left: 1rem;
  flex-shrink: 0;
`;
