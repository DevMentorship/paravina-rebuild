import Head from 'next/head';

import { IAccordion } from '@/components/Accordion/Accordion';
import { PricesTab } from '@/components/PricesTab/PricesTab';
import { client } from '@/lib/client';

interface IProps {
  prices: IAccordion[];
}

export default function Home({ prices }: IProps) {
  return (
    <>
      <Head>
        <title>Паравина - Цены</title>
      </Head>

      <PricesTab prices={prices} />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "prices": *[_type == "price"],
  }`;

  const { prices } = await client.fetch(query);
  return { props: { prices } };
};
