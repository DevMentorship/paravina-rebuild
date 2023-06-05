import cn from 'classnames';

import { AccordionItem, IAccordionItem } from '../AccordionItem/AccordionItem';
import styles from './Accordion.module.css';

export interface IAccordion {
  items: IAccordionItem[];
  title: string;
  isVisible?: boolean;
  className?: string | undefined;
}

export const Accordion = ({ items, title, className }: IAccordion) => (
  <section className={cn('container', className)}>
    <h2 className={cn(styles.title, 'heading2')}>{title}</h2>
    <div className={styles.accordion}>
      {items?.map((item, idx) => (
        <AccordionItem key={idx} data={item} />
      ))}
    </div>
  </section>
);
