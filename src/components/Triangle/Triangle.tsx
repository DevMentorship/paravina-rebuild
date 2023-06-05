import cn from 'classnames';

import styles from './Triangle.module.css';

const POSITIONS = {
  top: styles['top'],
  bottom: styles['bottom'],
  left: styles['left'],
  right: styles['right'],
};

export const Triangle = ({ x, y }: { x: 'left' | 'right'; y: 'top' | 'bottom' }) => (
  <div className={cn(POSITIONS[y], POSITIONS[x])}></div>
);
