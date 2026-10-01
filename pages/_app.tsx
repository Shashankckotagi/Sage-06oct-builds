import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';

import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import NewsletterModal from 'components/NewsletterModal';
import WaveCta from 'components/WaveCta';
import { NewsletterModalContextProvider, useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { NavItems } from 'types';

function getNavItems(setIsModalOpened: (opened: boolean) => void): NavItems {
  return [
    { title: 'Home', href: '/' },
    {
      title: 'About Us',
      href: '/about',
      subItems: [
        { title: 'Meet Our Team', href: '/team' },
        { title: 'Mission & Vision', href: '/about#mission' },
      ],
    },
    {
      title: 'Services',
      href: '/services',
      subItems: [
        { title: 'Courses', href: '/courses' },
        { title: 'Tutorials', href: '/courses#tutorials' },
        { title: 'Workshops', href: '/services#workshops' },
        { title: 'Training', href: '/services#training' },
        { title: 'Consulting', href: '/services#consulting' },
      ],
    },
    {
      title: 'Events',
      href: '/events',
      subItems: [
        { title: 'Upcoming & Past Events', href: '/events' },
        { title: 'Photo Gallery', href: '/events#gallery' },
      ],
    },
    {
      title: 'News',
      href: '#',
      subItems: [
        {
          title: 'Newsletter',
          onClick: () => setIsModalOpened(true),
        },
      ],
    },
    { title: 'Contact Us', href: '/contact', outlined: true },
  ];
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <ColorModeScript />
      <GlobalStyle />

      <NewsletterModalContextProvider>
        <AppContent Component={Component} pageProps={pageProps} />
      </NewsletterModalContextProvider>
    </>
  );
}

function AppContent({ Component, pageProps }: any) {
  const { setIsModalOpened } = useNewsletterModalContext();
  const navItems = getNavItems(setIsModalOpened);

  return (
    <NavigationDrawer items={navItems}>
      <Modals />
      <Navbar items={navItems} />
      <Component {...pageProps} />
      <WaveCta />
      <Footer />
    </NavigationDrawer>
  );
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
  if (!isModalOpened) {
    return null;
  }
  return <NewsletterModal onClose={() => setIsModalOpened(false)} />;
}

export default MyApp;
