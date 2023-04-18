import Image from 'next/image';

import styles from './Standards.module.css';

export const Standards = () => {
  const cards = [
    { id: '1', title: 'Авторские методики', text: 'Профессиональное признание стоматологов- экспертов' },
    { id: '2', title: 'Дентальный микроскоп', text: 'Это новое качество в стоматологии XXI века' },
    { id: '3', title: 'Новое оборудование', text: 'А также лучшие доступные материалы и расходники' },
    { id: '4', title: 'Безопасность', text: 'Одноразовый инструментарий, стерилизация, ультрафиолет ' },
    { id: '5', title: 'Домашняя атмосфера', text: 'Всегда ждём гостей! Кофе тоже наливаем (без сахара)' },
    { id: '6', title: 'Цены не московские', text: 'А ещё скидки в честь открытия клиники!' },
    { id: '7', title: 'Экономия времени', text: 'Доступны все услуги — не нужно колесить по городу' },
    { id: '8', title: 'Гарантии клиники', text: 'На все работы даём официальную гарантию' },
  ];

  return (
    <section className="container">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Авторская клиника <span>по стандартам Италии</span>
        </h2>
        <p className={styles.description}>
          Создавая клинику «Паравина», мы руководствовались новыми российскими отраслевыми требованиями и компиляцией
          знаний, полученных в клиниках Италии во время интенсивов и мастер-классов у лидеров рынка.
        </p>

        <ul className={styles['cards-list']}>
          {cards.map((card, index) => (
            <li key={card.id} className={styles.card}>
              <Image
                src={`/standards-image/standards-${index + 1}.jpg`}
                alt={`${card.title}`}
                width={100}
                height={100}
                className={styles.img}
              />
              <h3 className={styles['card-title']}>{card.title}</h3>
              <p className={styles.text}>{card.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
