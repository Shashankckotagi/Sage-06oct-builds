import React from 'react';
import Head from 'next/head';
import Page from 'components/Page';
import PageHero from 'components/PageHero';
import MissionPage from 'views/MissionPage';
import { pageHeroes } from 'sage-data';
import { getBreadcrumbSchema } from 'utils/seo';

export default function MissionVisionPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Mission & Vision', href: '/mission' },
  ];

  const heroData = pageHeroes['/mission'] || pageHeroes['mission'];

  return (
    <Page
      title="Mission & Vision"
      description="Explore the mission, vision, and core engineering goals of SAGE (Shastry Associates Global Enterprises) in applied electromagnetics, RF circuits, and wireless systems."
      canonicalPath="/mission"
      ogType="website"
      jsonLd={getBreadcrumbSchema(breadcrumbs)}
    >
      <Head>
        <title>Mission, Vision & Goals | SAGE — Applied Electromagnetics Leadership</title>
        <meta
          name="description"
          content="Explore the mission, vision, and core engineering goals of SAGE in disseminating knowledge in RF circuits, microwave systems, and wireless technology."
        />
        <link rel="canonical" href="https://shastryassociates.com/mission" />
        <meta property="og:title" content="Mission, Vision & Goals | SAGE — Applied Electromagnetics Leadership" />
        <meta
          property="og:description"
          content="Explore the mission, vision, and core engineering goals of SAGE in disseminating knowledge in RF circuits, microwave systems, and wireless technology."
        />
        <meta property="og:image" content="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80" />
        <meta property="og:url" content="https://shastryassociates.com/mission" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mission, Vision & Goals | SAGE" />
        <meta
          name="twitter:description"
          content="To disseminate knowledge and information in applied electromagnetics and radio frequency wireless systems engineering globally."
        />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80" />
      </Head>

      <PageHero {...heroData} />
      <MissionPage />
    </Page>
  );
}
