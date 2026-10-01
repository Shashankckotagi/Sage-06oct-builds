export interface NewsletterIssue {
  id: string;
  title: string;
  date: string; // ISO 8601 YYYY-MM-DD
  edition: string; // e.g. "Volume 1, Issue 4"
  summary: string;
  image: string;
  tags: string[];
  readTime: string;
  pdfUrl?: string; // Direct link or view link
}

export const newslettersData: NewsletterIssue[] = [
  {
    id: 'sage-digest-sep-2026',
    title: '5G/6G Phased Array Antenna Innovations & mmWave Front-End Circuitry',
    date: '2026-09-15',
    edition: 'Vol. 4, Issue 09',
    summary: 'A deep dive into 28 GHz beamforming arrays, loss mitigation techniques in high-frequency substrate layout, and key takeaways from our hands-on IEEE student workshop.',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80',
    tags: ['Antennas', '6G Systems', 'Phased Arrays'],
    readTime: '6 min read',
    pdfUrl: '/newsletter',
  },
  {
    id: 'sage-digest-aug-2026',
    title: 'Vector Network Analyzer Calibration & Precision Microwave Measurement',
    date: '2026-08-10',
    edition: 'Vol. 4, Issue 08',
    summary: 'Mastering TRL and SOLT calibration routines on modern VNAs, eliminating fixture parasitics, and impedance matching formulas for microwave power amplifiers.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tags: ['VNA Measurement', 'Lab Bench', 'RF Testing'],
    readTime: '8 min read',
    pdfUrl: '/newsletter',
  },
  {
    id: 'sage-digest-jul-2026',
    title: 'Doherty Power Amplifier Linearity & Digital Pre-Distortion Strategies',
    date: '2026-07-22',
    edition: 'Vol. 4, Issue 07',
    summary: 'Optimizing back-off efficiency in cellular base station transmitters using asymmetric Doherty topologies and digital linearization feedback loops.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    tags: ['Power Amps', 'Linearity', '5G Telecom'],
    readTime: '7 min read',
    pdfUrl: '/newsletter',
  },
  {
    id: 'sage-digest-jun-2026',
    title: 'RF MEMS Switches & Tunable Filter Architectures for Satellite Payload',
    date: '2026-06-18',
    edition: 'Vol. 4, Issue 06',
    summary: 'Exploring micro-electromechanical switches for reconfigurable microwave filters, low insertion loss switching networks, and satellite communication payloads.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    tags: ['Satellite Comm', 'RF MEMS', 'Filters'],
    readTime: '5 min read',
    pdfUrl: '/newsletter',
  },
];

export function getNewsletters(): NewsletterIssue[] {
  return newslettersData;
}
