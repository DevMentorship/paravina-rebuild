import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/Footer/Footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <section className={styles.container}>
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
          <a href="tel:+79276922501" className={styles.link}>
            +7 927 692-25-01
          </a>
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
          <Image
            src="https://res.cloudinary.com/dkqwi0tah/image/upload/f_auto,q_auto/v1685609950/Paravina-rebuild/vk_awkwtt.svg"
            width="70"
            height="70"
            alt="VK"
          />
        </Link>
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dkqwi0tah/image/upload/f_auto,q_auto/v1685609944/Paravina-rebuild/youtube_ta7dh0.svg"
            width="70"
            height="70"
            alt="YouTub"
          />
        </Link>
      </div>
    </section>
    <Link href="/" className={styles.link}>
      Политика конфиденциальности
    </Link>
    <p className={cn(styles.consultation, 'heading1')}>
      Имеются противопоказания.
      <br />
      Необходима консультация специалиста.
    </p>
  </footer>
);
