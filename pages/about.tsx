import Head from 'next/head'
import Page from 'components/Page'
import { pageHeroes } from 'sage-data'
import PageHero from 'components/PageHero'
import MissionVisionSection from 'views/AboutPage/MissionVisionSection'
import ValuesGrid from 'views/AboutPage/ValuesGrid'
import StorySection from 'views/AboutPage/StorySection'

export default function AboutPage() {
  return (
    <Page title="About Us | SAGE — Shastry Associates Global Enterprises">
      <Head>
        <meta
          name="description"
          content="Learn about SAGE (Shastry Associates Global Enterprises) — empowering RF, microwave, and wireless engineers with practical training and global corporate advisory."
        />
      </Head>

      <PageHero {...pageHeroes['/about']} />
      <MissionVisionSection />
      <ValuesGrid />
      <StorySection />

    </Page>
  )
}
