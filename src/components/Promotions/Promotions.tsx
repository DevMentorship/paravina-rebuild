import { IPromotionCard, PromotionCard } from '@/components/PromotionCard/PromotionCard';
import useElementOnScreen from '@/hooks/useElementOnScreen';
import { urlFor } from '@/lib/client';

import styles from './Promotions.module.css';

export interface IPromotionCards {
  promotion: IPromotionCard[];
}

export const Promotions = ({ promotion }: IPromotionCards) => {
  const { ref } = useElementOnScreen();
  const sortedPromotions = promotion.sort((a, b) => a.index - b.index);

  return (
    <section className="container" ref={ref}>
      <ul className={styles.promotions}>
        {sortedPromotions.map((promo, index) => (
          <PromotionCard
            key={index}
            body={promo.body}
            slug={promo.slug}
            footer={promo.footer}
            title={promo.title}
            mainImage={urlFor(promo.mainImage).url()}
            alt={promo.alt}
            dateImage={promo.dateImage}
            icon={urlFor(promo.icon).url()}
            index={promo.index}
          />
        ))}
      </ul>
    </section>
  );
};
