import cn from 'classnames';
import Image from 'next/image';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Team.module.css';

export const Team = () => {
  const doctors = [
    { id: '1', name: 'Екатерина Паравина', role: 'Главный врач' },
    { id: '2', name: 'Татьяна Шафикова', role: 'Стоматолог-терапевт, эндодонтист, микроскопист' },
    { id: '3', name: 'Жале Султанова', role: 'Стоматолог-терапевт, эндодонтист, микроскопист' },
    { id: '4', name: 'Светлана Старостина', role: 'Стоматолог-терапевт, эндодонтист, микроскопист' },
    { id: '5', name: 'Анастасия Антонова', role: 'Детский врач' },
    { id: '6', name: 'Александр Кузнецов', role: 'Стоматолог-ортопед' },
    { id: '7', name: 'Надежда Музыка', role: 'Стоматолог-ортопед' },
    { id: '8', name: 'Артур Радзевич', role: 'Челюстно-лицевой хирург, стоматолог-имплантолог' },
  ];

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
            <SwiperSlide key={doctor.id}>
              <div className={styles.item}>
                <Image
                  width={360}
                  height={340}
                  src={`/team-image/doctor-${index + 1}.jpg`}
                  alt={doctor.name}
                  className={styles.img}
                />
                <div className={styles.content}>
                  <div className={styles.name}>{doctor.name}</div>
                  <div className={styles.role}>{doctor.role}</div>
                </div>
                <button className={styles.btn}>О докторе</button>
              </div>
            </SwiperSlide>
          ))}
          <div className={styles.arrows}>
            {/* TODO: fix arrow svg (vertical) */}
            <button className={cn(styles.prev, 'prev')}>
              <span className="visually-hidden">Prev Slide</span>
              <Image src="/arrow.svg" alt="prev arrow" width={30} height={30} />
            </button>

            <button className={cn(styles.next, 'next')}>
              <span className="visually-hidden">Next Slide</span>
              <Image src="/arrow.svg" alt="next arrow" width={30} height={30} />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
