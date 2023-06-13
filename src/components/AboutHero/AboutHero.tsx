import cn from 'classnames';

import { urlFor } from '@/lib/client';
import { IAbout } from '@/pages/about';

import styles from './AboutHero.module.css';

export const AboutHero = ({ title, descr, image }: IAbout) => {
  const [firstTitlePart, secondTitlePart] = title.split(' ');
  return (
    <section>
      <div className={styles.about}>
        <div className={cn(styles.title, 'third-color')}>
          <h3 className="heading1">
            <span className="primary-color">
              {firstTitlePart}
              <br />
            </span>
            {secondTitlePart}
          </h3>
          <p className="heading2">{descr}</p>
        </div>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${urlFor(image).url()})`,
            width: 1920,
            height: 1197,
          }}
        ></div>
      </div>
    </section>
  );
};
