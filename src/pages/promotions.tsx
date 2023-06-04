import Head from 'next/head';

import { IPromotionCard } from '@/components/PromotionCard/PromotionCard';
import { Promotions } from '@/components/Promotions/Promotions';
import { client } from '@/lib/client';

interface IProps {
  promotions: IPromotionCard[];
}

export default function Home({ promotions }: IProps) {
  return (
    <>
      <Head>
        <title>Паравина - Акции</title>
      </Head>

      <Promotions promotion={promotions} />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "promotions": *[_type == "promotion"],
  }`;

  const { promotions } = await client.fetch(query);

  return { props: { promotions } };
};
