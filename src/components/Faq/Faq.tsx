import { useState } from 'react';
import { ReactNode } from 'react';

import { FaqItem } from '../FaqItem/FaqItem';
import styles from './Faq.module.css';

export interface IFaqItem {
  title: string;
  content: ReactNode;
}

interface IProps {
  items: IFaqItem[];
}

export const Faq = ({ items }: IProps) => {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const handleClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <section className="container">
      <h2 className={styles.title}>
        Часто задаваемые <span>вопросы</span>
      </h2>
      <div className={styles.accordion}>
        {items?.map((item, idx) => (
          <FaqItem key={idx} data={item} isOpen={idx === currentIdx} btnOnClick={() => handleClick(idx)} />
        ))}
      </div>
    </section>
  );
};
