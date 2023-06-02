import { IPromotionCards } from '@/components/Promotions/Promotions';
import { client } from '@/lib/client';

// interface IPromotion {
//   promotion:
// }

export default function Promotion({ promotion }: IPromotion) {
  return (
    <>
      <p>{promotion.title}</p>
    </>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "promotion"] {
      slug {
          current
      }
  }`;

  const promotions = await client.fetch(query);
  const paths = promotions.map((promotion: IPromotionCards) => ({
    params: {
      slug: promotion.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export const getStaticProps = async ({ params: { slug } }: IPromotionCards) => {
  const query = `*[_type == "promotion" && slug.current == '${slug}'][0]`;

  const promotion = await client.fetch(query);
  return { props: { promotion } };
};
