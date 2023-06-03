import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

import styles from './PriceList.module.css';

export interface IPrice {
  price: IPriceList[];
}

export interface IPriceList {
  title: string;
  description: number;
}

export const PriceList = ({ price }: IPrice) => {
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
        <h2 className={styles.title}>
          <span>Общие работы</span>
          <button className={cn(styles.trigger)} onClick={() => setOpen(!isOpen)}></button>
        </h2>
        <div className={styles.container} ref={contentRef} style={{ maxHeight }}>
          {price?.map((elem, index) => (
            <p className={styles.list} key={index}>
              <span>{elem.title}</span>
              <span>{elem.description}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
