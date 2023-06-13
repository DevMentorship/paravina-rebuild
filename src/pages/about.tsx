import { TypedObject } from '@portabletext/types';
import Head from 'next/head';

import { AboutHero } from '@/components/AboutHero/AboutHero';
import { Map } from '@/components/Map/Map';
import { IReview, Reviews } from '@/components/Reviews/Reviews';
import { IDoctor, Team } from '@/components/Team/Team';
import { client } from '@/lib/client';

export interface IAbout {
  image: TypedObject;
  title: string;
  descr: string;
}

interface IProps {
  reviews: IReview[];
  about: IAbout;
  doctors: IDoctor[];
}

export default function About({ reviews, about, doctors }: IProps) {
  return (
    <>
      <Head>
        <title>Паравина - О Клинике</title>
      </Head>

      <AboutHero image={about.image} title={about.title} descr={about.descr} />
      <Team doctors={doctors} />
      <Reviews reviews={reviews} />
      <Map />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "review": *[_type == "review"],
    "aboutData": *[_type == "aboutHero"]  {image, title, descr},
    "doctors": *[_type == "doctor"]
  }`;
  const result = await client.fetch(query);

  const reviews = result.review[0].reviews;
  const about = result.aboutData[0];
  const doctors = result.doctors;

  return { props: { reviews, about, doctors } };
};
