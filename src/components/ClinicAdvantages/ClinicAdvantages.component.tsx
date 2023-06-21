import cn from 'classnames';

import styles from './ClinicAdvantages.module.css';

export const ClinickAdvantages = () => (
  <section className={styles.clinickAdvantages}>
    <div className={styles.wrapper}>
      <h2 className={cn(styles.title, 'heading2')}>
        Стоматология <span className="primary-color">21 века</span>
      </h2>
      <p className={cn(styles.text)}>
        Использование дентального микроскопа при лечении зубов — это одна из передовых технологий, которой мы очень
        активно пользуемся в клинике. Благодаря ей врач может точно и быстро делать самую сложную работу. Теперь за один
        визит можно комфортно избавиться от проблем, на которые раньше требовалось в несколько раз больше времени.
        Методика уже спасла множество зубов от удаления.
      </p>

      <div className={styles.background}>
        <div className={styles.field}></div>
      </div>
    </div>
  </section>
);
