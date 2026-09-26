import React from 'react';
import Head from 'next/head';
import Page from 'components/Page';
import ConsultingPage from 'views/ConsultingPage';
import { cloudinaryUrl, imagePresets } from 'utils/cloudinary';

export default function ConsultingRoute() {
  const ogImageUrl = cloudinaryUrl('sage/pages/consulting.jpg', imagePresets.og);

  return (
    <Page
      title="Consulting"
      description="Specialized RF, microwave, and wireless engineering consulting and technical advisory from SAGE senior associates."
    >
      <Head>
        <title>Consulting Services | SAGE — Expert RF & Microwave Advisory</title>
        <meta
          name="description"
          content="Specialized RF, microwave, and wireless engineering consulting and technical advisory from SAGE senior associates."
        />
        <link rel="canonical" href="https://shastryassociates.com/consulting" />
        <meta property="og:title" content="Consulting Services | SAGE — Expert RF & Microwave Advisory" />
        <meta
          property="og:description"
          content="Specialized RF, microwave, and wireless engineering consulting and technical advisory from SAGE senior associates."
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content="https://shastryassociates.com/consulting" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Consulting Services | SAGE — Expert RF & Microwave Advisory" />
        <meta
          name="twitter:description"
          content="Specialized RF, microwave, and wireless engineering consulting and technical advisory."
        />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>

      <ConsultingPage />
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
