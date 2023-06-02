import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import useElementOnScreen from '@/hooks/useElementOnScreen';
import { urlFor } from '@/lib/client';

import styles from './Tabs.module.css';

const VARIANTS = {
  STOMATOLOGY: 'stomatology' as const,
  COSMETOLOGY: 'cosmetology' as const,
};

export interface ITabImages {
  title: string;
  description: string;
}

interface ITabProps {
  tabImages: {
    cosmetology: ITabImages[];
    stomatology: ITabImages[];
  };
}

export const Tabs = ({ tabImages }: ITabProps) => {
  const { ref } = useElementOnScreen();

  const [selectedCategory, setSelectedCategory] = useState<'stomatology' | 'cosmetology'>(VARIANTS.STOMATOLOGY);

  return (
    <section className="container">
      <div className={styles.wrapper}>
        <div className={styles['triggers-wrapper']}>
          <div className={styles.triggers}>
            <a
              href={`#${VARIANTS.STOMATOLOGY}`}
              className={cn(styles.trigger, selectedCategory === VARIANTS.STOMATOLOGY && styles['trigger--active'])}
              onClick={() => setSelectedCategory(VARIANTS.STOMATOLOGY)}
            >
              Стоматология
            </a>
            <a
              href={`#${VARIANTS.COSMETOLOGY}`}
              className={cn(styles.trigger, selectedCategory === VARIANTS.COSMETOLOGY && styles['trigger--active'])}
              onClick={() => setSelectedCategory(VARIANTS.COSMETOLOGY)}
            >
              Косметология
            </a>
          </div>
        </div>
      </div>
      <div className={styles.items} ref={ref}>
        {tabImages[selectedCategory].map((tabImage, index) => (
          <div key={index} className={cn(styles.item, 'invisible-child')} data-child>
            <Image src={urlFor(tabImage).url()} alt={tabImage.title} className={styles.img} width={100} height={100} />
            <h3 className={cn(styles.title, 'heading4')}>{tabImage.title}</h3>
            <p className={styles.description}>{tabImage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
