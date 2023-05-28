import { PromotionCard } from '@/components/PromotionCard/PromotionCard';
import { promotions } from '@/data/promotions';
import useElementOnScreen from '@/hooks/useElementOnScreen';

import styles from './Promotions.module.css';

export const Promotions = () => {
  const { ref } = useElementOnScreen();
  return (
    <section className="container" ref={ref}>
      <ul className={styles.promotions}>
        {promotions.map(({ alt, firstWords, description, header, text, footer }, index) => (
          <PromotionCard
            key={index}
            firstWords={firstWords}
            description={description}
            header={header}
            text={text}
            footer={footer}
            alt={alt}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
};
