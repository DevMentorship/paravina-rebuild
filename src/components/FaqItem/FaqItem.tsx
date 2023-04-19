import { useEffect, useRef, useState } from 'react';

import { IFaqItem } from '../Faq/Faq';
import styles from './FaqItem.module.css';

interface IProps {
  data: IFaqItem;
}

export const FaqItem = ({ data }: IProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;
      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={styles.wrapper}>
      <button className={styles.trigger} onClick={() => setOpen(!isOpen)}>
        {data.title}
      </button>
      <div
        className={styles.description}
        ref={contentRef}
        style={{ maxHeight: height }}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </div>
  );
};
