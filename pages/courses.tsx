import Page from 'components/Page';
import PageHero from 'components/PageHero';
import ServicesPortal from 'views/HomePage/ServicesPortal';

export default function CoursesPage() {
  return (
    <Page title="Courses & Educational Programs | SAGE">
      <PageHero
        title="Courses & Tutorials"
        eyebrow="Practical Engineering Curriculum"
        description="Structured self-paced and instructor-led courses covering RF & microwave circuit design, antenna theory, wireless communications, and DSP."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '/courses' },
        ]}
        imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
      />
      <ServicesPortal />
    </Page>
  );
}
