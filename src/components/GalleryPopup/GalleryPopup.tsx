import cn from 'classnames';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { urlFor } from '@/lib/client';

import { IGalleryImages } from '../Gallery/Gallery';
import styles from './GalleryPopup.module.css';

export interface IGalleryPopup {
  isOpen: boolean;
  isClose: () => void;
  selectedImage: IGalleryImages | null;
}

export const GalleryPopup = ({ isOpen, isClose, selectedImage }: IGalleryPopup) => {
  const closeButtonFocus = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonFocus.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        isClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isClose]);

  return (
    <div className={cn(styles.popup, { [styles.open]: isOpen })}>
      {selectedImage && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div className={styles.overlay} onClick={isClose}>
          <div className={styles.content}>
            <button className={styles.close} ref={closeButtonFocus} onClick={isClose}>
              &times;
            </button>
            <Image
              src={urlFor(selectedImage).url()}
              alt={selectedImage.alt}
              width={540}
              height={400}
              className={styles.img}
              data-child
            />
          </div>
        </div>
      )}
    </div>
  );
};
