/**
 * SAGE — Site Data Master File
 * Shastry Associates Global Enterprises
 *
 * All content is sourced from the existing WordPress site and verified draft content.
 * Items marked with isPlaceholder: true need stakeholder confirmation before launch.
 */

// ─── Site Config ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "SAGE",
  fullName: "Shastry Associates Global Enterprises",
  legalName: "Shastry Associates Global Enterprises, LLC",
  tagline: "Professional RF, Microwave & Wireless Engineering Education",
  description:
    "SAGE provides expert-led training, consulting, workshops, and courses in radio frequency, microwave, applied electromagnetics, antennas, and wireless communication systems.",
  url: "https://shastryassociates.com",
  email: "info@shastryassociates.com",
  phone: null as string | null, // TODO: confirm
  address: null as string | null, // TODO: confirm
  established: null as number | null, // TODO: confirm year
  social: {
    linkedin: null as string | null, // TODO: confirm
    twitter: null as string | null,
    youtube: null as string | null,
  },
};

// ─── Brand Tokens ────────────────────────────────────────────────────────────

export const brandColors = {
  deepBlue: "#006AAD",
  skyBlue: "#35A9EF",
  orange: "#FB6B31",
  ink: "#0F172A",
  paper: "#FFFFFF",
  warm: "#F8FBFF",
  line: "#E2E8F0",
  muted: "#64748B",
  softBlue: "#EBF6FE",
  success: "#16A34A",
  error: "#DC2626",
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "RF Engineering", href: "/courses#rf-engineering" },
      { label: "Microwave", href: "/courses#microwave" },
      { label: "Wireless Systems", href: "/courses#wireless" },
      { label: "Antennas", href: "/courses#antennas" },
      { label: "Signal Processing", href: "/courses#signal-processing" },
      { label: "Circuit Design", href: "/courses#circuit-design" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Training Programs", href: "/services#training" },
      { label: "Consulting", href: "/services#consulting" },
      { label: "Custom Courses", href: "/services#custom" },
      { label: "Workshops & Tutorials", href: "/services#workshops" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

// ─── Mission, Vision, Goals ──────────────────────────────────────────────────

export const mission =
  "To disseminate knowledge and information in the area of applied electromagnetics and wireless systems.";

export const vision =
  "To be the leader in disseminating knowledge and information in radio frequency wireless systems engineering and technologies globally.";

export const goals = [
  "Make available practical engineering and technology information on RF, millimeter-wave, and microwave circuits, components, sub-systems, and systems.",
  "Provide and deliver tutorials, courses, workshops, and training for recent college graduates (Bachelor and Master levels) and engineers in industry at appropriate levels — on-site, off-site, online, and via our website.",
  "Provide engineering consulting services.",
];

export const aboutShort =
  "SAGE is an international group of highly qualified engineers and entrepreneurs with deep expertise in applied electromagnetics, RF circuits and antennas, and wireless communication systems.";

export const aboutFull = `SAGE (Shastry Associates Global Enterprises) is an international group of highly qualified and accomplished engineers and entrepreneurs with a long track record of engineering and technology experience in industry and academia.

Their knowledge is well rooted both in the fundamentals of electronics and communication engineering in general, and in applied electromagnetics, RF circuits and antennas, and wireless communication systems in particular.

SAGE associates are also excellent communicators. They disseminate knowledge through courses, tutorials, and workshops to provide a deep understanding of the subject matter and insights therein, as well as guidelines for design and applications of the theory.`;

// ─── Core Competencies ───────────────────────────────────────────────────────

export interface Competency {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export const competencies: Competency[] = [
  {
    id: "electronics-communication",
    number: "01",
    title: "Electronics & Communication Engineering",
    description:
      "Deep expertise in the fundamentals of electronics and communication systems, providing comprehensive solutions.",
    icon: "CircuitBoard",
  },
  {
    id: "applied-electromagnetics",
    number: "02",
    title: "Applied Electromagnetics",
    description:
      "Specialized knowledge in electromagnetic theory and its practical applications in modern systems.",
    icon: "Waves",
  },
  {
    id: "rf-circuits-antennas",
    number: "03",
    title: "RF Circuits & Antennas",
    description:
      "Advanced proficiency in radio frequency circuit design and antenna systems for various applications.",
    icon: "Antenna",
  },
  {
    id: "wireless-systems",
    number: "04",
    title: "Wireless Communication Systems",
    description:
      "Comprehensive understanding of wireless technologies and communication system architectures.",
    icon: "Wifi",
  },
];

// ─── Services ────────────────────────────────────────────────────────────────

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  delivery: string[];
}

export const services: Service[] = [
  {
    id: "training",
    number: "01",
    title: "Training Programs",
    description:
      "Comprehensive training courses designed to build strong foundations and advanced skills in electronics and communication engineering.",
    delivery: ["On-site", "Off-site", "Online"],
  },
  {
    id: "consulting",
    number: "02",
    title: "Consulting Services",
    description:
      "Expert consulting to help solve complex engineering challenges and optimize your technology solutions.",
    delivery: ["Custom engagement"],
  },
  {
    id: "custom-courses",
    number: "03",
    title: "Customized Courses",
    description:
      "Tailored educational programs designed specifically for your organization's unique requirements and objectives.",
    delivery: ["On-site", "Off-site", "Online"],
  },
  {
    id: "workshops-tutorials",
    number: "04",
    title: "Workshops & Tutorials",
    description:
      "Interactive workshops and hands-on tutorials providing practical insights and real-world applications.",
    delivery: ["On-site", "Off-site", "Online"],
  },
];

// ─── Course Categories ───────────────────────────────────────────────────────

export const courseCategories = [
  { id: "rf-engineering", label: "RF Engineering" },
  { id: "microwave", label: "Microwave" },
  { id: "wireless", label: "Wireless" },
  { id: "antennas", label: "Antennas" },
  { id: "signal-processing", label: "Signal Processing" },
  { id: "circuit-design", label: "Circuit Design" },
] as const;

// ─── Courses ─────────────────────────────────────────────────────────────────
// ⚠️ All course data is from the draft Netlify site. Verify before launch.

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryId: string;
  description: string;
  longDescription: string | null;
  price: number;
  currency: string;
  duration: string | null; // TODO: confirm
  level: string | null; // TODO: confirm
  instructor: string | null; // TODO: confirm — draft names were placeholders
  image: {
    src: string;
    alt: string;
    isPlaceholder: boolean;
  };
  syllabus: string[] | null; // TODO: add when available
  isPlaceholder: boolean;
}

export const courses: Course[] = [
  {
    id: "c1",
    slug: "advanced-rf-system-design",
    title: "Advanced RF System Design & Analysis",
    category: "RF Engineering",
    categoryId: "rf-engineering",
    description:
      "Noise figure, linearity (IP3), compression, and link budget calculations for high-performance RF systems.",
    longDescription: null,
    price: 199,
    currency: "USD",
    duration: null,
    level: "Advanced",
    instructor: null,
    image: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
      alt: "Electronic circuit board close-up",
      isPlaceholder: true,
    },
    syllabus: null,
    isPlaceholder: true,
  },
  {
    id: "c2",
    slug: "microwave-passive-circuits",
    title: "Microwave Passive Circuits & Networks",
    category: "Microwave",
    categoryId: "microwave",
    description:
      "Multi-port junctions, power dividers (Wilkinson), couplers (Branch-line, Lange), and cavity resonators.",
    longDescription: null,
    price: 149,
    currency: "USD",
    duration: null,
    level: "Intermediate",
    instructor: null,
    image: {
      src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&q=80",
      alt: "Engineer working with electronic measurement equipment",
      isPlaceholder: true,
    },
    syllabus: null,
    isPlaceholder: true,
  },
  {
    id: "c3",
    slug: "5g-wireless-communication-systems",
    title: "5G Wireless Communication Systems",
    category: "Wireless",
    categoryId: "wireless",
    description:
      "5G NR architecture, sub-6GHz and mmWave deployments, and network slicing topology.",
    longDescription: null,
    price: 249,
    currency: "USD",
    duration: null,
    level: "Advanced",
    instructor: null,
    image: {
      src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
      alt: "Telecommunication tower and network infrastructure",
      isPlaceholder: true,
    },
    syllabus: null,
    isPlaceholder: true,
  },
  {
    id: "c4",
    slug: "antenna-theory-and-design",
    title: "Antenna Theory and Design",
    category: "Antennas",
    categoryId: "antennas",
    description:
      "Radiation pattern, gain, efficiency, impedance, polarization, and array parameters.",
    longDescription: null,
    price: 179,
    currency: "USD",
    duration: null,
    level: "Intermediate",
    instructor: null,
    image: {
      src: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80",
      alt: "Satellite dish and antenna array",
      isPlaceholder: true,
    },
    syllabus: null,
    isPlaceholder: true,
  },
  {
    id: "c5",
    slug: "dsp-for-rf-systems",
    title: "Digital Signal Processing for RF Systems",
    category: "Signal Processing",
    categoryId: "signal-processing",
    description:
      "Digital upconverters (DUC), downconverters (DDC), and numerically controlled oscillators (NCOs).",
    longDescription: null,
    price: 129,
    currency: "USD",
    duration: null,
    level: "Intermediate",
    instructor: null,
    image: {
      src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&q=80",
      alt: "Engineer writing code for signal processing",
      isPlaceholder: true,
    },
    syllabus: null,
    isPlaceholder: true,
  },
  {
    id: "c6",
    slug: "high-speed-pcb-design",
    title: "High-Speed PCB Design & Signal Integrity",
    category: "Circuit Design",
    categoryId: "circuit-design",
    description:
      "High-speed trace routing, impedance continuity, decoupling capacitor networks, and crosstalk shielding.",
    longDescription: null,
    price: 159,
    currency: "USD",
    duration: null,
    level: "Advanced",
    instructor: null,
    image: {
      src: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80",
      alt: "Printed circuit board macro photography",
      isPlaceholder: true,
    },
    syllabus: null,
    isPlaceholder: true,
  },
];

