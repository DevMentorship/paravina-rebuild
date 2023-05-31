import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import useElementOnScreen from '@/hooks/useElementOnScreen';

import styles from './Hero.module.css';

export const Hero = () => {
  const { ref } = useElementOnScreen();

  return (
    <section className={styles.hero} ref={ref}>
      <div className="invisible-child" data-child>
        <h2 className={cn(styles['hero-title'])}>Доверьте свою улыбку профессионалам!</h2>
        <p className={cn(styles['hero-desc'])}>
          Представляем первую в Самаре авторскую клинику эстетической стоматологии и косметологии Екатерины Паравиной.
        </p>
        <div className={styles['hero-cta']}>
          <button className={cn(styles['hero-cta-button'])}>Записаться</button>
          <div className={styles['hero-cta-video']}>
            <Link href="/">
              <Image src="/watch-video-icon.png" alt="" width={100} height={100} />
            </Link>
            <p>Смотреть видео о нас</p>
          </div>
        </div>
      </div>
      <Image
        className={styles['hero-background']}
        src="/hero-bg.png"
        alt=""
        width={1920}
        height={1300}
        priority={false}
      />
    </section>
  );
};
