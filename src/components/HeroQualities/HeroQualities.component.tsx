import cn from 'classnames';
import Image from 'next/image';

import expPic from '../../../public/HeroQualitiesPics/svg/experience.svg';
import inspPic from '../../../public/HeroQualitiesPics/svg/inspiration.svg';
import leadPic from '../../../public/HeroQualitiesPics/svg/leadership.svg';
import styles from './HeroQualities.module.css';

interface IQuality {
  img: string;
  title: string;
  text: string;
}

const QUALITIES_DATA: IQuality[] = [
  {
    img: leadPic,
    title: 'Лидерство',
    text: 'Многократная чемпионка и призер конкурсов по эстетической стоматологии',
  },

  {
    img: expPic,
    title: 'Опыт',
    text: 'Опинион-лидер компании Micerium, производителя композитов последнего поколения',
  },

  {
    img: inspPic,
    title: 'Вдохновение',
    text: 'Ведущая авторских курсов для врачей-стоматологов по прямой реставрации зубов',
  },
];

export const HeroQualities = () => (
  <section className={styles.heroQualities}>
    <div className={styles.wrapper}>
      <h2 className={cn(styles.title, 'heading2')}>Екатерина Правина</h2>

      <div className={styles.qualities}>
        {QUALITIES_DATA.map(({ img, title, text }) => (
          <div className={styles.quality} key={title}>
            <Image src={img} alt={title} />
            <h3 className="heading3">{title}</h3>
            <p className="paragraph">{text}</p>
          </div>
        ))}
      </div>

      <div className={styles.background}>
        <div className={styles.blur}></div>
      </div>
    </div>
  </section>
);
