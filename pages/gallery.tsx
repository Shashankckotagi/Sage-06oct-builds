import SEOHead from 'components/SEOHead';
import { DEFAULT_DESCRIPTION } from 'utils/seo';
import GalleryPageView from 'views/GalleryPage/GalleryPageView';

export default function GalleryPage() {
  return (
    <>
      <SEOHead
        title="Photo Gallery | SAGE Media & Highlights"
        description="Browse photos, event highlights, and memories from past SAGE RF, microwave, and wireless engineering workshops and seminars."
        canonicalPath="/gallery"
        ogType="website"
      />
      <GalleryPageView />
    </>
  );
}
