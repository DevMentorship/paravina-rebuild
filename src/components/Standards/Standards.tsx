import cn from 'classnames';
import Image from 'next/image';

import useElementOnScreen from '@/hooks/useElementOnScreen';
import { urlFor } from '@/lib/client';

import styles from './Standards.module.css';

export interface IStandardImage {
  text: string;
  title: string;
}

interface IStandardProps {
  standardImages: IStandardImage[];
}

export const Standards = ({ standardImages }: IStandardProps) => {
  const { ref } = useElementOnScreen();

  return (
    <section className="container" ref={ref}>
      <h2 className={cn(styles.title, 'heading2')}>
        Авторская клиника <span className="primary-color">по стандартам Италии</span>
      </h2>
      <p className={styles.description}>
        Создавая клинику «Паравина», мы руководствовались новыми российскими отраслевыми требованиями и компиляцией
        знаний, полученных в клиниках Италии во время интенсивов и мастер-классов у лидеров рынка.
      </p>

      <ul className={styles['cards-list']}>
        {standardImages.map((standardImage, index) => (
          <li key={index} className={cn(styles.card, 'invisible-child')} data-child>
            <Image
              src={urlFor(standardImage).url()}
              alt={`${standardImage.title}`}
              width={100}
              height={100}
              className={styles.img}
            />
            <h3 className={cn(styles['card-title'], 'secondary-color')}>{standardImage.title}</h3>
            <p className={styles.text}>{standardImage.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
