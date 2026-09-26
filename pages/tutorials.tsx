import React from 'react';
import Head from 'next/head';
import Page from 'components/Page';
import TutorialsPage from 'views/TutorialsPage';
import { cloudinaryUrl, imagePresets } from 'utils/cloudinary';

export default function TutorialsRoute() {
  const ogImageUrl = cloudinaryUrl('sage/pages/tutorials.jpg', imagePresets.og);

  return (
    <Page
      title="Tutorials"
      description="Step-by-step guided learning in RF circuit analysis, applied electromagnetics, and system design from SAGE senior faculty."
    >
      <Head>
        <title>Tutorials | SAGE — Applied RF & Microwave Engineering Guides</title>
        <meta
          name="description"
          content="Step-by-step guided learning in RF circuit analysis, applied electromagnetics, and system design from SAGE senior faculty."
        />
        <link rel="canonical" href="https://shastryassociates.com/tutorials" />
        <meta property="og:title" content="Tutorials | SAGE — Applied RF & Microwave Engineering Guides" />
        <meta
          property="og:description"
          content="Step-by-step guided learning in RF circuit analysis, applied electromagnetics, and system design from SAGE senior faculty."
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content="https://shastryassociates.com/tutorials" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tutorials | SAGE — Applied RF & Microwave Engineering Guides" />
        <meta
          name="twitter:description"
          content="Step-by-step guided learning in RF circuit analysis, applied electromagnetics, and system design."
        />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>

      <TutorialsPage />
    </Page>
  );
}

export async function getStaticProps() {
  return {
    props: {
      hideDefaultWaveCta: true,
    },
  };
}
