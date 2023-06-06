import { PortableText } from '@portabletext/react';
import type { TypedObject } from '@portabletext/types';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from './PromotionCard.module.css';

export interface IPromotionCard {
  body: TypedObject;
  footer: string;
  slug: {
    current: string;
  };
  title: TypedObject;
  mainImage: string;
  alt: string;
  dateImage: string;
  icon: string;
  index: number;
}

export const PromotionCard = ({ slug, title, mainImage, alt, dateImage, icon }: IPromotionCard) => (
  <li className={cn(styles.card, 'invisible-child', 'start-animation-side-left')} data-child>
    <div className={cn(styles.date, 'paragraph')}>
      {dateImage}
      <Image src={icon} alt={'icon'} width="60" height="60" />
    </div>
    <Image src={mainImage} alt={alt} width="0" height="0" sizes="100vw" className={styles.img} />

    <div className={styles.content}>
      <div className={styles.wrapper}>
        <PortableText value={title} />
      </div>

      <Link className={cn(styles.button, 'third-color')} href={`/promotion/${encodeURIComponent(slug.current)}`}>
        Подробнее
      </Link>
    </div>
  </li>
);
