import Link from 'next/link';

import styles from '@/components/Header/Header.module.css';

const pages = [
  { label: 'Акции', href: '/' },
  { label: 'Услуги', href: '/' },
  { label: 'О клинике', href: '/' },
];

export const Header = () => (
  <header className={styles.header}>
    {pages.map(({ label, href }, index) => (
      <Link href={href} key={index} className={styles.link}>
        {label}
      </Link>
    ))}
  </header>
);
