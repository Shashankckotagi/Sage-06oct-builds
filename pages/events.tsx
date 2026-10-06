import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import EventsPageView from 'views/EventsPage/EventsPageView';
import { getEvents } from 'data/events.data';

export default function EventsPage({ events }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Events & Workshops | SAGE - Shastry Associates Global Enterprises</title>
        <meta
          name="description"
          content="Explore upcoming and past SAGE events, hackathons, antenna design workshops, and technical engineering bootcamps."
        />
      </Head>
      <EventsPageView events={events} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      events: getEvents(),
    },
  };
}
