import Head from 'next/head';
import React from 'react';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  formatTitle,
} from 'utils/seo';

export interface SEOHeadProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
  noIndex?: boolean;
}

export default function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  jsonLd,
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = formatTitle(title);
  
  // Format canonical URL
  const canonicalUrl = canonicalPath
    ? canonicalPath.startsWith('http')
      ? canonicalPath
      : `${SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`
    : undefined;

  // Format absolute image URL for OG
  const absoluteImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      {/* Primary HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Robots Directives */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      )}

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter / X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />

      {/* JSON-LD Structured Data */}
      {jsonLdArray.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
