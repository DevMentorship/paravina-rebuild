import cn from 'classnames';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Reviews.module.css';

export const Reviews = (): JSX.Element => {
  const images = [
    { idx: 1, alt: 'Review' },
    { idx: 2, alt: 'Review' },
    { idx: 3, alt: 'Review' },
    { idx: 4, alt: 'Review' },
    { idx: 5, alt: 'Review' },
    { idx: 6, alt: 'Review' },
    { idx: 7, alt: 'Review' },
    { idx: 8, alt: 'Review' },
    { idx: 9, alt: 'Review' },
  ];
  return (
    <section className="container">
      <h2 className={cn(styles.title, 'heading2')}>
        <span className="primary-color">Ваши отзывы</span> о нас
      </h2>
      <p className={cn('paragraph', styles.reviews__loc)}>
        Ничего не скрываем! Все отзывы о нас на{' '}
        <a
          className={styles.link}
          href="https://yandex.ru/maps/org/klinika_paravina/6525317674/reviews/?ll=50.183311%2C53.233766&z=13"
        >
          Яндексе
        </a>{' '}
        и{' '}
        <a className={styles.link} href="https://2gis.ru/samara/firm/70000001038600974/tab/reviews">
          2ГИС
        </a>
      </p>
      <div className={styles.review}>
        {images.map((image, idx) => (
          <Image
            key={image.idx}
            src={`/reviews-images/review-${idx + 1}.png`}
            alt={`${image.alt}`}
            width={310}
            height={210}
          />
        ))}
      </div>
      <Swiper spaceBetween={0} slidesPerView={1} centeredSlides={true}>
        {images.map((image, idx) => (
          <SwiperSlide key={idx} className={styles.swiper__content}>
            <Image
              key={image.idx}
              src={`/reviews-images/review-${idx + 1}.png`}
              alt={`${image.alt}`}
              width={310}
              height={210}
              className={styles.slide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
