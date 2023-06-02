import { IPromotionCard, PromotionCard } from '@/components/PromotionCard/PromotionCard';
import useElementOnScreen from '@/hooks/useElementOnScreen';
import { urlFor } from '@/lib/client';

import styles from './Promotions.module.css';

export interface IPromotionCards {
  promotion: IPromotionCard[];
}

export const Promotions = ({ promotion }: IPromotionCards) => {
  const { ref } = useElementOnScreen();
  console.log(promotion);
  return (
    <section className="container" ref={ref}>
      <ul className={styles.promotions}>
        {promotion.map((promo, index) => (
          <PromotionCard
            key={index}
            // url={urlFor(promo).url()}
            body={promo.body}
            slug={promo.slug}
            footer={promo.footer}
            title={promo.title}
          />
        ))}
      </ul>
    </section>
  );
};