// ─── Team ────────────────────────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  title: string | null;
  role: "associate" | "youth-wing" | "legal" | "it-consultant" | "developer";
  location: string | null;
  bio: string | null; // TODO: collect
  image: string | null; // TODO: collect
  linkedin: string | null; // TODO: collect
  specialization: string | null; // TODO: collect
}

export const team: TeamMember[] = [
  // Associates
  { id: "t1", name: "Mr. Bala Sundaram", title: null, role: "associate", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t2", name: "Mr. Krishna Katragadda", title: null, role: "associate", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t3", name: "Mr. Shrinivasa Ponnala", title: null, role: "associate", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t4", name: "Mr. Sasidhar Vajha", title: null, role: "associate", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t5", name: "Dr. I. Rosaline", title: null, role: "associate", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t6", name: "Dr. G. Boopalan", title: null, role: "associate", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t7", name: "Mr. Neelakantan", title: null, role: "associate", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t8", name: "Prof. C. Murali", title: null, role: "associate", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t9", name: "Dr. Parimala Prabhakar", title: null, role: "associate", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t10", name: "Dr. Sanjay Moghe", title: null, role: "associate", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t11", name: "Mr. James O'Donnell", title: null, role: "associate", location: "US", bio: null, image: null, linkedin: null, specialization: null },
  { id: "t12", name: "Mr. Nicholas Manos", title: null, role: "associate", location: "US", bio: null, image: null, linkedin: null, specialization: null },
  { id: "t13", name: "Prof. S. L. Nisha", title: null, role: "associate", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t14", name: "Dr. YoungSoo Kim", title: null, role: "associate", location: "South Korea", bio: null, image: null, linkedin: null, specialization: null },
  { id: "t15", name: "Dr. P. Shanthi", title: null, role: "associate", location: null, bio: null, image: null, linkedin: null, specialization: null },
  // Youth Wing
  { id: "t16", name: "Safiya Khalid", title: null, role: "youth-wing", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t17", name: "Neha Kantikar", title: null, role: "youth-wing", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t18", name: "Preeti K", title: null, role: "youth-wing", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t19", name: "Visvajit", title: null, role: "youth-wing", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t20", name: "MSV", title: null, role: "youth-wing", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t21", name: "Shreya", title: null, role: "youth-wing", location: null, bio: null, image: null, linkedin: null, specialization: null },
  // Support
  { id: "t22", name: "Mr. Kiran Bettadapura", title: "Legal Advisor", role: "legal", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t23", name: "Dr. Tejas Shastry", title: "IT / Website Consultant", role: "it-consultant", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t24", name: "Mr. Pumichat Raksaphaeng", title: "IT / Website Consultant", role: "it-consultant", location: null, bio: null, image: null, linkedin: null, specialization: null },
  { id: "t25", name: "Ms. Srishti Bijjur", title: "IT / Website Consultant", role: "it-consultant", location: null, bio: null, image: null, linkedin: null, specialization: null },
];

// ─── Values ──────────────────────────────────────────────────────────────────

export interface Value {
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    title: "Excellence in Education",
    description:
      "Committed to delivering the highest quality educational experiences and knowledge transfer.",
  },
  {
    title: "Innovation & Insight",
    description:
      "Providing cutting-edge insights and innovative approaches to engineering challenges.",
  },
  {
    title: "Collaboration & Partnership",
    description:
      "Building strong relationships with clients, academia, and industry partners.",
  },
  {
    title: "Results-Oriented",
    description:
      "Focused on delivering practical, actionable results that drive real-world success.",
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────
// ⚠️ All testimonials are placeholders from the draft site. Replace with approved real ones.

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  isPlaceholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "test1",
    quote:
      "SAGE provided me with the practical skills I needed to excel in my career. The instructors are true industry experts.",
    name: "John Anderson",
    title: "Senior RF Engineer",
    isPlaceholder: true,
  },
  {
    id: "test2",
    quote:
      "The 5G course was comprehensive and up-to-date with the latest industry standards. Highly recommended!",
    name: "Priya Sharma",
    title: "Wireless Systems Architect",
    isPlaceholder: true,
  },
  {
    id: "test3",
    quote:
      "As a student, the foundational courses in Microwave engineering were exactly what I needed to bridge the gap between theory and practice.",
    name: "Marcus Thorne",
    title: "Graduate Student",
    isPlaceholder: true,
  },
];

// ─── Homepage Copy ───────────────────────────────────────────────────────────

export const homeCopy = {
  hero: {
    eyebrow: "SAGE Professional Education",
    heading: "Master the art of RF & wireless engineering.",
    body: "Expert-led learning and consulting for the systems shaping a connected world.",
    primaryCta: { label: "Explore Courses", href: "/courses" },
    secondaryCta: { label: "Talk to an Expert", href: "/contact" },
  },
  stats: [
    { value: "25+", label: "Years of Experience", isPlaceholder: false },
    { value: "15+", label: "Global Associates", isPlaceholder: false },
    { value: "4", label: "Core Disciplines", isPlaceholder: false },
  ],
  competenciesHeading: "Our Expertise",
  competenciesSubheading: "Core Competencies",
  coursesHeading: "Featured Courses",
  coursesSubheading: "Build from fundamentals. Design for reality.",
  coursesBody:
    "Carefully structured courses that take you from theory to confident engineering practice.",
  whyHeading: "Why SAGE?",
  whyBody:
    "We provide more than just education; we provide the tools for your professional success in the wireless industry.",
  ctaHeading: "Your next system begins with deeper understanding.",
  ctaBody:
    "Build the practical expertise to analyse, design, and deliver modern RF and wireless systems.",
  ctaPrimary: { label: "Explore Learning Paths", href: "/courses" },
  ctaSecondary: { label: "Start a Conversation", href: "/contact" },
};

// ─── Why SAGE Features ───────────────────────────────────────────────────────

export const whyFeatures = [
  {
    title: "Expert Instructors",
    description:
      "Learn from engineers and educators with decades of practical experience in RF and Microwave systems.",
    icon: "GraduationCap",
  },
  {
    title: "Flexible Learning",
    description:
      "Access courses on-site, off-site, and online. Our delivery adapts to your schedule and needs.",
    icon: "Globe",
  },
  {
    title: "Practical Focus",
    description:
      "Every course bridges electromagnetic theory with real-world design guidelines and applications.",
    icon: "Wrench",
  },
  {
    title: "Tailored Programs",
    description:
      "Custom courses, workshops, and consulting designed around your organisation's specific engineering challenges.",
    icon: "Settings",
  },
];

// ─── Footer ──────────────────────────────────────────────────────────────────

export const footerNav = {
  explore: {
    title: "Explore",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Tutorials", href: "/courses#tutorials" },
      { label: "Workshops", href: "/services#workshops" },
      { label: "Training", href: "/services#training" },
    ],
  },
  workWithUs: {
    title: "Work With Us",
    links: [
      { label: "Consulting", href: "/services#consulting" },
      { label: "Custom Courses", href: "/services#custom" },
      { label: "Contact", href: "/contact" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/about#team" },
      { label: "News", href: "/news" },
    ],
  },
};

export const footerCopyright = `© ${new Date().getFullYear()} Shastry Associates Global Enterprises (SAGE). All rights reserved.`;
