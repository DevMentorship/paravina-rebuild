import cn from 'classnames';
import Image from 'next/image';

import useElementOnScreen from '@/hooks/useElementOnScreen';

import { Button } from '../Button/Button';
import styles from './Hero.module.css';

export const Hero = () => {
  const { ref } = useElementOnScreen();
  const width = 1920;
  const height = 1337;
  const aspectRatio = (height / width).toFixed(2);

  return (
    <section className={styles.hero} style={{ aspectRatio }}>
      <div className={cn(styles.container, 'container')} ref={ref}>
        <h2 className={cn(styles.title, 'heading1')}>
          <strong>Доверьте свою улыбку профессионалам!</strong>
        </h2>
        <p className={cn(styles.description, 'heading2')}>
          Представляем первую в Самаре авторскую клинику эстетической стоматологии и косметологии Екатерины Паравиной.
        </p>
        <div className={styles.cta}>
          <Button className={cn(styles['cta-button'], 'heading3')}>
            <strong>Записаться</strong>
          </Button>
          {/* Temporary hide */}
          {/* <div className={styles['cta-video']}>
            <Link href="/" aria-label="Смотреть видео о нас">
              <Image
                src="https://res.cloudinary.com/dkqwi0tah/image/upload/q_auto/v1685609958/Paravina-rebuild/watch-video-icon_czvwxk.png"
                alt="Смотреть видео о нас"
                width={60}
                height={60}
              />
            </Link>
            <p className="heading3">Смотреть видео о нас</p>
          </div> */}
        </div>
      </div>
      <Image
        src="https://res.cloudinary.com/dkqwi0tah/image/upload/f_auto,q_auto/v1685613614/Paravina-rebuild/hero-bg_je0zzs.jpg"
        alt="Команда клиники"
        width="0"
        height="0"
        sizes="100vw"
        className={styles.img}
      />
    </section>
  );
};
