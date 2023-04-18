import { FaqData } from "./types";
import styles from './FaqItem.module.css';
import cn from 'classnames';

export const FaqItem = ({ data, isOpen, btnOnClick }: { data: FaqData, isOpen: boolean, btnOnClick: () => void }) => {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.trigger} onClick={btnOnClick}>{data.title}</h4>
            <p className={cn(styles.description, {
                [styles.active]: isOpen
            })}>
                {data.content}
            </p>
        </div>
    );
}