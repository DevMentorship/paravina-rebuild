import imageUrlBuilder from '@sanity/image-url';

import { IPromotionCard, PromotionCard } from '@/components/PromotionCard/PromotionCard';
import { client } from '@/lib/client';

import styles from './Promotions.module.css';

interface IPromotionCards {
  promotionCards: IPromotionCard[];
}

const builder = imageUrlBuilder(client);

const urlFor = (source: IPromotionCard) => builder.image(source);

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
