import 'swiper/css';
import 'swiper/swiper-bundle.min.css';

import Image from 'next/image';
import { Navigation } from 'swiper';
// import { useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Team.module.css';

export const Team = () => {
  const doctors = [
    { id: '1', name: 'Екатерина Паравина', position: 'Главный врач' },
    { id: '2', name: 'Татьяна Шафикова', position: 'Стоматолог-терапевт, эндодонтист, микроскопист' },
    { id: '3', name: 'Жале Султанова', position: 'Стоматолог-терапевт, эндодонтист, микроскопист' },
    { id: '4', name: 'Светлана Старостина', position: 'Стоматолог-терапевт, эндодонтист, микроскопист' },
    { id: '5', name: 'Анастасия Антонова', position: 'Детский врач' },
    { id: '6', name: 'Александр Кузнецов', position: 'Стоматолог-ортопед' },
    { id: '7', name: 'Надежда Музыка', position: 'Стоматолог-ортопед' },
    { id: '8', name: 'Артур Радзевич', position: 'Челюстно-лицевой хирург, стоматолог-имплантолог' },
  ];

  // const swiper = useSwiper();
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
          navigation
          spaceBetween={40}
          slidesPerView={3}
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={doctor.id}>
              <div className={styles.item}>
                <Image width={360} height={340} src={`/team-image/doctor-${index + 1}.jpg`} alt={doctor.name} />
                <div className={styles.content}>
                  <div className={styles.name}>{doctor.name}</div>
                  <div className={styles.position}>{doctor.position}</div>
                </div>
                <button className={styles.btn}>О докторе</button>
              </div>
            </SwiperSlide>
          ))}
          {/* <button onClick={() => swiper.slidePrev()}>--</button>
          <button onClick={() => swiper.slideNext()}>++</button> */}
        </Swiper>
      </div>
    </section>
  );
};
