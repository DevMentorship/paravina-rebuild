import { AboutHero } from '@/components/AboutHero/AboutHero';
import { IReview, Reviews } from '@/components/Reviews/Reviews';
import { Team } from '@/components/Team/Team';
import { client } from '@/lib/client';

interface IPostAbout {
  reviews: IReview[];
}

export default function About({ reviews }: IPostAbout) {
  return (
    <>
      <AboutHero />
      <Team />
      <Reviews reviews={reviews} />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "review": *[_type == "review"]
  }`;
  const result = await client.fetch(query);

  const reviews = result.review[0].reviews;

  return { props: { reviews } };
};
