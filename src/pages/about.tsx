import { TypedObject } from '@portabletext/types';
import Head from 'next/head';

import { AboutHero } from '@/components/AboutHero/AboutHero';
import { IReview, Reviews } from '@/components/Reviews/Reviews';
import { ITeamImages, Team } from '@/components/Team/Team';
import { client } from '@/lib/client';

export interface IAbout {
  image: TypedObject;
  title: string;
  descr: string;
}

interface IProps {
  reviews: IReview[];
  about: IAbout;
  team: ITeamImages[];
}

export default function About({ reviews, about, team }: IProps) {
  return (
    <>
      <Head>
        <title>Паравина - О Клинике</title>
      </Head>

      <AboutHero image={about.image} title={about.title} descr={about.descr} />
      <Team teamImages={team} />
      <Reviews reviews={reviews} />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "review": *[_type == "review"],
    "aboutData": *[_type == "aboutHero"]  {image, title, descr},
    "team": *[_type == "team"]
  }`;
  const result = await client.fetch(query);

  const reviews = result.review[0].reviews;
  const about = result.aboutData[0];
  const team = result.team[0].teamImages;

  return { props: { reviews, about, team } };
};
