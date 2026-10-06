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

export const homeCopy = {
  hero: {
    eyebrow: "SAGE Professional Education",
    heading: "Master the art of RF & wireless engineering.",
    body: "Expert-led learning and consulting for the systems shaping a connected world.",
    primaryCta: { label: "Explore Courses", href: "/courses" },
    secondaryCta: { label: "Talk to an Expert", href: "/contact" },
  },
  stats: [
    { value: "35+", label: "Years of Combined Experience", isPlaceholder: false },
    { value: "20+", label: "Global Associates: Professionals & Faculty", isPlaceholder: false },
    { value: "5", label: "Workshops & Events to Date", isPlaceholder: false },
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
  ctaHeading: "Your next step into the wireless world starts here with SAGE.",
  ctaBody: "",
  ctaPrimary: { label: "Explore Courses", href: "/courses" },
  ctaSecondary: { label: "Explore Events", href: "/events" },
};

export const whyFeatures = [
  {
    title: "Expert Instructors",
    description:
      "Learn from engineers and educators with decades of practical and academic experience in RF and Microwave systems.",
    icon: "GraduationCap",
  },
  {
    title: "Flexible Learning",
    description:
      "Access courses and tutorials online to meet your schedule and needs. On-site delivery also available upon request.",
    icon: "Globe",
  },
  {
    title: "Practical Focus",
    description:
      "Every course bridges electromagnetic fundamentals with real-world design guidelines and applications.",
    icon: "Wrench",
  },
  {
    title: "Certificate Programs",
    description:
      "Practical curriculum to help you advance your personal skills and improve your organizational wireless edge.",
    icon: "Settings",
  },
];
