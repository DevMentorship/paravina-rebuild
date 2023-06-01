import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

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

export const Header = ({ isVisible }: IHeaderProps) => (
  <header className={styles['header-wrapper']}>
    <div className={cn(isVisible && styles['header-visible'], styles[`header`])}>
      <Image
        src={
          'https://res.cloudinary.com/dkqwi0tah/image/upload/q_auto/v1685611696/Paravina-rebuild/header-logo_yb87e1.png'
        }
        width={384}
        height={110}
        alt="лого"
        className={cn(styles['header-logo'])}
      />
      <nav className={styles['header-nav']}>
        {pages.map(({ label, href }, index) => (
          <Link href={href} key={index} className={styles['header-link']}>
            {label}
          </Link>
        ))}
      </nav>
    </div>
    {!isVisible && <Hero />}
  </header>
);
