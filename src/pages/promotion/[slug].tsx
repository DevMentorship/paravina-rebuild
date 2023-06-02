import { PortableText } from '@portabletext/react';
import type { TypedObject } from '@portabletext/types';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

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
      <Link className={cn(styles.back, 'paragraph')} href={'/promotions'}>
        <Image
          src="https://res.cloudinary.com/dkqwi0tah/image/upload/f_auto,q_auto/v1685609956/Paravina-rebuild/arrow_wy5l6k.svg"
          alt="prev arrow"
          width={30}
          height={30}
        />
        Назад
      </Link>
      <div className={cn(styles.title, 'heading2')}>
        <PortableText value={promotion.title} />
      </div>
      <div className={cn(styles.body, 'paragraph')}>
        <PortableText value={promotion.body} />
      </div>
      <footer className={cn(styles.footer, 'paragraph')}>{promotion.footer}</footer>
      <Link className={cn(styles.backBtn, 'paragraph')} href={'/promotions'}>
        Смотреть другие акции
      </Link>
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
