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
}

export const Button = ({ children, type, className, href, onClick }: IButton) => (
  <>
    {!href ? (
      <button onClick={onClick} className={cn(styles.button, type === 'secondary' && styles.secondary, className)}>
        {children}
      </button>
    ) : (
      <Link href={href} className={cn(styles.button, type === 'link' && styles.link, className)}>
        {children}
      </Link>
    )}
  </>
);
