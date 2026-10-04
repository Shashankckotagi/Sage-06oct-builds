import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function BlogIndexRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/newsletter');
  }, [router]);

  return null;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
