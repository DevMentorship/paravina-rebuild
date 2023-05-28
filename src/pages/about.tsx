import { AboutHero } from '@/components/AboutHero/AboutHero';
import { IReview, Reviews } from '@/components/Reviews/Reviews';
import { Team } from '@/components/Team/Team';
import { client } from '@/lib/client';

interface IPostAbout {
  review: IReview[];
}

export default function About({ review }: IPostAbout) {
  return (
    <>
      <AboutHero />
      <Team />
      <Reviews review={review} />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "review": *[_type == "review"]
  }`;
  const result = await client.fetch(query);

  const review = result.review[0].reviews;

  return { props: { review } };
};
