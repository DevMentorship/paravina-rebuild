import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import useElementOnScreen from '@/hooks/useElementOnScreen';
import { urlFor } from '@/lib/client';

import { GalleryPopup } from '../GalleryPopup/GalleryPopup';
import styles from './Gallery.module.css';

export interface IGalleryImages {
  alt: string;
}

interface IGalleryProps {
  galleryImages: IGalleryImages[];
}

export const Gallery = ({ galleryImages }: IGalleryProps) => {
  const { ref } = useElementOnScreen();
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState<IGalleryImages | null>(null);

  const openPopup = () => {
    setIsOpenPopup(true);
    document.documentElement.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsOpenPopup(false);
    document.documentElement.style.overflow = '';
  };

  const handleImageClick = (galleryImage: IGalleryImages | null) => {
    setSelectedImage(galleryImage);
    openPopup();
  };

  return (
    <section className="container">
      <h2 className={cn(styles.title, 'heading2')}>
        Мы рады <span className="primary-color">каждому гостю!</span>
      </h2>

      <div className={styles.gallery} ref={ref}>
        {galleryImages.map((galleryImage, idx) => (
          <Image
            onClick={() => handleImageClick(galleryImage)}
            key={idx}
            src={urlFor(galleryImage).url()}
            alt={`${galleryImage.alt}`}
            width={270}
            height={idx == 1 ? 400 : 190}
            className={cn(idx == 1 ? styles.imgWide : styles.img, 'invisible-child')}
            data-child
          />
        ))}
      </div>

      <GalleryPopup isOpen={isOpenPopup} isClose={closePopup} selectedImage={selectedImage} />

      <Swiper
        className={styles.swiper}
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
        {galleryImages.map((galleryImage, index) => (
          <SwiperSlide key={index}>
            <div className={styles.item}>
              <Image
                width={320}
                height={380}
                src={urlFor(galleryImage).url()}
                alt={galleryImage.alt}
                className={styles.img}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.arrows}>
          <button className={cn(styles.prev, 'prev')}>
            <span className="visually-hidden">Prev Slide</span>
            <Image
              src="https://res.cloudinary.com/dkqwi0tah/image/upload/f_auto,q_auto/v1685609956/Paravina-rebuild/arrow_wy5l6k.svg"
              alt="Кнопка предыдущий слайд"
              width={30}
              height={30}
            />
          </button>

          <button className={cn(styles.next, 'next')}>
            <span className="visually-hidden">Next Slide</span>
            <Image
              src="https://res.cloudinary.com/dkqwi0tah/image/upload/f_auto,q_auto/v1685609956/Paravina-rebuild/arrow_wy5l6k.svg"
              alt="Кнопка следующий слайд"
              width={30}
              height={30}
            />
          </button>
        </div>
      </Swiper>
    </section>
  );
};
