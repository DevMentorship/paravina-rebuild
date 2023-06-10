import cn from 'classnames';
import { useState } from 'react';

import { Accordion, IAccordion } from '../Accordion/Accordion';
import styles from './PricesTab.module.css';
import Link from 'next/link';

interface IPricesTabProps {
  prices: IAccordion[];
}

export const PricesTab = ({ prices }: IPricesTabProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Детская стоматология');

  return (
    <section className="container">
      <div className={styles.wrapper}>
        <div className={styles['triggers-wrapper']}>
          <div className={styles.triggers}>
            {prices.map((price, index) => (
              <Link
                href=" "
                key={index}
                className={cn(styles.trigger, selectedCategory === price.title && styles['trigger--active'])}
                onClick={() => setSelectedCategory(price.title)}
              >
                {price.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.items}>
        {prices.map((price, index) => (
          <Accordion
            key={index}
            items={price.items}
            title={price.title}
            className={cn(styles['item-invisible'], price.title !== selectedCategory && styles['item-visible'])}
          />
        ))}
      </div>
    </section>
  );
};
