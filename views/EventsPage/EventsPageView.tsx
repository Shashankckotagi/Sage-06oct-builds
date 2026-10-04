import NextLink from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import PageHero from 'components/PageHero';
import Container from 'components/Container';
import AutofitGrid from 'components/AutofitGrid';
import { SageEvent } from 'data/events.data';
import { Calendar, MapPin, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { media } from 'utils/media';

interface EventsPageProps {
  events: SageEvent[];
}

export default function EventsPageView({ events }: EventsPageProps) {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const today = new Date().toISOString().split('T')[0];

  const upcomingEvents = events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const pastEvents = events.filter((e) => e.date < today).sort((a, b) => b.date.localeCompare(a.date));

  const filteredEvents =
    filter === 'upcoming' ? upcomingEvents : filter === 'past' ? pastEvents : events;

  return (
    <>
      <PageHero
        title="Events"
        eyebrow="Hands-on Workshops & Gatherings"
        description="Connect, learn, and innovate with SAGE through interactive hackathons, technical seminars, bootcamps, and workshops."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
        ]}
        imageSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80"
      />

      <SectionContainer>
        <FilterContainer>
          <FilterPills>
            <FilterPill active={filter === 'all'} onClick={() => setFilter('all')}>
              All Events ({events.length})
            </FilterPill>
            <FilterPill active={filter === 'upcoming'} onClick={() => setFilter('upcoming')}>
              Upcoming ({upcomingEvents.length})
            </FilterPill>
            <FilterPill active={filter === 'past'} onClick={() => setFilter('past')}>
              Past Events ({pastEvents.length})
            </FilterPill>
          </FilterPills>
        </FilterContainer>

        {filteredEvents.length === 0 ? (
          <EmptyState>
            <h3>No upcoming events scheduled right now</h3>
            <p>Check back soon or browse our past event archives and photo gallery below.</p>
          </EmptyState>
        ) : (
          <EventGrid>
            {filteredEvents.map((event) => {
              const isUpcoming = event.date >= today;
              return (
                <EventCard key={event.id}>
                  <CardImageWrapper>
                    <CardImage src={event.image} alt={event.title} loading="lazy" />
                    <TypeBadge>{event.type}</TypeBadge>
                    <StatusBadge isUpcoming={isUpcoming}>
                      {isUpcoming ? 'Upcoming' : 'Completed'}
                    </StatusBadge>
                  </CardImageWrapper>
                  <CardBody>
                    <EventDate>
                      <Calendar size={16} />
                      <span>{event.date} {event.endDate ? `– ${event.endDate}` : ''}</span>
                    </EventDate>
                    <EventTitle>{event.title}</EventTitle>
                    <LocationText>
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </LocationText>
                    <EventDescription>{event.description}</EventDescription>

                    <CardFooter>
                      {isUpcoming && event.registrationUrl ? (
                        <RegisterButton
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Register Now <ExternalLink size={14} />
                        </RegisterButton>
                      ) : !isUpcoming && event.gallery ? (
                        <NextLink href={`/gallery?event=${event.id}`} passHref>
                          <GalleryLink>
                            <ImageIcon size={14} /> View Photos ({event.gallery.length})
                          </GalleryLink>
                        </NextLink>
                      ) : null}
                    </CardFooter>
                  </CardBody>
                </EventCard>
              );
            })}
          </EventGrid>
        )}
      </SectionContainer>
    </>
  );
}

const SectionContainer = styled(Container)`
  padding-top: 4rem;
  padding-bottom: 6rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

const FilterPills = styled.div`
  display: inline-flex;
  gap: 1rem;
  background: rgb(var(--cardBackground, 255, 255, 255));
  padding: 0.6rem;
  border-radius: 5rem;
  border: 1px solid rgb(var(--lineColor));
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const FilterPill = styled.button<{ active: boolean }>`
  background: ${(p) => (p.active ? 'rgb(var(--primary))' : 'transparent')};
  color: ${(p) => (p.active ? '#ffffff' : 'rgb(var(--text))')};
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 4rem;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(p) => (p.active ? 'rgb(var(--primary))' : 'rgba(var(--primary), 0.1)')};
  }
`;

const EventGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 34rem;
  gap: 3rem;
`;

const EventCard = styled.div`
  background: rgb(var(--cardBackground));
  border: 1px solid rgb(var(--lineColor));
  border-radius: 1.6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.1);
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TypeBadge = styled.span`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.4rem 1rem;
  border-radius: 0.6rem;
`;

const StatusBadge = styled.span<{ isUpcoming: boolean }>`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: ${(p) => (p.isUpcoming ? 'rgb(var(--primary, 251, 107, 49))' : '#4b5563')};
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  border-radius: 0.6rem;
`;

const CardBody = styled.div`
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const EventDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: rgb(var(--brandBlue));
  margin-bottom: 0.8rem;
`;

const EventTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: rgb(var(--text));
  line-height: 1.3;
  margin-bottom: 0.8rem;
`;

const LocationText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.3rem;
  color: rgb(var(--mutedColor));
  margin-bottom: 1.2rem;
`;

const EventDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: rgb(var(--textSecondary));
  margin-bottom: 2rem;
  flex: 1;
`;

const CardFooter = styled.div`
  margin-top: auto;
`;

const RegisterButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: 100%;
  padding: 1rem 1.6rem;
  background: rgb(var(--primary));
  color: #ffffff;
  font-weight: 700;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #e0551b;
  }
`;

const GalleryLink = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: 100%;
  padding: 1rem 1.6rem;
  background: transparent;
  border: 1.5px solid rgb(var(--brandBlue));
  color: rgb(var(--brandBlue));
  font-weight: 700;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgb(var(--brandBlue));
    color: #ffffff;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 6rem 2rem;
  background: rgb(var(--cardBackground));
  border-radius: 1.6rem;
  border: 1px dashed rgb(var(--lineColor));

  h3 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    color: rgb(var(--mutedColor));
  }
`;

const GallerySection = styled.div`
  margin-top: 8rem;
`;

const GalleryHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionEyebrow = styled.span`
  color: rgb(var(--brandBlue));
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 3.2rem;
  font-weight: 800;
  color: rgb(var(--text));
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.6rem;
  color: rgb(var(--mutedColor));
  max-width: 60rem;
  margin: 0 auto;
`;

const SelectedEventFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(var(--tertiary));
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  margin-bottom: 2rem;
  font-size: 1.4rem;
`;

const ClearFilterBtn = styled.button`
  background: transparent;
  border: none;
  color: rgb(var(--primary));
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  gap: 2rem;
`;

const GalleryThumb = styled.div`
  position: relative;
  height: 22rem;
  border-radius: 1.2rem;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover div {
    opacity: 1;
  }
`;

const ThumbOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;

  span {
    color: #ffffff;
    font-weight: 700;
    font-size: 1.4rem;
    padding: 0.6rem 1.4rem;
    border: 1px solid #ffffff;
    border-radius: 3rem;
  }
`;

const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
`;

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  border-radius: 0.8rem;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -4rem;
  right: 0;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 3.5rem;
  cursor: pointer;
  line-height: 1;
`;
