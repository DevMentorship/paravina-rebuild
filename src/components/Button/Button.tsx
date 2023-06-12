import cn from 'classnames';
import Link from 'next/link';
import { ReactEventHandler, ReactNode } from 'react';

import styles from '@/components/Button/Button.module.css';

interface IButton {
  type?: 'secondary' | 'link';
  children?: ReactNode;
  className?: string;
  href?: string;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  onSubmit?: ReactEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, type, className, href, onClick, onSubmit }: IButton) => (
  <>
    {!href ? (
      <button
        onClick={onClick}
        onSubmit={onSubmit}
        className={cn(styles.button, 'heading3', type === 'secondary' && styles.secondary, className)}
      >
        {children}
      </button>
    ) : (
      <Link href={href} className={cn(styles.button, 'heading3', type === 'secondary' && styles.secondary, className)}>
        {children}
      </Link>
    )}
  </>
);
