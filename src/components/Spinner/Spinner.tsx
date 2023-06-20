import cn from 'classnames';

import styles from './Spinner.module.css';

export const Spinner = () => (
  <div className={cn(styles.spinner)}>
    <div className={cn(styles['spinner-element'])} />
  </div>
);
