import { PortableText } from '@portabletext/react';
import { createClient } from '@sanity/client';
import Head from 'next/head';

import { Faq } from '@/components/Faq/Faq';
import { Gallery } from '@/components/Gallery/Gallery';
import { Hero } from '@/components/Hero/Hero';
import { Standards } from '@/components/Standards/Standards';
import { Tabs } from '@/components/Tabs/Tabs';

export interface IPost {
  _id: string;
  slug: {
    current: string;
  };
  mainImage: {
    caption: string;
  };
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  publishedAt: string;
  description: string;
}

export interface IFaq {
  title: string;
  content: string;
}

export interface IProps {
  posts: IPost[];
  total: number;
  faqItems: IFaq[];
}

export default function Home({ posts, faqItems }: IProps) {
  return (
    <>
      <Head>
        <title>Паравина</title>
      </Head>

      <h1 className="visually-hidden">Стоматология Паравина</h1>
      <h2 className="visually-hidden">
        Представляем первую в Самаре авторскую клинику эстетической стоматологии и косметологии Екатерины Паравиной.
      </h2>
      <section className="container">
        {posts?.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.publishedAt}</p>
            <PortableText value={post.body} />
          </div>
        ))}
      </section>

      <Tabs />
      <Standards />
      <Gallery />
      <Faq items={faqItems} />
      <Hero />
    </>
  );
}

// Temporary hide getStaticProps
const client = createClient({
  projectId: 'tbbsybnu',
  dataset: 'production',
  apiVersion: '2023-04-24',
  useCdn: false,
});
export const getStaticProps = async () => {
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc)  {_id, publishedAt, title, body, slug},
  }`;
  const { posts: result } = await client.fetch(query);

  const posts = result.map((post: any) => ({
    ...post,
    publishedAt: new Date(post.publishedAt).toLocaleString('default', { month: 'short', day: 'numeric' }),
  }));

  const faq = await client.fetch(`*[_type == "faq"]`);
  const faqItems = faq[0].faqItems;

  return { props: { posts, faqItems } };
};
