import cn from 'classnames';
import Image from 'next/image';

import styles from './AboutHero.module.css';

export const AboutHero = () => (
  <section>
    <div className={styles.about}>
      <div className={cn(styles.title, 'third-color')}>
        <h3 className={cn(styles.title_yellow, 'heading1')}>Давайте</h3>
        <h3 className="heading1">знакомиться!</h3>
        <p className="heading2">
          Ярослав Опритов и Екатерина Паравина — мы основатели первой в Самаре авторской стоматологии. Ярослав отвечает
          за за то, чтобы всё и всегда в клинике работало как часы, а Екатерина творит магию красоты, вдохновляет
          команду и дарит дарит потрясающие улыбки посетителям. С любым вопросом или проблемой не стесняйтесь обращаться
          лично, за качество отвечаем!
        </p>
      </div>
      <Image
        className={styles.image}
        src={`/about-hero-image/about_hero.png`}
        alt="about-image"
        width={1920}
        height={1197}
      />
    </div>
  </section>
);
