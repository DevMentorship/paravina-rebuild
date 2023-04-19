import cn from 'classnames';
import Image from 'next/image';

import styles from './Gallery.module.css';

export const Gallery = (): JSX.Element => {
  const images = [
    { idx: 1, alt: 'A man with guitar' },
    { idx: 2, alt: 'Medical equipment' },
    { idx: 3, alt: 'A woman in black t-shirt' },
    { idx: 4, alt: 'Сlinic reception' },
    { idx: 5, alt: 'Dental office' },
    { idx: 6, alt: "Clinic's team" },
    { idx: 7, alt: 'Patient' },
  ];
  return (
    <section className="container">
      <h2 className={cn(styles.title, 'heading2')}>
        Мы рады <span className="primary-color">каждому гостю!</span>
      </h2>

      <div className={styles.gallery}>
        {images.map((image, idx) => (
          <Image
            key={image.idx}
            src={`/gallery-image/gallery-${idx + 1}.png`}
            alt={`${image.alt}`}
            width={270}
            height={idx == 1 ? 400 : 190}
            className={idx == 1 ? styles.img__big : styles.img}
          />
        ))}
      </div>
    </section>
  );
};
