import { PortableText } from '@portabletext/react';
import type { TypedObject } from '@portabletext/types';
import Head from 'next/head';

import { Faq, IFaq } from '@/components/Faq/Faq';
import { Gallery, IGalleryImages } from '@/components/Gallery/Gallery';
import { IPromotionCard } from '@/components/PromotionCard/PromotionCard';
import { Promotions } from '@/components/Promotions/Promotions';
import { IStandardImage, Standards } from '@/components/Standards/Standards';
import { ITabImages, Tabs } from '@/components/Tabs/Tabs';
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
  posts: IPost[];
  total: number;
  faq: IFaq[];
  promotionCard: IPromotionCard[];
  standards: IStandardImage[];
  gallery: IGalleryImages[];
  stomatology: ITabImages[];
  cosmetology: ITabImages[];
}

export default function Home({ posts, faq, promotionCard, standards, gallery, stomatology, cosmetology }: IProps) {
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

      <Promotions promotionCards={promotionCard} />
      <Tabs tabImages={{ cosmetology, stomatology }} />
      <Standards standardImages={standards} />
      <Gallery galleryImages={gallery} />
      <Faq items={faq} />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc)  {_id, publishedAt, title, body, slug},
    "faq": *[_type == "faq"], "promotionCard": *[_type == "promotionCard"], "gallery": *[_type == "gallery"],
    "standards": *[_type == "standards"], "stomatology": *[_type == "stomatology"],
    "cosmetology": *[_type == "cosmetology"],
  }`;
  const result = await client.fetch(query);

  const posts = result.posts.map((post: IPost) => ({
    ...post,
    publishedAt: new Date(post.publishedAt).toLocaleString('default', { month: 'short', day: 'numeric' }),
  }));

  const faq = result.faq[0].faqItems;
  const standards = result.standards[0].standardImages;
  const gallery = result.gallery[0].galleryImages;
  const stomatology = result.stomatology[0].stomatologyImages;
  const cosmetology = result.cosmetology[0].cosmetologyImages;
  const promotionCard = result.promotionCard[0].promotionCard;

  return { props: { posts, faq, promotionCard, standards, gallery, stomatology, cosmetology } };
};
