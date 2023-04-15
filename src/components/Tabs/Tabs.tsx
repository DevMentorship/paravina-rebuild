import styles from './Tabs.module.css';
import cn from 'classnames';
import Image from 'next/image';

export const Tabs = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles['services-title']}>
        Стоматология и косметология <span>в одной клинике!</span>
      </h2>
      <p className={styles['services-description']}>
        Мы предоставляем весь спектр стоматологических и косметологических услуг по демократичным ценам.
        Профессиональный и перспективный коллектив нашей клиники гарантирует высочайшее качество лечения.
      </p>
      <div className={styles.wrapper}>
        <div className={styles['triggers-wrapper']}>
          <div className={styles.triggers}>
            <div className={cn(styles.trigger, styles['trigger--active'])}>Стоматология</div>
            <div className={styles.trigger}>Косметология</div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.item}>
            <Image className={styles.img} src='/stomatology-icons/stomatology-icon-1.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Лечение кариеса</h3>
            <p className={styles.description}>С комфортом и полностью без боли!</p>
          </div>

          <div className={styles.item}>
            <Image className={styles.img} src='/stomatology-icons/stomatology-icon-2.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Реставрация зубов</h3>
            <p className={styles.description}>Используем только лучшие материалы в отрасли</p>
          </div>

          <div className={styles.item}>
            <Image className={styles.img} src='/stomatology-icons/stomatology-icon-3.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Виниры и вкладки</h3>
            <p className={styles.description}>Широкий выбор возможностей</p>
          </div>

          <div className={styles.item}>
            <Image className={styles.img} src='/stomatology-icons/stomatology-icon-4.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Профгигиена</h3>
            <p className={styles.description}>Профессиональная чистка, уход и отбеливание</p>
          </div>

          <div className={styles.item}>
            <Image className={styles.img} src='/stomatology-icons/stomatology-icon-5.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Брекеты</h3>
            <p className={styles.description}>Исправим прикус современными системами</p>
          </div>

          <div className={styles.item}>
            <Image className={styles.img} src='/stomatology-icons/stomatology-icon-6.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Протезирование</h3>
            <p className={styles.description}>Подскажем наилучший выход</p>
          </div>

          <div className={styles.item}>
            <Image className={styles.img} src='/stomatology-icons/stomatology-icon-7.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Имплантация зубов</h3>
            <p className={styles.description}>Надёжные импланты из Германии</p>
          </div>

          <div className={styles.item}>
            <Image className={styles.img} src='/stomatology-icons/stomatology-icon-8.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Детский стоматолог</h3>
            <p className={styles.description}>Без слёз!</p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.item}>
            <Image className={styles.img} src='/cosmetology-icons/cosmetology-icon-1.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Комплексные уходы</h3>
            <p className={styles.description}>С индивидуальным подбором средств</p>
          </div>

          <div className={styles.item}>
            <Image className={styles.img} src='/cosmetology-icons/cosmetology-icon-2.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Чистка лица</h3>
            <p className={styles.description}>Комфортно и деликатно</p>
          </div>

          <div className={styles.item}>
            <Image className={styles.img} src='/cosmetology-icons/cosmetology-icon-3.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Пилинги</h3>
            <p className={styles.description}>Профессиональная линейка косметики</p>
          </div>

          <div className={styles.item}>
            <Image className={styles.img} src='/cosmetology-icons/cosmetology-icon-4.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Биоревитализация</h3>
            <p className={styles.description}>Омоложение на все 100</p>
          </div>

          <div className={styles.item}>
            <Image className={styles.img} src='/cosmetology-icons/cosmetology-icon-5.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Мезотерапия</h3>
            <p className={styles.description}>Быстрое решение проблем кожи</p>
          </div>

          <div className={styles.item}>
            <Image className={styles.img} src='/cosmetology-icons/cosmetology-icon-6.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Ботулинотерапия</h3>
            <p className={styles.description}>Нет морщинам!</p>
          </div>

          <div className={styles.item}>
            <Image className={styles.img} src='/cosmetology-icons/cosmetology-icon-7.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Плазмотерапия</h3>
            <p className={styles.description}>Глубокое воздействие собственной плазмой</p>
          </div>

          <div className={styles.item}>
            <Image className={styles.img} src='/cosmetology-icons/cosmetology-icon-8.png' alt='' width={100} height={100} />
            <h3 className={styles.title}>Массажи</h3>
            <p className={styles.description}>Здоровье и расслабление</p>
          </div>
        </div>
      </div>
    </section>
  );
};
