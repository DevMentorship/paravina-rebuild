import Image from 'next/image';

import { promotionsData } from '@/data/promotions';

import { PromotionCard } from '../PromotionItem/PromotionCard';
import styles from './Promotions.module.css';

export const Promotions = () => (
  <section className="container">
    <ul className={styles['promotions-list']}>
      {promotionsData.map((item, index) => (
        <li key={index} className={styles.promotion}>
          <Image
            src={`/promotions-image/promotions-${index + 1}.png`}
            alt={`${item.alt}`}
            width={200}
            height={200}
            className={styles.img}
          />
          <PromotionCard
            key={index}
            description={item.description}
            header={item.header}
            text={item.text}
            footer={item.footer}
          />
        </li>
      ))}
    </ul>
  </section>
);
