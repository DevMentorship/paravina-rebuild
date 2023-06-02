import cn from 'classnames';
import Image from 'next/image';

import useElementOnScreen from '@/hooks/useElementOnScreen';
import { urlFor } from '@/lib/client';

import styles from './Gallery.module.css';

export interface IGalleryImages {
  alt: string;
}

interface IGalleryProps {
  galleryImages: IGalleryImages[];
}

export const Gallery = ({ galleryImages }: IGalleryProps) => {
  const { ref } = useElementOnScreen();

  return (
    <section className="container">
      <h2 className={cn(styles.title, 'heading2')}>
        Мы рады <span className="primary-color">каждому гостю!</span>
      </h2>

      <div className={styles.gallery} ref={ref}>
        {galleryImages.map((galleryImage, idx) => (
          <Image
            key={idx}
            src={urlFor(galleryImage).url()}
            alt={`${galleryImage.alt}`}
            width={270}
            height={idx == 1 ? 400 : 190}
            className={cn(idx == 1 ? styles.img__big : styles.img, 'invisible-child')}
            data-child
          />
        ))}
      </div>
    </section>
  );
};
