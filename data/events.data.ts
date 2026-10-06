export interface SageEvent {
  id: string;
  title: string;
  date: string; // ISO 8601 YYYY-MM-DD
  endDate?: string;
  location: string;
  type: 'hackathon' | 'workshop' | 'seminar' | 'webinar' | 'bootcamp';
  description: string;
  image: string;
  gallery?: string[];
  registrationUrl?: string;
}

export const eventsData: SageEvent[] = [
  {
    id: 'ieee-rf-hackathon-2026',
    title: 'IEEE RF & Wireless Design Hackathon 2026',
    date: '2026-11-15',
    endDate: '2026-11-17',
    location: 'Bengaluru, India',
    type: 'hackathon',
    description: 'A 3-day intensive hardware and RF system design competition for students and industry engineers.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    registrationUrl: 'https://forms.google.com',
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'antenna-design-workshop-2026',
    title: 'Advanced Antenna Design & Simulation Workshop',
    date: '2026-10-05',
    location: 'Online / Virtual',
    type: 'workshop',
    description: 'Hands-on simulation techniques using modern CAD tools for microstrip patch antennas.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    registrationUrl: 'https://forms.google.com',
  },
  {
    id: 'national-rf-symposium-2025',
    title: 'National RF Engineering Symposium 2025',
    date: '2025-08-20',
    location: 'Bengaluru, India',
    type: 'seminar',
    description: 'Gathering top researchers and practitioners to discuss next-gen 6G communications & microwave circuits.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'hands-on-microwave-bootcamp-2025',
    title: 'Hands-on Microwave Measurements Bootcamp',
    date: '2025-03-12',
    endDate: '2025-03-14',
    location: 'Mysuru, India',
    type: 'bootcamp',
    description: 'Practical training on Vector Network Analyzers (VNA) and Spectrum Analyzers for RF engineers.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    ],
  },
];

export function getEvents(): SageEvent[] {
  return eventsData;
}

export function getUpcomingEvents(): SageEvent[] {
  const today = new Date().toISOString().split('T')[0];
  return eventsData
    .filter((event) => event.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastEvents(): SageEvent[] {
  const today = new Date().toISOString().split('T')[0];
  return eventsData
    .filter((event) => event.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));
}
