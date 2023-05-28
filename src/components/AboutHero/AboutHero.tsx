import cn from 'classnames';
import Image from 'next/image';

import { urlFor } from '@/lib/client';
import { IAbout } from '@/pages/about';

import styles from './AboutHero.module.css';

export const AboutHero = ({ title, descr, image }: IAbout) => {
  const dividedTitle = title.split(' ');
  // wrap to the {}, and add return() before section
  return (
    <section>
      <div className={styles.about}>
        <div className={cn(styles.title, 'third-color')}>
          <h3 className="heading1">
            <span className="primary-color">
              {dividedTitle[0]}
              <br />
            </span>
            {dividedTitle[1]}
          </h3>
          <p className="heading2">{descr}</p>
        </div>
        <Image className={styles.image} src={urlFor(image).url()} alt="image" width={1920} height={1197} />
      </div>
    </section>
  );
};
