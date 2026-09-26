import React from 'react';
import Head from 'next/head';
import Page from 'components/Page';
import WorkshopsPage from 'views/WorkshopsPage';
import { cloudinaryUrl, imagePresets } from 'utils/cloudinary';

export default function WorkshopsRoute() {
  const ogImageUrl = cloudinaryUrl('sage/pages/workshops.jpg', imagePresets.og);

  return (
    <Page
      title="Workshops"
      description="Hands-on design-and-test engineering workshops in RF, microwave, and wireless systems conducted by SAGE."
    >
      <Head>
        <title>Workshops | SAGE — Hands-On RF & Microwave Technical Labs</title>
        <meta
          name="description"
          content="Hands-on design-and-test engineering workshops in RF, microwave, and wireless systems conducted by SAGE."
        />
        <link rel="canonical" href="https://shastryassociates.com/workshops" />
        <meta property="og:title" content="Workshops | SAGE — Hands-On RF & Microwave Technical Labs" />
        <meta
          property="og:description"
          content="Hands-on design-and-test engineering workshops in RF, microwave, and wireless systems conducted by SAGE."
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content="https://shastryassociates.com/workshops" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Workshops | SAGE — Hands-On RF & Microwave Technical Labs" />
        <meta
          name="twitter:description"
          content="Hands-on design-and-test engineering workshops in RF, microwave, and wireless systems."
        />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>

      <WorkshopsPage />
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
