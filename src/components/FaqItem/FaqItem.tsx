import { useEffect, useRef, useState } from 'react';

import { IFaqItem } from '../Faq/Faq';
import styles from './FaqItem.module.css';

export const FaqItem = ({ data, isOpen, btnOnClick }: { data: IFaqItem; isOpen: boolean; btnOnClick: () => void }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

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
      <button className={styles.trigger} onClick={btnOnClick}>
        {data.title}
      </button>
      <p className={styles.description} ref={contentRef} style={{ height }}>
        {data.content}
      </p>
    </div>
  );
};
