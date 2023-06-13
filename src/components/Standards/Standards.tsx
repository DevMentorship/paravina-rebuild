import cn from 'classnames';
import Image from 'next/image';

import useElementOnScreen from '@/hooks/useElementOnScreen';
import { urlFor } from '@/lib/client';

import { Triangle } from '../Triangle/Triangle';
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
    <>
      <section className="background-accent-1" ref={ref}>
        <Triangle x="left" y="top" />
        <div className="container">
          <h2 className={cn(styles.title, 'heading2')}>Авторская клиника по стандартам Италии</h2>
          <p className={styles.description}>
            Создавая клинику «Паравина», мы руководствовались новыми российскими отраслевыми требованиями и компиляцией
            знаний, полученных в клиниках Италии во время интенсивов и мастер-классов у лидеров рынка.
          </p>

          <ul className={styles['cards-list']}>
            {standardImages.map((standardImage, index) => (
              <li key={index} className={cn(styles.card, 'invisible-child', 'start-animation-down-top')} data-child>
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
        </div>
        <Triangle x="right" y="bottom" />
      </section>
    </>
  );
};
