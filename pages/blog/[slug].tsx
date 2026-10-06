import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function BlogSlugRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/newsletter');
  }, [router]);

  return null;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
