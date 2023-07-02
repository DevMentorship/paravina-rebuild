/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import styles from '@/components/Header/Header.module.css';

import { Button } from '../Button/Button';
import { Popup } from '../Popup/Popup';

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
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [open, setOpen] = useState(false);
  const route = useRouter();
  const { asPath } = route;

  useEffect(() => {
    if (open) {
      (document.querySelector('html') as HTMLElement).classList.add('overflow-hidden');
    } else {
      (document.querySelector('html') as HTMLElement).classList.remove('overflow-hidden');
    }
  }, [open]);

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
          <Button className={cn(styles['phone-mobile'], 'heading3')} onClick={() => setModalIsOpened(true)}>
            <strong>Записаться</strong>
          </Button>
          <div className={styles['header-address-mobile']}>
            <p className={cn(styles['desc'], 'paragraph')}>Нашу клинику можно найти по адресу:</p>
            <Link
              className={styles['link']}
              href="https://yandex.ru/maps/51/samara/house/novo_sadovaya_ulitsa_164a/YUkYdw9jSUcAQFtpfX5ycnpmYg==/?ll=50.186546%2C53.231725&utm_medium=mapframe&utm_source=maps&z=14"
            >
              Cамара, Ново-Садовая улица, 164А — Яндекс Карты
            </Link>
          </div>
        </nav>
        <Button href="tel:+79276922501" className={cn(styles.phone, 'heading2')}>
          <strong>+7 (927) 692-25-01</strong>
        </Button>
        <Button
          className={cn(styles['cta-button'], styles['phone'], 'heading3')}
          onClick={() => setModalIsOpened(true)}
        >
          <strong>Записаться</strong>
        </Button>
        <div className={styles['header-address']}>
          <p className={cn(styles['desc'], 'paragraph')}>Нашу клинику можно найти по адресу:</p>
          <Link
            className={styles['link']}
            href="https://yandex.ru/maps/51/samara/house/novo_sadovaya_ulitsa_164a/YUkYdw9jSUcAQFtpfX5ycnpmYg==/?ll=50.186546%2C53.231725&utm_medium=mapframe&utm_source=maps&z=14"
          >
            Cамара, Ново-Садовая улица, 164А — Яндекс Карты
          </Link>
        </div>
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
      <Popup popupRef={popupRef} modalIsOpened={modalIsOpened} setModalIsOpened={setModalIsOpened} />
    </header>
  );
};
