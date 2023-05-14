import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/Header/Header.module.css';

const pages = [
  { label: 'Акции', href: '/' },
  { label: 'Услуги', href: '/' },
  { label: 'О клинике', href: '/about' },
];

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.nav}>
      {pages.map(({ label, href }, index) => (
        <Link href={href} key={index} className={styles.link}>
          {label}
        </Link>
      ))}
    </div>
    <div className={styles.logo}>
      <Image src={'header-logo.svg'} width={100} height={100} alt="лого" className={styles.img}></Image>
    </div>
  </header>
);
