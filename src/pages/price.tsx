import Head from 'next/head';

import { Accordion, IAccordion } from '@/components/Accordion/Accordion';
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

      {prices.map((price, index) => (
        <Accordion key={index} items={price.items} title={price.title} isVisible={false} />
      ))}
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
