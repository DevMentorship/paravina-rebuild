import { TypedObject } from '@portabletext/types';

import { AboutHero } from '@/components/AboutHero/AboutHero';
import { Reviews } from '@/components/Reviews/Reviews';
import { Team } from '@/components/Team/Team';
import { client } from '@/lib/client';

export interface IAbout {
  image: TypedObject;
  title: string;
  descr: string;
}

export default function About({ image, title, descr }: IAbout) {
  return (
    <>
      <AboutHero image={image} title={title} descr={descr} />
      <Team />
      <Reviews />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "aboutData": *[_type == "aboutHero"]  {image, title, descr,}
  }`;
  const { aboutData } = await client.fetch(query);

  const data = aboutData[0];
  return { props: data };
};
