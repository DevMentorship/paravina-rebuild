import cn from 'classnames';

import { AccordionItem, IAccordionItem } from '../AccordionItem/AccordionItem';
import styles from './Accordion.module.css';

export interface IAccordion {
  items: IAccordionItem[];
  title: string;
}

export const Accordion = ({ items, title }: IAccordion) => (
  <section className="container">
    <h2 className={cn(styles.title, 'heading2')}>{title}</h2>
    <div className={styles.accordion}>
      {items?.map((item, idx) => (
        <AccordionItem key={idx} data={item} />
      ))}
    </div>
  </section>
);
