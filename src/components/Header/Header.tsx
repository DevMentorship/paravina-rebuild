/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '@/components/Header/Header.module.css';

import { Hero } from '../Hero/Hero';

const pages = [
  { label: 'Акции', href: '/' },
  { label: 'Услуги', href: '/' },
  { label: 'О клинике', href: '/about' },
];

interface IHeaderProps {
  isVisible: boolean;
}

export const Header = ({ isVisible }: IHeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles['header-wrapper']}>
      <div className={cn(isVisible && styles['header-visible'], styles[`header`])}>
        <Image src={'header-logo.svg'} width={290} height={80} alt="лого" className={cn(styles['header-logo'])} />
        <nav
          className={cn(styles['header-nav'], {
            [styles.active]: open,
          })}
        >
          {pages.map(({ label, href }, index) => (
            <Link href={href} key={index} className={styles['header-link']}>
              {label}
            </Link>
          ))}
        </nav>
        <button
          className={cn('hamburger', {
            'is-active': open,
          })}
          onClick={() => setOpen(!open)}
          tabIndex={0}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
      {!isVisible && <Hero />}
    </header>
  );
};
