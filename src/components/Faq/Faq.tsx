import { FaqItem } from '../FaqItem/FaqItem';
import styles from './Faq.module.css';

export interface IFaqItem {
  title: string;
  content: string;
}

interface IProps {
  items: IFaqItem[];
}

export const Faq = ({ items }: IProps) => (
  <section className="container">
    <h2 className={styles.title}>
      Часто задаваемые <span>вопросы</span>
    </h2>
    <div className={styles.accordion}>
      {items?.map((item, idx) => (
        <FaqItem key={idx} data={item} />
      ))}
    </div>
  </section>
);
