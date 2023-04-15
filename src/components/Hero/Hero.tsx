import styles from './Hero.module.css';
import Image from 'next/image';
import cn from 'classnames';

export const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={cn(styles.container, 'container')}>
        <h2 className={styles.title}>Доверьте свою улыбку профессионалам!</h2>

        <p className={styles.description}>
          Представляем первую в Самаре авторскую клинику эстетической стоматологии и косметологии Екатерины Паравиной.
        </p>

        <div className={styles.sign}>
          <button className={styles.btn}>Записаться</button>

          <div className={styles['video-about']}>
            <a>
              <Image className={styles.img} src='/watch-video-icon.png' alt='' width={48} height={48} />
            </a>

            <p className={styles.text}>Смотреть видео о нас</p>
          </div>
        </div>
      </div>
      <Image className={styles.background} src='/hero-bg.png' alt='' width={1206} height={840} />
    </section>
  );
};
