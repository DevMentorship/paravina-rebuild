import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import useElementOnScreen from '@/hooks/useElementOnScreen';

import styles from './Hero.module.css';

export const Hero = () => {
  const { ref } = useElementOnScreen();

  return (
    <section className={styles.hero} ref={ref}>
      <div>
        <h2 className={cn(styles['hero-title'])}>Доверьте свою улыбку профессионалам!</h2>
        <p className={cn(styles['hero-desc'])}>
          Представляем первую в Самаре авторскую клинику эстетической стоматологии и косметологии Екатерины Паравиной.
        </p>
        <div className={styles['hero-cta']}>
          <button className={cn(styles['hero-cta-button'])}>Записаться</button>
          <div className={styles['hero-cta-video']}>
            <Link href="/" aria-label="Смотреть видео о нас">
              <Image
                src="https://res.cloudinary.com/dkqwi0tah/image/upload/q_auto/v1685609958/Paravina-rebuild/watch-video-icon_czvwxk.png"
                alt="Смотреть видео о нас"
                width={100}
                height={100}
              />
            </Link>
            <p>Смотреть видео о нас</p>
          </div>
        </div>
      </div>
      <Image
        className={styles['hero-background']}
        src="https://res.cloudinary.com/dkqwi0tah/image/upload/f_auto,q_auto/v1685613614/Paravina-rebuild/hero-bg_je0zzs.jpg"
        alt=""
        width={1920}
        height={1300}
      />
    </section>
  );
};
