import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import useElementOnScreen from '@/hooks/useElementOnScreen';

import styles from './Tabs.module.css';

interface Services {
  [key: string]: Service[];
}

interface Service {
  imgSrc: string;
  title: string;
  description: string;
}

const VARIANTS = {
  STOMATOLOGY: 'stomatology' as const,
  COSMETOLOGY: 'cosmetology' as const,
};

export const Tabs = () => {
  const { ref } = useElementOnScreen();

  const services: Services = {
    stomatology: [
      {
        imgSrc: '/stomatology-icons/stomatology-icon-1.png',
        title: 'Лечение кариеса',
        description: 'С комфортом и полностью без боли!',
      },
      {
        imgSrc: '/stomatology-icons/stomatology-icon-2.png',
        title: 'Реставрация зубов',
        description: 'Используем только лучшие материалы в отрасли',
      },
      {
        imgSrc: '/stomatology-icons/stomatology-icon-3.png',
        title: 'Виниры и вкладки',
        description: 'Широкий выбор возможностей',
      },
      {
        imgSrc: '/stomatology-icons/stomatology-icon-4.png',
        title: 'Профгигиена',
        description: 'Профессиональная чистка, уход и отбеливание',
      },
      {
        imgSrc: '/stomatology-icons/stomatology-icon-5.png',
        title: 'Брекеты',
        description: 'Исправим прикус современными системами',
      },
      {
        imgSrc: '/stomatology-icons/stomatology-icon-6.png',
        title: 'Протезирование',
        description: 'Подскажем наилучший выход',
      },
      {
        imgSrc: '/stomatology-icons/stomatology-icon-7.png',
        title: 'Имплантация зубов',
        description: 'Надёжные импланты из Германии',
      },
      {
        imgSrc: '/stomatology-icons/stomatology-icon-8.png',
        title: 'Детский стоматолог',
        description: 'Без слёз!',
      },
    ],
    cosmetology: [
      {
        imgSrc: '/cosmetology-icons/cosmetology-icon-1.png',
        title: 'Комплексные уходы',
        description: 'С индивидуальным подбором средств',
      },
      {
        imgSrc: '/cosmetology-icons/cosmetology-icon-2.png',
        title: 'Чистка лица',
        description: 'Комфортно и деликатно',
      },
      {
        imgSrc: '/cosmetology-icons/cosmetology-icon-3.png',
        title: 'Пилинги',
        description: 'Профессиональная линейка косметики',
      },
      {
        imgSrc: '/cosmetology-icons/cosmetology-icon-4.png',
        title: 'Биоревитализация',
        description: 'Омоложение на все 100',
      },
      {
        imgSrc: '/cosmetology-icons/cosmetology-icon-5.png',
        title: 'Мезотерапия',
        description: 'Быстрое решение проблем кожи',
      },
      {
        imgSrc: '/cosmetology-icons/cosmetology-icon-6.png',
        title: 'Ботулинотерапия',
        description: 'Нет морщинам!',
      },
      {
        imgSrc: '/cosmetology-icons/cosmetology-icon-7.png',
        title: 'Плазмотерапия',
        description: 'Глубокое воздействие собственной плазмой',
      },
      {
        imgSrc: '/cosmetology-icons/cosmetology-icon-8.png',
        title: 'Массажи',
        description: 'Здоровье и расслабление',
      },
    ],
  };

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
        {services[selectedCategory].map((service, index) => (
          <div key={index} className={cn(styles.item, 'invisible-child')} data-child>
            <Image src={service.imgSrc} alt={service.title} className={styles.img} width={100} height={100} />
            <h3 className={cn(styles.title, 'heading4')}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
