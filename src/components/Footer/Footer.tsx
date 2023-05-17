import styles from '@/components/Footer/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className={styles.additional}>
      <div className={styles.adress}>
        <p> АДРЕС</p>
        <p>г. Самара, ул. Ново-Садовая, 164а</p>
        <p>(рядом с магазином «Турист»)</p>
      </div>
      <div className={styles.schedule}>
        <p>РЕЖИМ РАБОТЫ</p>
        <p>Пн-сб: с 9 до 20 часов</p>
        <p>Вс: выходной день</p>
      </div>
      <div className={styles.phone}>
        <p> ТЕЛЕФОН</p>
        <Link href="/" className={styles.link}>
          +7 927 692-25-01
        </Link>
      </div>
      <div className={styles.documentation}>
        <p>ДОКУМЕНТЫ</p>
        <Link href="/" className={styles.link}>
          Лицензии
        </Link>
        <p>Прейскурант цен</p>
      </div>
    </div>
    <div className={styles.subscribe}>
      <p>ПОДПИШИТЕСЬ</p>
      <Link href="/">
        <Image src="/vk.svg" width="90" height="90" alt="VK" />
      </Link>
      <Link href="/">
        <Image src="/youtube.svg" width="90" height="90" alt="YouTub" />
      </Link>
    </div>
  </footer>
);
