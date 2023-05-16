import Image from 'next/image';

import styles from './AboutHero.module.css';

export const AboutHero = () => (
  <section className={styles.about}>
    <Image
      className={styles.image}
      src={`/about-hero-image/about_hero.png`}
      alt="about-image"
      width={1920}
      height={1197}
    />
    <h1 className={styles.title}>
      <span className={styles.title_yellow}>Давайте</span>
      <br></br>знакомиться!
    </h1>
    <p className={styles.text}>
      Ярослав Опритов и Екатерина Паравина — мы основатели первой в Самаре авторской стоматологии. Ярослав отвечает за
      то, чтобы всё и всегда в клинике работало как часы, а Екатерина творит магию красоты, вдохновляет команду и дарит
      потрясающие улыбки посетителям. С любым вопросом или проблемой не стесняйтесь обращаться к нам лично, за качество
      отвечаем!
    </p>
  </section>
);
