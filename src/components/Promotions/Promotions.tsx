import { IPromotionCard, PromotionCard } from '@/components/PromotionCard/PromotionCard';
import useElementOnScreen from '@/hooks/useElementOnScreen';
import { urlFor } from '@/lib/client';

import styles from './Promotions.module.css';

interface IPromotionCards {
  promotionCards: IPromotionCard[];
}

export const Promotions = ({ promotionCards }: IPromotionCards) => {
  const { ref } = useElementOnScreen();
  return (
    <section className="container" ref={ref}>
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
};
