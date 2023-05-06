import cn from 'classnames';
import { useEffect } from 'react';

import styles from './PromotionPopup.module.css';

interface IProps {
  active: boolean;
  toggle: (arg0: boolean) => void;
  header: string;
  text: string;
  footer: string;
}

export const PromotionPopup = ({ active, toggle, header, footer }: IProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggle(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle]);

  return (
    <div
      className={cn(styles.back, active && styles.active)}
      onClick={() => toggle(false)}
      onKeyDown={() => toggle(false)}
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
        <h3 className={cn(styles.header, 'heading2', 'secondary-color')}>{header}</h3>
        {/* TODO: Сделать вместо модалок отдельные страницы */}
        {/* <p className={cn('paragraph', 'secondary-color')} dangerouslySetInnerHTML={{ __html: text }} /> */}
        <p className={styles.footer}>{footer}</p>
      </div>
    </div>
  );
};
