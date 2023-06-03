import cn from 'classnames';
import { useState } from 'react';

import useElementOnScreen from '@/hooks/useElementOnScreen';

import styles from './PriceList.module.css';

export interface IPrice {
  price: IPriceList[];
}

export interface IPriceList {
  title: string;
  description: number;
}

export const PriceList = ({ price }: IPrice) => {
  const [open, setOpen] = useState(false);
  const { ref } = useElementOnScreen();

  return (
    <section className="container" ref={ref}>
      <div className={cn(styles.prices, 'invisible-child')} data-child>
        <h2 className={styles.title} data-child>
          <span>Общие работы</span>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            {open ? <>-</> : <>+</>}
          </button>
        </h2>
        {open &&
          price?.map((elem, index) => (
            <p className={styles.list} key={index}>
              <span>{elem.title}</span>
              <span>{elem.description}</span>
            </p>
          ))}
      </div>
    </section>
  );
};
