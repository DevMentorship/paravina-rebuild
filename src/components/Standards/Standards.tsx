import styles from './Standards.module.css'
import Image from 'next/image'

export const Standards = () => {
  return (
    <section className='container'>
      <div className={styles.standards_wrapper}>
        <h2 className={styles.title}>
          Авторская клиника <span>по стандартам Италии</span>
        </h2>
        <p className={styles.description}>
          Создавая клинику «Паравина», мы руководствовались новыми российскими отраслевыми требованиями и компиляцией
          знаний, полученных в клиниках Италии во время интенсивов и мастер-классов у лидеров рынка.
        </p>

        <ul className={styles.cards_list}>
          <li className={styles.card}>
            <Image
              src='/standards-image/standards-1.jpg'
              alt='photographer'
              width={100}
              height={100}
              className={styles.img}
            />
            <h3 className={styles.card_title}>Авторские методики</h3>
            <p className={styles.card_text}>Профессиональное признание стоматологов- экспертов</p>
          </li>
          <li className={styles.card}>
            <Image
              src='/standards-image/standards-2.jpg'
              alt='photographer'
              width={100}
              height={100}
              className={styles.img}
            />
            <h3 className={styles.card_title}>Дентальный микроскоп</h3>
            <p className={styles.card_text}>Это новое качество в стоматологии XXI века</p>
          </li>
          <li className={styles.card}>
            <Image
              src='/standards-image/standards-3.jpg'
              alt='photographer'
              width={100}
              height={100}
              className={styles.img}
            />
            <h3 className={styles.card_title}>Новое оборудование</h3>
            <p className={styles.card_text}>А также лучшие доступные материалы и расходники</p>
          </li>
          <li className={styles.card}>
            <Image
              src='/standards-image/standards-4.jpg'
              alt='photographer'
              width={100}
              height={100}
              className={styles.img}
            />
            <h3 className={styles.card_title}>Безопасность</h3>
            <p className={styles.card_text}>Одноразовый инструментарий, стерилизация, ультрафиолет</p>
          </li>
          <li className={styles.card}>
            <Image
              src='/standards-image/standards-5.jpg'
              alt='photographer'
              width={100}
              height={100}
              className={styles.img}
            />
            <h3 className={styles.card_title}>Домашняя атмосфера</h3>
            <p className={styles.card_text}>Всегда ждём гостей! Кофе тоже наливаем (без сахара)</p>
          </li>
          <li className={styles.card}>
            <Image
              src='/standards-image/standards-6.jpg'
              alt='photographer'
              width={100}
              height={100}
              className={styles.img}
            />
            <h3 className={styles.card_title}>Цены не московские</h3>
            <p className={styles.card_text}>А ещё скидки в честь открытия клиники!</p>
          </li>
          <li className={styles.card}>
            <Image
              src='/standards-image/standards-7.jpg'
              alt='photographer'
              width={100}
              height={100}
              className={styles.img}
            />
            <h3 className={styles.card_title}>Экономия времени</h3>
            <p className={styles.card_text}>Доступны все услуги — не нужно колесить по городу</p>
          </li>
          <li className={styles.card}>
            <Image
              src='/standards-image/standards-8.jpg'
              alt='photographer'
              width={100}
              height={100}
              className={styles.img}
            />
            <h3 className={styles.card_title}>Гарантии клиники</h3>
            <p className={styles.card_text}>На все работы даём официальную гарантию</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
