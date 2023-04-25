import cn from 'classnames';

import { FaqItem } from '@/components/FaqItem/FaqItem';

import styles from './Faq.module.css';

export interface IFaq {
  title: string;
  content: string;
}

interface IProps {
  items: IFaq[];
}

export const Faq = ({ items }: IProps) => (
  <section className="container">
    <h2 className={cn(styles.title, 'heading2')}>
      Часто задаваемые <span className="primary-color">вопросы</span>
    </h2>
    <div className={styles.accordion}>
      {items?.map((item, idx) => (
        <FaqItem key={idx} data={item} />
      ))}
    </div>
  </section>
);
