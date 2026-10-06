import React from 'react';
import EventDetailPage from 'views/EventDetailPage';
import { events } from 'data/events.data';

export default function SageRvce2Page() {
  const event = events.find((e) => e.id === 'sage-rvce-2') || events[0];
  return <EventDetailPage event={event} />;
}
