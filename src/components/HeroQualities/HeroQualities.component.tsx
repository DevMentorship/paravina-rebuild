import Image from 'next/image';

import expPic from '../../../public/AboutOwnerPics/svg/experience.svg';
import inspPic from '../../../public/AboutOwnerPics/svg/inspiration.svg';
import leadPic from '../../../public/AboutOwnerPics/svg/leadership.svg';
import styles from './heroQualities.module.css';

export const HeroQualities = () => (
  <section className={styles.heroQualities}>
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Екатерина Правина</h2>
      <div className={styles.qualities}>
        <div className={styles.quality}>
          <Image src={leadPic} alt="Лидерство" />
          <h5>Лидерство</h5>
          <p>
            Многократная чемпионка <br />
            и призер конкурсов <br />
            по эстетической <br />
            стоматологии
          </p>
        </div>

        <div className={styles.quality}>
          <Image src={expPic} alt="Опыт" />
          <h5>Опыт</h5>
          <p>
            Опинион-лидер компании <br />
            Micerium, производителя <br />
            композитов последнего <br />
            поколения
          </p>
        </div>

        <div className={styles.quality}>
          <Image src={inspPic} alt="Вдохновение" />
          <h5>Вдохновение</h5>
          <p>
            Ведущая авторских курсов <br />
            для врачей-стоматологов <br />
            по прямой реставрации <br />
            зубов
          </p>
        </div>
      </div>

      <div className={styles.background}>
        <div className={styles.blur}></div>
      </div>
    </div>
  </section>
);
