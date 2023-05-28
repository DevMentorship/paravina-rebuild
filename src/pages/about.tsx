import { TypedObject } from '@portabletext/types';

import { AboutHero } from '@/components/AboutHero/AboutHero';
import { Reviews } from '@/components/Reviews/Reviews';
import { Team } from '@/components/Team/Team';
import { client } from '@/lib/client';

export interface IAbout {
  _id: string;
  image: TypedObject;
  title: string;
  descr: string;
}

export default function About(props: IAbout) {
  return (
    <>
      <AboutHero {...props} />
      <Team />
      <Reviews />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "aboutData": *[_type == "aboutHero"]  {image, title, descr, _id}
  }`;
  const { aboutData } = await client.fetch(query);

  const data = aboutData[0];
  return { props: data };
};
