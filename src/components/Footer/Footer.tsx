// import Link from 'next/link';

import styles from '@/components/Footer/Footer.module.css';

// Temporary hide pages
// const pages = [
//   { label: 'Акции', href: '/' },
//   { label: 'Услуги', href: '/' },
//   { label: 'О клинике', href: '/' },
// ];

export const Footer = () => (
  <footer className={styles.footer}>
    {/* {pages.map(({ label, href }, index) => (
      <Link href={href} key={index} className={styles.link}>
        {label}
      </Link>
    ))} */}
  </footer>
);
