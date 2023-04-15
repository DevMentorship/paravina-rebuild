import Head from 'next/head';

import { client } from '@/lib/client';

import styles from '@/styles/Home.module.css';
import { PortableText } from '@portabletext/react';
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
  body: any;
  publishedAt: string;
  description: string;
}

interface IProps {
  posts: IPost[];
  total: number;
}

export default function Home({ posts }: IProps) {
  return (
    <>
      <Head>
        <title>Паравина</title>
      </Head>
      <h1 className='visually-hidden'>Стоматология Паравина</h1>
      <h2 className='visually-hidden'>
        Представляем первую в Самаре авторскую клинику эстетической стоматологии и косметологии Екатерины Паравиной.
      </h2>
      <section className='container'>
        {posts.map(post => (
          <div key='styles.title'>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.date}>{post.publishedAt}</p>
            <PortableText value={post.body} />
          </div>
        ))}
        <Tabs />
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc)  {_id, publishedAt, title, body, slug},
  }`;
  const { posts: result } = await client.fetch(query);

  const posts = result.map((post: any) => ({
    ...post,
    publishedAt: new Date(post.publishedAt).toLocaleString('default', { month: 'short', day: 'numeric' })
  }));

  return { props: { posts } };
};
