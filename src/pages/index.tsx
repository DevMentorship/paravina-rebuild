import type { TypedObject } from '@portabletext/types';
import Head from 'next/head';

import { Faq, IFaq } from '@/components/Faq/Faq';
import { Gallery } from '@/components/Gallery/Gallery';
import { Standards } from '@/components/Standards/Standards';
import { Tabs } from '@/components/Tabs/Tabs';
import { client } from '@/lib/client';

export interface IPost {
  _id: string;
  slug: {
    current: string;
  };
  mainImage: {
    caption: string;
  };
  title: string;
  body: TypedObject;
  publishedAt: string;
  description: string;
}

interface IProps {
  faq: IFaq[];
}

export default function Home({ faq }: IProps) {
  return (
    <>
      <Head>
        <title>Паравина</title>
      </Head>

      <h1 className="visually-hidden">Стоматология Паравина</h1>
      <h2 className="visually-hidden">
        Представляем первую в Самаре авторскую клинику эстетической стоматологии и косметологии Екатерины Паравиной.
      </h2>

      <Tabs />
      <Standards />
      <Gallery />
      <Faq items={faq} />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "faq": *[_type == "faq"], 
  }`;
  const result = await client.fetch(query);

  const faq = result.faq[0].faqItems;

  return { props: { faq } };
};
