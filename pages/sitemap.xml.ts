import type { GetServerSideProps } from 'next';
import { teamMembers } from 'data/team.data';

const BASE_URL = 'https://shastryassociates.com';

const staticRoutes = [
  '',
  '/about',
  '/team',
  '/courses',
  '/services',
  '/mission',
  '/contact',
  '/blog',
  '/privacy-policy',
  '/cookies-policy',
  '/sitemap',
];

function generateSiteMap(members: typeof teamMembers): string {
  const currentDate = new Date().toISOString().split('T')[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Static Pages -->
  ${staticRoutes
    .map((route) => {
      const priority = route === '' ? '1.0' : route === '/team' || route === '/courses' ? '0.9' : '0.8';
      return `
    <url>
      <loc>${BASE_URL}${route}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${priority}</priority>
    </url>
  `;
    })
    .join('')}

  <!-- Dynamic Faculty Profile Pages -->
  ${members
    .map((member) => {
      return `
    <url>
      <loc>${BASE_URL}/team/${member.slug}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `;
    })
    .join('')}
</urlset>`;
}

export default function SiteMapXml() {
  // getServerSideProps will handle the response
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap(teamMembers);

  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
