import { TypedObject } from '@portabletext/types';

import { AboutHero } from '@/components/AboutHero/AboutHero';
import { IReview, Reviews } from '@/components/Reviews/Reviews';
import { Team } from '@/components/Team/Team';
import { client } from '@/lib/client';

export interface IAbout {
  image: TypedObject;
  title: string;
  descr: string;
}

interface IProps {
  reviews: IReview[];
  about: IAbout;
}

export default function About({ reviews, about }: IProps) {
  return (
    <>
      <AboutHero image={about.image} title={about.title} descr={about.descr} />
      <Team />
      <Reviews reviews={reviews} />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "review": *[_type == "review"],
    "aboutData": *[_type == "aboutHero"]  {image, title, descr}
  }`;
  const result = await client.fetch(query);

  const reviews = result.review[0].reviews;
  const about = result.aboutData[0];


  return { props: { reviews, about } };
};
