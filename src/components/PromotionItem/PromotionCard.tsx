import cn from 'classnames';
import { useState } from 'react';

import { ModalItem } from '../PromotionsPopup/PopupItem';
import styles from './PromotionCard.module.css';

export interface CardProps {
  description: string;
  header: string;
  text: string;
  footer: string;
}

export const PromotionCard = ({ description, header, text, footer }: CardProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.card}>
      <p className={cn(styles.text, 'paragraph')} dangerouslySetInnerHTML={{ __html: description }} />
      <button className={cn(styles.button, 'third-color')} onClick={() => setModalOpen(true)}>
        Подробнее
      </button>
      <ModalItem active={modalOpen} setActive={setModalOpen} header={header} text={text} footer={footer} />
    </div>
  );
};
