import cn from 'classnames';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

import { Button } from '../Button/Button';
import styles from './TeamPopup.module.css';

// Создаем интерфейс для описания пропсов компонента Popup
interface IPopupProps {
  // Пропс isOpen имеет тип boolean
  isOpen: boolean;
  // Пропс onClose имеет тип функции, которая не принимает аргументов и не возвращает значения
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const TeamPopup = (props: IPopupProps) => {
  const { isOpen, onClose } = props;
  return (
    <div className={cn(styles['popup-wrapper'], isOpen && styles['popup-active'])}>
      <form className={cn(styles['popup'])}>
        <h3 className={styles['popup-title']}>Запишитесь на прием!</h3>
        <input className={styles['popup-input']} type="text" placeholder="Имя" />
        <input className={styles['popup-input']} type="text" placeholder="Номер телефона" />
        <select className={styles['popup-input']} placeholder="">
          <option value="">Выберите специалиста</option>
          <option value="Артур Радзевич">Артур Радзевич</option>
          <option value="Надежда Музыка">Надежда Музыка</option>
          <option value="Екатерина Паравина">Екатерина Паравина</option>
          <option value="Жале Султанова">Жале Султанова</option>
          <option value="Татьяна Шафикова">Татяна Шафикова</option>
          <option value="Александр Кузнецов">Александр Кузнецов</option>
          <option value="Светлана Старостина">Светлана Старостина</option>
          <option value="Анастасия Антонова">Анастасия Антонова</option>
        </select>
        <textarea className={styles['popup-input']} placeholder="Примечание" />
        <Button>Записаться</Button>
        <Image
          src="https://res.cloudinary.com/dkqwi0tah/image/upload/f_auto,q_auto/v1686488243/Paravina-rebuild/Group_23_1_kyzza2.svg"
          alt={''}
          width={'20'}
          height={'20'}
          className={styles['popup-close']}
          onClick={() => {
            onClose(false);
          }}
        />
      </form>
    </div>
  );
};
