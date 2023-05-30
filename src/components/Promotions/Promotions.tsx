import { IPromotionCard, PromotionCard } from '@/components/PromotionCard/PromotionCard';
import { urlFor } from '@/lib/client';

import styles from './Promotions.module.css';

interface IPromotionCards {
  promotionCards: IPromotionCard[];
}

export const Promotions = ({ promotionCards }: IPromotionCards) => (
  <section className="container">
    <ul className={styles.promotions}>
      {promotionCards.map((promotionCard, index) => (
        <PromotionCard
          key={index}
          url={urlFor(promotionCard).url()}
          firstWords={promotionCard.firstWords}
          description={promotionCard.description}
          header={promotionCard.header}
          text={promotionCard.text}
          footer={promotionCard.footer}
          alt={promotionCard.alt}
        />
      ))}
    </ul>
  </section>
);
