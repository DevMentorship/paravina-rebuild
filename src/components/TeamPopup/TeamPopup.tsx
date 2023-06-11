import cn from 'classnames';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../Button/Button';
import styles from './TeamPopup.module.css';

interface IPopupProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

interface IPopupForm {
  name: string;
  tel: string;
  doctor: string;
  note: string;
}

export const TeamPopup = (props: IPopupProps) => {
  const { isOpen, onClose } = props;
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IPopupForm>();

  const onSubmit = (data: IPopupForm) => {
    console.log(data);
  };

  return (
    <div className={cn(styles['popup-wrapper'], isOpen && styles['popup-active'])}>
      <form className={cn(styles['popup'])} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles['popup-title']}>Запишитесь на прием!</h3>
        <div>
          {errors.name && errors.name.message}
          <input
            {...register('name', { required: { value: true, message: 'Введите имя' } })}
            className={styles['popup-input']}
            type="text"
            placeholder="Имя"
          />
        </div>
        <div>
          {errors.tel && errors.tel.message}
          <input
            {...register('tel', { required: { value: true, message: 'Введите номер телефона' } })}
            className={styles['popup-input']}
            type="text"
            placeholder="Номер телефона"
          />
        </div>
        <div>
          {errors.doctor && errors.doctor.message}
          <select
            {...register('doctor', { required: { value: true, message: 'Выберите специалиста' } })}
            className={styles['popup-input']}
            placeholder=""
          >
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
        </div>
        <div>
          {errors.note && errors.note.message}
          <textarea {...register('note')} className={styles['popup-input']} placeholder="Примечание" />
        </div>
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
