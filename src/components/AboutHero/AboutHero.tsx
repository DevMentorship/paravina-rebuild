import cn from 'classnames';
import Image from 'next/image';

import { urlFor } from '@/lib/client';
import { IAbout } from '@/pages/about';

import styles from './AboutHero.module.css';

export const AboutHero = (props: IAbout) => (
  <section>
    <div className={styles.about}>
      <div className={cn(styles.title, 'third-color')}>
        <h3 className={cn(styles.title_yellow, 'heading1')}>{props.main_title}</h3>
        <h3 className="heading1">{props.second_title}</h3>
        <p className="heading2">{props.descr}</p>
      </div>
      <Image className={styles.image} src={urlFor(props.image).url()} alt="about-image" width={1920} height={1197} />
    </div>
  </section>
);
