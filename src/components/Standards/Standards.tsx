import cn from 'classnames';
import Image from 'next/image';

import useElementOnScreen from '@/hooks/useElementOnScreen';

import styles from './Standards.module.css';

export const Standards = () => {
  const { ref } = useElementOnScreen();

  const cards = [
    { title: 'Авторские методики', text: 'Профессиональное признание стоматологов- экспертов' },
    { title: 'Дентальный микроскоп', text: 'Это новое качество в стоматологии XXI века' },
    { title: 'Новое оборудование', text: 'А также лучшие доступные материалы и расходники' },
    { title: 'Безопасность', text: 'Одноразовый инструментарий, стерилизация, ультрафиолет ' },
    { title: 'Домашняя атмосфера', text: 'Всегда ждём гостей! Кофе тоже наливаем (без сахара)' },
    { title: 'Цены не московские', text: 'А ещё скидки в честь открытия клиники!' },
    { title: 'Экономия времени', text: 'Доступны все услуги — не нужно колесить по городу' },
    { title: 'Гарантии клиники', text: 'На все работы даём официальную гарантию' },
  ];

  return (
    <section className="container" ref={ref}>
      <h2 className={cn(styles.title, 'heading2')}>
        Авторская клиника <span className="primary-color">по стандартам Италии</span>
      </h2>
      <p className={styles.description}>
        Создавая клинику «Паравина», мы руководствовались новыми российскими отраслевыми требованиями и компиляцией
        знаний, полученных в клиниках Италии во время интенсивов и мастер-классов у лидеров рынка.
      </p>

      <ul className={styles['cards-list']}>
        {cards.map((card, index) => (
          <li key={index} className={cn(styles.card, 'invisible-child')} data-child>
            <Image
              src={`/standards-image/standards-${index + 1}.jpg`}
              alt={`${card.title}`}
              width={100}
              height={100}
              className={styles.img}
            />
            <h3 className={cn(styles['card-title'], 'secondary-color')}>{card.title}</h3>
            <p className={styles.text}>{card.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
