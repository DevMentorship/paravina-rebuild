import { useState } from 'react';
import styles from './Faq.module.css';
import { FaqData } from '../FaqItem/types';
import { FaqItem } from '../FaqItem/FaqItem';

export const Faq = ({ items }: { items: Array<FaqData> }) => {

  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <section className='container'>
      <h2 className={styles.title}>
        Часто задаваемые <span>вопросы</span>
      </h2>
      <div className={styles.accordion}>
        {items?.map((item, idx) => (
          <FaqItem key={idx} data={item} isOpen={idx === currentIdx}
            btnOnClick={() => btnOnClick(idx)} />
        ))}
      </div>
    </section>
  );
};
