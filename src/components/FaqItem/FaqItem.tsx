import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

import { IFaqItem } from '../Faq/Faq';
import styles from './FaqItem.module.css';

interface IProps {
  data: IFaqItem;
}

export const FaqItem = ({ data }: IProps) => {
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
    <div className={cn(styles.wrapper, isOpen && styles.active)}>
      <button className={cn(styles.trigger, 'heading4')} onClick={() => setOpen(!isOpen)}>
        {data.title}
      </button>
      <div className={styles.container} ref={contentRef} style={{ maxHeight }}>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </div>
  );
};
