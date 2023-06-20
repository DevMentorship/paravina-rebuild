import cn from 'classnames';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { urlFor } from '@/lib/client';

import styles from './Reviews.module.css';

export interface IReview {
  _type: string;
  reviewImage: string;
  index: number;
}

interface IProps {
  reviews: IReview[];
}

export const Reviews = ({ reviews }: IProps): JSX.Element => (
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
      {reviews.map((review, idx) => (
        <Image key={idx} src={urlFor(review.reviewImage).url()} alt={'Отзыв'} width={310} height={210} />
      ))}
    </div>
    <Swiper spaceBetween={0} slidesPerView={1} centeredSlides={true}>
      {reviews.map((review, idx) => (
        <SwiperSlide key={idx} className={styles.swiper__content}>
          <Image
            key={idx}
            src={urlFor(review.reviewImage).url()}
            alt={'Отзыв'}
            width={310}
            height={210}
            className={styles.slide}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
