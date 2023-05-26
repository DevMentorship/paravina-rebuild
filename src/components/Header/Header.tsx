import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/Header/Header.module.css';

const pages = [
  { label: 'Главная', href: '/' },
  { label: 'Акции', href: '/promotions' },
  { label: 'Цены', href: '/prices' },
  { label: 'О клинике', href: '/about' },
];

export const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.logo}>
        <Image src={'header-logo.svg'} width={100} height={100} alt="лого" className={styles.img} />
      </div>
      <div className={styles.nav}>
        {pages.map(({ label, href }, index) => (
          <Link href={href} key={index} className={styles.link}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  </header>
);
