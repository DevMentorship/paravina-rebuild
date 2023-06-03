import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

import styles from './PriceList.module.css';

export interface IPrices {
  prices: IPriceList[];
}

export interface IPriceList {
  title: string;
  service: string;
  price: string;
}

export const PriceList = ({ prices }: IPrices) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;
      setMaxHeight(contentEl.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isOpen]);

  return (
    <section className="container">
      <div className={cn(styles.prices, isOpen && styles.active)}>
        <h2 className={styles.header}>
          <span>Общие работы</span>
          <button className={cn(styles.trigger)} onClick={() => setOpen(!isOpen)}></button>
        </h2>
        <div className={styles.container} ref={contentRef} style={{ maxHeight }}>
          {prices?.map((price: IPriceList, index) => (
            <p className={styles.list} key={index}>
              <span>{price.title}</span>
              <span>{price.price}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
