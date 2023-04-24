import cn from 'classnames';
import { useEffect } from 'react';

import styles from './PopupItem.module.css';

export interface ModalProps {
  active: boolean;
  setActive: any;
  header: string;
  text: string;
  footer: string;
}

export const ModalItem = ({ active, setActive, header, text, footer }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActive(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setActive]);

  return (
    <div
      className={active ? styles.back + ' ' + styles['back-active'] : styles.back}
      onClick={() => setActive(false)}
      onKeyDown={() => setActive(false)}
      role="link"
      tabIndex={0}
    >
      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="link"
        tabIndex={0}
      >
        <h1 className={cn(styles.header, 'heading2', 'secondary-color')}>{header}</h1>
        <p className={cn('paragraph', 'secondary-color')} dangerouslySetInnerHTML={{ __html: text }} />
        <p className={styles.footer}>{footer}</p>
      </div>
    </div>
  );
};
