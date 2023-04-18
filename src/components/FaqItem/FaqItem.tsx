/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import cn from 'classnames';

import styles from './FaqItem.module.css';
import { FaqData } from './types';

export const FaqItem = ({ data, isOpen, btnOnClick }: { data: FaqData; isOpen: boolean; btnOnClick: () => void }) => (
  <div className={styles.wrapper}>
    <h4 className={styles.trigger} onClick={btnOnClick}>
      {data.title}
    </h4>
    <p
      className={cn(styles.description, {
        [styles.active]: isOpen,
      })}
    >
      {data.content}
    </p>
  </div>
);
