import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import useElementOnScreen from '@/hooks/useElementOnScreen';

import styles from './Hero.module.css';

export const Hero = () => {
  const { ref } = useElementOnScreen();
  return (
    <section className={styles.section} ref={ref}>
      <div className={cn(styles.container, 'container', 'invisible-child')} data-child>
        <h2 className={cn(styles.title, 'third-color', 'heading1')}>Доверьте свою улыбку профессионалам!</h2>

        <p className={cn(styles.description, 'third-color')}>
          Представляем первую в Самаре авторскую клинику эстетической стоматологии и косметологии Екатерины Паравиной.
        </p>

        <div className={styles.sign}>
          <button className={cn(styles.btn, 'third-color', 'heading4')}>Записаться</button>

          <div className={styles['video-about']}>
            <a>
              <Image className={styles.img} src="/watch-video-icon.png" alt="" width={48} height={48} />
            </a>

            <p className="third-color">Смотреть видео о нас</p>
          </div>
        </div>
      </div>
      <Image className={styles.background} src="/hero-bg.png" alt="" width={1206} height={840} />
    </section>
  );
};
