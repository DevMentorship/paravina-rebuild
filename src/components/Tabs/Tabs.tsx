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
  index: number;
  cosmetologyImage: string;
  stomatologyImages: string;
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
  const { ref, triggerAnimation } = useElementOnScreen();

  const [selectedCategory, setSelectedCategory] = useState<'stomatology' | 'cosmetology'>(VARIANTS.STOMATOLOGY);

  const handleClick = (variant: 'stomatology' | 'cosmetology') => {
    setSelectedCategory(variant);
    setTimeout(() => {
      triggerAnimation(), 1000;
    });
  };

  return (
    <section className="container">
      <div className={styles.wrapper}>
        <div className={styles['triggers-wrapper']}>
          <div className={styles.triggers}>
            <button
              className={cn(styles.trigger, selectedCategory === VARIANTS.STOMATOLOGY && styles['trigger--active'])}
              onClick={() => handleClick(VARIANTS.STOMATOLOGY)}
            >
              Стоматология
            </button>
            <button
              className={cn(styles.trigger, selectedCategory === VARIANTS.COSMETOLOGY && styles['trigger--active'])}
              onClick={() => handleClick(VARIANTS.COSMETOLOGY)}
            >
              Косметология
            </button>
          </div>
        </div>
      </div>
      <div ref={ref}>
        <div className={cn(styles.items, selectedCategory !== VARIANTS.COSMETOLOGY && 'hidden')}>
          {tabImages.cosmetology.map((tabImage, index) => (
            <div key={index} className={cn(styles.item, 'invisible-child', 'start-animation-side-left')} data-child>
              <Image
                src={urlFor(tabImage.cosmetologyImage).url()}
                alt={tabImage.title}
                className={styles.img}
                width={100}
                height={100}
              />
              <h3 className={cn(styles.title, 'heading4')}>{tabImage.title}</h3>
              <p className={styles.description}>{tabImage.description}</p>
            </div>
          ))}
        </div>
        <div className={cn(styles.items, selectedCategory !== VARIANTS.STOMATOLOGY && 'hidden')}>
          {tabImages.stomatology.map((tabImage, index) => (
            <div key={index} className={cn(styles.item, 'invisible-child', 'start-animation-side-left')} data-child>
              <Image
                src={urlFor(tabImage.stomatologyImages).url()}
                alt={tabImage.title}
                className={styles.img}
                width={100}
                height={100}
              />
              <h3 className={cn(styles.title, 'heading4')}>{tabImage.title}</h3>
              <p className={styles.description}>{tabImage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
