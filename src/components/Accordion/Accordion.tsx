import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

import { AccordionItem, IAccordionItem } from '../AccordionItem/AccordionItem';
import styles from './Accordion.module.css';

export interface IAccordion {
  items: IAccordionItem[];
  title: string;
  isVisible: boolean;
}

export const Accordion = ({ items, title, isVisible }: IAccordion) => {
  const [isOpened, setIsOpened] = useState<boolean>(isVisible ? true : false);
  const [maxHeight, setMaxHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpened) {
      const contentEl = ref.current as HTMLDivElement;
      setMaxHeight(contentEl.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isOpened]);

  return (
    <section className="container">
      {isVisible ? (
        <h2 className={cn(styles.title, 'heading2')}>{title}</h2>
      ) : (
        <button
          onClick={() => (isOpened ? setIsOpened(false) : setIsOpened(true))}
          className={cn(styles.btn, 'heading2')}
        >
          {title}
        </button>
      )}
      <div
        ref={ref}
        className={cn(styles.accordion, isOpened ? styles.visible : styles.invisible)}
        style={{ maxHeight }}
      >
        {items?.map((item, idx) => (
          <AccordionItem key={idx} data={item} tabIndex={isOpened ? 0 : -1} />
        ))}
      </div>
    </section>
  );
};
