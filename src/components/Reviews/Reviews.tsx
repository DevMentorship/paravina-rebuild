import imageUrlBuilder from '@sanity/image-url';
import cn from 'classnames';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { client } from '../../lib/client';
import styles from './Reviews.module.css';

export interface IReview {
  id: string;
}

interface IProps {
  review: IReview[];
}

export const Reviews = ({ review }: IProps): JSX.Element => {
  const builder = imageUrlBuilder(client);

  function urlFor(source: IReview) {
    return builder.image(source);
  }
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
        {review.map((rev, idx) => (
          <Image key={idx} src={urlFor(rev).url()} alt={'Review'} width={310} height={210} />
        ))}
      </div>
      <Swiper spaceBetween={0} slidesPerView={1} centeredSlides={true}>
        {review.map((rev, idx) => (
          <SwiperSlide key={idx} className={styles.swiper__content}>
            <Image key={idx} src={urlFor(rev).url()} alt={`Review`} width={310} height={210} className={styles.slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
