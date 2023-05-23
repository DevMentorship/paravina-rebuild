import { TypedObject } from '@portabletext/types';

import { AboutHero } from '@/components/AboutHero/AboutHero';
import { Reviews } from '@/components/Reviews/Reviews';
import { Team } from '@/components/Team/Team';
import { client } from '@/lib/client';

export interface IAbout {
  _id: string;
  image: TypedObject;
  main_title: string;
  second_title: string;
  descr: string;
}

export default function About(props: IAbout) {
  return (
    <>
      <AboutHero key={props._id} {...props} />
      <Team />
      <Reviews />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "aboutData": *[_type == "aboutHero"]  {image, main_title, second_title, descr, _id}
  }`;
  const { aboutData } = await client.fetch(query);

  const data = aboutData[0];

  return { props: data };
};
