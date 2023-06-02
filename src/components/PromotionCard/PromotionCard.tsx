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
  title: string;
}

export const PromotionCard = ({ body, footer, slug, title }: IPromotionCard) => {
  console.log();

  return (
    <li className={cn(styles.card, 'invisible-child')} data-child>
      {/* TODO: Сделать дату на картинке настраиваемой */}
      {/* <Image src={} alt={} width="0" height="0" sizes="100vw" className={styles.img} /> */}

      <div className={styles.content}>
        <div className={styles.wrapper}>
          <span className="paragraph primary-color">{}</span>
          <p className="paragraph">{title}</p>
        </div>

        <Link className={cn(styles.button, 'third-color')} href={`/promotion/${encodeURIComponent(slug.current)}`}>
          Подробнее
        </Link>
      </div>
    </li>
  );
};
