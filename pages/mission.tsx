import Page from 'components/Page';
import PageHero from 'components/PageHero';
import MissionVisionSection from 'views/AboutPage/MissionVisionSection';
import ValuesGrid from 'views/AboutPage/ValuesGrid';
import { pageHeroes } from 'sage-data';
import { getBreadcrumbSchema } from 'utils/seo';

export default function MissionVisionPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Mission & Vision', href: '/mission' },
  ];

  return (
    <Page
      title="Mission & Vision"
      description="Explore the mission, vision, and core engineering principles of SAGE (Shastry Associates Global Enterprises) in applied electromagnetics and radio frequency wireless systems."
      canonicalPath="/mission"
      ogType="website"
      jsonLd={getBreadcrumbSchema(breadcrumbs)}
    >
      <PageHero {...pageHeroes['/mission']} />
      <MissionVisionSection />
      <ValuesGrid />
    </Page>
  );
}
