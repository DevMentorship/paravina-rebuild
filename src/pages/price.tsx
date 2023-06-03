import Head from 'next/head';

import { IPriceList, PriceList } from '@/components/PriceList/PriceList';
import { IPromotionCard } from '@/components/PromotionCard/PromotionCard';
import { Promotions } from '@/components/Promotions/Promotions';
import { client } from '@/lib/client';

interface IProps {
  promotions: IPromotionCard[];
  price: IPriceList[];
}

export default function Home({ promotions, price }: IProps) {
  return (
    <>
      <Head>
        <title>Паравина - Цены</title>
      </Head>

      <h1 className="visually-hidden">Стоматология Паравина</h1>
      <h2 className="visually-hidden">
        Представляем первую в Самаре авторскую клинику эстетической стоматологии и косметологии Екатерины Паравиной.
      </h2>

      <PriceList price={price} />
      <Promotions promotion={promotions} />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "promotions": *[_type == "promotion"],
    "price": *[_type == "price"],
  }`;

  const { promotions, price } = await client.fetch(query);

  return { props: { promotions, price } };
};
