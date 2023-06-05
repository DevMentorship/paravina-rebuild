import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import useElementOnScreen from '@/hooks/useElementOnScreen';

import { Popup } from '../Popup/Popup';
import styles from './Hero.module.css';

export const Hero = () => {
  const { ref } = useElementOnScreen();
  const popupRef = useRef<HTMLDialogElement | null>(null);
  const width = 1920;
  const height = 1337;

  return (
    <section className={styles.hero} style={{ aspectRatio: width / height }}>
      <div className="container" ref={ref}>
        <h2 className={cn(styles.title, 'heading1')}>
          <strong>Доверьте свою улыбку профессионалам!</strong>
        </h2>
        <p className={cn(styles.description, 'heading2')}>
          Представляем первую в Самаре авторскую клинику эстетической стоматологии и косметологии Екатерины Паравиной.
        </p>
        <div className={styles.cta}>
          <button className={cn(styles['cta-button'], 'heading3')} onClick={() => popupRef.current?.showModal()}>
            <strong>Записаться</strong>
          </button>
          <div className={styles['cta-video']}>
            <Link href="/" aria-label="Смотреть видео о нас">
              <Image
                src="https://res.cloudinary.com/dkqwi0tah/image/upload/q_auto/v1685609958/Paravina-rebuild/watch-video-icon_czvwxk.png"
                alt="Смотреть видео о нас"
                width={100}
                height={100}
              />
            </Link>
            <p className="heading3">Смотреть видео о нас</p>
          </div>
        </div>
      </div>
      <div
        className={styles.image}
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/dkqwi0tah/image/upload/f_auto,q_auto/v1685613614/Paravina-rebuild/hero-bg_je0zzs.jpg)',
        }}
      ></div>
      <Popup popupRef={popupRef} />
    </section>
  );
};
