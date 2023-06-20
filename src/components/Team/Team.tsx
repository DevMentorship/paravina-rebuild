import type { TypedObject } from '@portabletext/types';
import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { urlFor } from '@/lib/client';

import { Button } from '../Button/Button';
import { TeamPopup } from '../TeamPopup/TeamPopup';
import styles from './Team.module.css';

export interface IDoctor {
  doctorImage: string;
  name: string;
  role: string;
  title: string;
  slug: {
    current: string;
  };
  body: TypedObject;
}

export interface IDoctors {
  doctors: IDoctor[];
}

interface IPopupState {
  open: boolean;
  doctor: string;
}

export const Team = ({ doctors }: IDoctors) => {
  const [isClicked, setIsClicked] = useState<IPopupState>({
    open: false,
    doctor: '',
  });

  return (
    <section className={`${styles.team}`}>
      <div className="container">
        <h2 className={styles.title}>
          <span>Наша команда</span> к вашим услугам
        </h2>
        <p className={styles.description}>
          Мы пригласили в команду клиники не просто профессионалов, а единомышленников. Каждый из нас разделяет
          современные подходы в стоматологическом искусстве.
        </p>
        <Swiper
          className={styles['swiper-slider']}
          modules={[Navigation]}
          navigation={{
            nextEl: '.next',
            prevEl: '.prev',
          }}
          spaceBetween={40}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className={styles.item}>
                <Image
                  width={360}
                  height={340}
                  src={urlFor(doctor.doctorImage).url()}
                  alt={doctor.name}
                  className={styles.img}
                />
                <div className={styles.content}>
                  <div className={styles.name}>{doctor.name}</div>
                  <div className={styles.role}>{doctor.role}</div>
                  <div className={styles['btn-wrapper']}>
                    <Button
                      className={styles.btn}
                      href={`/doctors/${encodeURIComponent(doctor.slug.current)}`}
                      type="link"
                    >
                      О докторе
                    </Button>
                    <Button className={styles.btn} onClick={() => setIsClicked({ open: true, doctor: doctor.name })}>
                      Записаться
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className={styles.arrows}>
            {/* TODO: fix arrow svg (vertical) */}
            <button className={cn(styles.prev, 'prev')}>
              <span className="visually-hidden">Prev Slide</span>
              <Image
                src="https://res.cloudinary.com/dkqwi0tah/image/upload/f_auto,q_auto/v1685609956/Paravina-rebuild/arrow_wy5l6k.svg"
                alt="prev arrow"
                width={30}
                height={30}
              />
            </button>

            <button className={cn(styles.next, 'next')}>
              <span className="visually-hidden">Next Slide</span>
              <Image
                src="https://res.cloudinary.com/dkqwi0tah/image/upload/f_auto,q_auto/v1685609956/Paravina-rebuild/arrow_wy5l6k.svg"
                alt="next arrow"
                width={30}
                height={30}
              />
            </button>
          </div>
        </Swiper>
      </div>
      <TeamPopup isOpen={isClicked} onClose={setIsClicked} doctors={doctors} />
    </section>
  );
};
