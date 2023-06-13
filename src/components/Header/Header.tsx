/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from '@/components/Header/Header.module.css';

import { Button } from '../Button/Button';

const pages = [
  { label: 'Главная', href: '/' },
  { label: 'Акции', href: '/promotions' },
  { label: 'Цены', href: '/price' },
  { label: 'О клинике', href: '/about' },
];

interface IProps {
  isVisible: boolean;
}

export const Header = ({ isVisible }: IProps) => {
  const [open, setOpen] = useState(false);
  const route = useRouter();
  const { asPath } = route;

  useEffect(() => {
    setOpen(false);
  }, [asPath]);

  return (
    <header className={cn(isVisible && styles['header-visible'], styles['header-wrapper'])}>
      <div className={styles.header}>
        <Link href="/">
          <Image
            src={
              'https://res.cloudinary.com/dkqwi0tah/image/upload/q_auto/v1685611696/Paravina-rebuild/header-logo_yb87e1.png'
            }
            width={384}
            height={110}
            alt="лого"
            className={cn(styles['header-logo'])}
          />
        </Link>
        <nav className={cn(styles.nav, open && styles.active)}>
          {pages.map(({ label, href }, index) => (
            <Link
              href={href}
              key={index}
              className={cn(styles['header-link'], 'heading2', href === asPath && styles['header-link-active'])}
            >
              {label}
            </Link>
          ))}
          <Button href="tel:+79276922501" className={cn(styles['phone-mobile'], 'heading2')}>
            <strong>+7 (927) 692-25-01</strong>
          </Button>
        </nav>
        <Button href="tel:+79276922501" className={cn(styles.phone, 'heading2')}>
          <strong>+7 (927) 692-25-01</strong>
        </Button>
        <button
          className={cn(styles.hamburger, open && styles['is-active'])}
          onClick={() => setOpen(!open)}
          tabIndex={0}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className="visually-hidden">Меню</span>
        </button>
      </div>
    </header>
  );
};
