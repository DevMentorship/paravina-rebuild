import styles from './Tabs.module.css';
import cn from 'classnames';
import Image from 'next/image';
import {useState} from "react";


interface Services {
    [key: string]: Service[];
}

interface Service {
    id: number;
    imgSrc: string;
    title: string;
    description: string;
    category: string;
}

export const Tabs = () => {

    const services: Services = {
        stomatology: [
            {
                id: 1,
                imgSrc: '/stomatology-icons/stomatology-icon-1.png',
                title: 'Лечение кариеса',
                description: 'С комфортом и полностью без боли!',
                category: 'stomatology'
            },
            {
                id: 2,
                imgSrc: '/stomatology-icons/stomatology-icon-2.png',
                title: 'Реставрация зубов',
                description: 'Используем только лучшие материалы в отрасли',
                category: 'stomatology'
            },
            {
                id: 3,
                imgSrc: '/stomatology-icons/stomatology-icon-3.png',
                title: 'Виниры и вкладки',
                description: 'Широкий выбор возможностей',
                category: 'stomatology'
            },
            {
                id: 4,
                imgSrc: '/stomatology-icons/stomatology-icon-4.png',
                title: 'Профгигиена',
                description: 'Профессиональная чистка, уход и отбеливание',
                category: 'stomatology'
            },
            {
                id: 5,
                imgSrc: '/stomatology-icons/stomatology-icon-5.png',
                title: 'Брекеты',
                description: 'Исправим прикус современными системами',
                category: 'stomatology'
            },
            {
                id: 6,
                imgSrc: '/stomatology-icons/stomatology-icon-6.png',
                title: 'Протезирование',
                description: 'Подскажем наилучший выход',
                category: 'stomatology'
            },
            {
                id: 7,
                imgSrc: '/stomatology-icons/stomatology-icon-7.png',
                title: 'Имплантация зубов',
                description: 'Надёжные импланты из Германии',
                category: 'stomatology'
            },
            {
                id: 8,
                imgSrc: '/stomatology-icons/stomatology-icon-8.png',
                title: 'Детский стоматолог',
                description: 'Без слёз!',
                category: 'stomatology'
            }
        ],
        cosmetology: [
            {
                id: 1,
                imgSrc: '/cosmetology-icons/cosmetology-icon-1.png',
                title: 'Комплексные уходы',
                description: 'С индивидуальным подбором средств',
                category: 'cosmetology'
            },
            {
                id: 2,
                imgSrc: '/cosmetology-icons/cosmetology-icon-2.png',
                title: 'Чистка лица',
                description: 'Комфортно и деликатно',
                category: 'cosmetology'
            },
            {
                id: 3,
                imgSrc: '/cosmetology-icons/cosmetology-icon-3.png',
                title: 'Пилинги',
                description: 'Профессиональная линейка косметики',
                category: 'cosmetology'
            },
            {
                id: 4,
                imgSrc: '/cosmetology-icons/cosmetology-icon-4.png',
                title: 'Биоревитализация',
                description: 'Омоложение на все 100',
                category: 'cosmetology'
            },
            {
                id: 5,
                imgSrc: '/cosmetology-icons/cosmetology-icon-5.png',
                title: 'Мезотерапия',
                description: 'Быстрое решение проблем кожи',
                category: 'cosmetology'
            },
            {
                id: 6,
                imgSrc: '/cosmetology-icons/cosmetology-icon-6.png',
                title: 'Ботулинотерапия',
                description: 'Нет морщинам!',
                category: 'cosmetology'
            },
            {
                id: 7,
                imgSrc: '/cosmetology-icons/cosmetology-icon-7.png',
                title: 'Плазмотерапия',
                description: 'Глубокое воздействие собственной плазмой',
                category: 'cosmetology'
            },
            {
                id: 8,
                imgSrc: '/cosmetology-icons/cosmetology-icon-8.png',
                title: 'Массажи',
                description: 'Здоровье и расслабление',
                category: 'cosmetology'
            }
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState<'stomatology' | 'cosmetology'>('stomatology');

    const filteredServices = services[selectedCategory]?.filter((service) => service.category === selectedCategory) ?? [];

    return (
        <section className={cn('container', styles.container)}>
            <div className={styles.wrapper}>
                <div className={styles['triggers-wrapper']}>
                    <div className={styles.triggers}>
                        <div
                            className={selectedCategory === 'stomatology' ? cn(styles.trigger, styles['trigger--active'])
                                : styles.trigger} onClick={() => setSelectedCategory('stomatology')}>Стоматология
                        </div>
                        <div
                            className={selectedCategory === 'cosmetology' ? cn(styles.trigger, styles['trigger--active'])
                                : styles.trigger} onClick={() => setSelectedCategory('cosmetology')}>Косметология
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.items}>
                {filteredServices.map((service) => (
                    <div key={service.id} className={cn(styles.item)}>
                        <Image src={service.imgSrc} alt={service.title} className={cn(styles.img)} width={100}
                               height={100}/>
                        <h3 className={cn(styles['item-title'])}>{service.title}</h3>
                        <p className={cn(styles['item-description'])}>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
