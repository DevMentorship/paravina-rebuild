import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

import styles from './AccordionItem.module.css';

export interface IAccordionItem {
  title?: string;
  content?: string;
  subItems?: {
    code?: string;
    description?: string;
    price?: string;
  }[];
}

interface IProps {
  data: IAccordionItem;
}

export const AccordionItem = ({ data: { title, content, subItems } }: IProps) => {
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
        {title}
      </button>

      <div className={styles.content} ref={contentRef} style={{ maxHeight }}>
        {content && <div className={styles.description} dangerouslySetInnerHTML={{ __html: content }} />}
        {subItems && (
          <table>
            <tbody>
              {subItems.map(({ code, description, price }, index) => (
                <tr key={index}>
                  <td>
                    <p className={styles.description}>{code}</p>
                  </td>
                  <td>
                    <p className={styles.description}>{description}</p>
                  </td>
                  <td>
                    <p className={styles.description}>{price}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
