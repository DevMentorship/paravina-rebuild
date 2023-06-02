import { PortableText } from '@portabletext/react';
import type { TypedObject } from '@portabletext/types';
import cn from 'classnames';

import { IPromotionCard } from '@/components/PromotionCard/PromotionCard';
import { client } from '@/lib/client';

import styles from './slug.module.css';

interface IPromotion {
  promotion: IPromotionCard;
  title: TypedObject;
  body: TypedObject;
  footer: string;
}

export default function Promotion({ promotion }: IPromotion) {
  return (
    <article className={styles.wrapper}>
      <div className={cn(styles.title, 'heading2')}>
        <PortableText value={promotion.title} />
      </div>
      <div className={cn(styles.body, 'paragraph')}>
        <PortableText value={promotion.body} />
      </div>
      <footer className={cn(styles.footer, 'paragraph')}>{promotion.footer}</footer>
    </article>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "promotion"] {
      slug {
          current
      }
  }`;

  const promotions: IPromotionCard[] = await client.fetch(query);
  const paths = promotions.map((promotion) => ({
    params: {
      slug: promotion.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const query = `*[_type == "promotion" && slug.current == '${params.slug}'][0]`;

  const promotion: IPromotionCard = await client.fetch(query);
  return { props: { promotion } };
};
