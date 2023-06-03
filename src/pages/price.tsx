import Head from 'next/head';

import { IPromotionCard } from '@/components/PromotionCard/PromotionCard';
import { Promotions } from '@/components/Promotions/Promotions';
import { client } from '@/lib/client';
import { IPriceList, PriceList } from '@/components/PriceList/PriceList';

interface IProps {
  promotions: IPromotionCard[];
  prices: IPriceList[];
}

export default function Home({ promotions, prices }: IProps) {
  return (
    <>
      <Head>
        <title>Паравина - Цены</title>
      </Head>

      <h1 className="visually-hidden">Стоматология Паравина</h1>
      <h2 className="visually-hidden">
        Представляем первую в Самаре авторскую клинику эстетической стоматологии и косметологии Екатерины Паравиной.
      </h2>

      <PriceList prices={prices} />
      <Promotions promotion={promotions} />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "promotions": *[_type == "promotion"],
    "prices": *[_type == "price"],
  }`;

  const { promotions, prices } = await client.fetch(query);
  return { props: { promotions, prices } };
};
