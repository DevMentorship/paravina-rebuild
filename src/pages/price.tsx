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
        <title>Паравина - Цены</title>
      </Head>

      <h1 className="visually-hidden">Стоматология Паравина</h1>
      <h2 className="visually-hidden">
        Представляем первую в Самаре авторскую клинику эстетической стоматологии и косметологии Екатерины Паравиной.
      </h2>

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