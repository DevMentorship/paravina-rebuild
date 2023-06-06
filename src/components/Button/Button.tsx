import cn from 'classnames';
import { ReactNode } from 'react';

import styles from '@/components/Button/Button.module.css';

interface IButton {
  type: 'primary' | 'secondary';
  children?: ReactNode;
  className?: string;
}

export const Button = ({ children, type, className }: IButton) => (
  <>
    <button
      className={cn(
        styles.button,
        {
          [styles.primary]: type === 'primary',
          [styles.secondary]: type === 'secondary',
        },
        className,
      )}
    >
      {children}
    </button>
  </>
);
