import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import PageHero from 'components/PageHero';
import Container from 'components/Container';
import { SageEvent, eventsData } from 'data/events.data';
import { media } from 'utils/media';
import { Image as ImageIcon, Filter, X } from 'lucide-react';

interface GalleryPageViewProps {
  events?: SageEvent[];
}

export default function GalleryPageView({ events = eventsData }: GalleryPageViewProps) {
  const router = useRouter();
  const { event: selectedEventId } = router.query;

  const eventsWithGallery = events.filter((e) => e.gallery && e.gallery.length > 0);
  
  const [activeEventFilter, setActiveEventFilter] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    if (selectedEventId && typeof selectedEventId === 'string') {
      const match = eventsWithGallery.find((e) => e.id === selectedEventId);
      if (match) {
        setActiveEventFilter(match.id);
      }
    }
  }, [selectedEventId, eventsWithGallery]);

  const activeEvent = eventsWithGallery.find((e) => e.id === activeEventFilter);

  const displayedPhotos = activeEvent
    ? (activeEvent.gallery || []).map((url) => ({ url, eventTitle: activeEvent.title, date: activeEvent.date }))
    : eventsWithGallery.flatMap((e) =>
        (e.gallery || []).map((url) => ({ url, eventTitle: e.title, date: e.date }))
      );

  return (
    <>
      <PageHero
        title="Photo Gallery"
        eyebrow="Media & Highlights"
        description="Explore moments, memories, and snapshots from past SAGE workshops, hackathons, and technical bootcamps."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
          { label: 'Photo Gallery', href: '/gallery' },
        ]}
        imageSrc="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80"
      />

      <SectionContainer>
        <FilterBarContainer>
          <FilterLabel>
            <Filter size={16} /> Filter by Event:
          </FilterLabel>
          <FilterPillsRow>
            <FilterPill
              active={activeEventFilter === 'all'}
              onClick={() => {
                setActiveEventFilter('all');
                if (selectedEventId) router.push('/gallery', undefined, { shallow: true });
              }}
            >
              All Events ({eventsWithGallery.reduce((acc, e) => acc + (e.gallery?.length || 0), 0)})
            </FilterPill>
            {eventsWithGallery.map((e) => (
              <FilterPill
                key={e.id}
                active={activeEventFilter === e.id}
                onClick={() => {
                  setActiveEventFilter(e.id);
                  router.push(`/gallery?event=${e.id}`, undefined, { shallow: true });
                }}
              >
                {e.title} ({e.gallery?.length})
              </FilterPill>
            ))}
          </FilterPillsRow>
        </FilterBarContainer>

        {displayedPhotos.length === 0 ? (
          <EmptyState>
            <ImageIcon size={48} />
            <h3>No photos found for this event</h3>
            <p>Select another event filter above to view memories and highlights.</p>
          </EmptyState>
        ) : (
          <GalleryGrid>
            {displayedPhotos.map((item, idx) => (
              <GalleryCard key={idx} onClick={() => setLightboxImage({ url: item.url, title: item.eventTitle })}>
                <GalleryImage src={item.url} alt={`${item.eventTitle} photo ${idx + 1}`} loading="lazy" />
                <CardOverlay>
                  <OverlayTag>{item.eventTitle}</OverlayTag>
                  <OverlayText>Click to enlarge</OverlayText>
                </CardOverlay>
              </GalleryCard>
            ))}
          </GalleryGrid>
        )}
      </SectionContainer>

      {lightboxImage && (
        <LightboxOverlay onClick={() => setLightboxImage(null)}>
          <LightboxContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setLightboxImage(null)}>
              <X size={28} />
            </CloseButton>
            <LightboxImg src={lightboxImage.url} alt={lightboxImage.title} />
            <LightboxCaption>{lightboxImage.title}</LightboxCaption>
          </LightboxContent>
        </LightboxOverlay>
      )}
    </>
  );
}

const SectionContainer = styled(Container)`
  padding-top: 4rem;
  padding-bottom: 8rem;
`;

const FilterBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 4rem;

  ${media('<=tablet')} {
    align-items: flex-start;
  }
`;

const FilterLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgb(var(--mutedColor));
`;

const FilterPillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  ${media('<=tablet')} {
    justify-content: flex-start;
  }
`;

const FilterPill = styled.button<{ active: boolean }>`
  background: ${(p) => (p.active ? 'rgb(var(--brandBlue, 0, 106, 173))' : 'rgb(var(--cardBackground))')};
  color: ${(p) => (p.active ? '#ffffff' : 'rgb(var(--text))')};
  border: 1px solid ${(p) => (p.active ? 'rgb(var(--brandBlue, 0, 106, 173))' : 'rgb(var(--lineColor))')};
  padding: 0.8rem 1.8rem;
  border-radius: 9999px;
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${(p) => (p.active ? '0 4px 12px rgba(0, 106, 173, 0.25)' : 'none')};

  &:hover {
    transform: translateY(-1px);
    border-color: rgb(var(--skyBlue, 53, 169, 239));
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 2.5rem;

  ${media('<=phone')} {
    grid-template-columns: 1fr;
  }
`;

const GalleryCard = styled.div`
  position: relative;
  height: 24rem;
  border-radius: 1.2rem;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;

  &:hover img {
    transform: scale(1.06);
  }

  &:hover div {
    opacity: 1;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.75) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.8rem;
  opacity: 0;
  transition: opacity 0.25s ease;
`;

const OverlayTag = styled.span`
  background: rgba(0, 106, 173, 0.9);
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.4rem 1rem;
  border-radius: 0.6rem;
  width: fit-content;
  backdrop-filter: blur(4px);
`;

const OverlayText = styled.span`
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: right;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 6rem 2rem;
  background: rgb(var(--cardBackground));
  border-radius: 1.6rem;
  border: 1px dashed rgb(var(--lineColor));
  color: rgb(var(--mutedColor));

  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin: 1.5rem 0 0.5rem 0;
    color: rgb(var(--text));
  }
`;

const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LightboxImg = styled.img`
  max-width: 100%;
  max-height: 75vh;
  border-radius: 1rem;
  object-fit: contain;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
`;

const LightboxCaption = styled.p`
  margin-top: 1.5rem;
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -4.5rem;
  right: 0;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
