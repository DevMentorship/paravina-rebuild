import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import { PromotionPopup } from '@/components/PromotionPopup/PromotionPopup';

import styles from './PromotionCard.module.css';

interface IProps {
  description: string;
  firstWords: string;
  header: string;
  text: string;
  footer: string;
  alt: string;
  index: number;
  key: number;
}

export const PromotionCard = ({ firstWords, description, header, text, footer, alt, index }: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={cn(styles.card, 'invisible-child')} data-child>
      {/* TODO: Сделать дату на картинке настраиваемой */}
      <Image
        src={`/promotions-image/promotions-${index + 1}.png`}
        alt={alt}
        width="0"
        height="0"
        sizes="100vw"
        className={styles.img}
      />

      <div className={styles.content}>
        <div className={styles.wrapper}>
          <span className="paragraph primary-color">{firstWords}</span>
          <p className="paragraph">{description}</p>
        </div>
        <button className={cn(styles.button, 'third-color')} onClick={() => setOpen(true)}>
          Подробнее
        </button>
        <PromotionPopup active={open} toggle={setOpen} header={header} text={text} footer={footer} />
      </div>
    </li>
  );
};
