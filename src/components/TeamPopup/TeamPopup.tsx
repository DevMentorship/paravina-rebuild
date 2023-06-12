/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import cn from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../Button/Button';
import { IDoctor } from '../Team/Team';
import styles from './TeamPopup.module.css';

interface IPopupProps {
  isOpen: {
    open: boolean;
    doctor: string;
  };
  onClose: Dispatch<
    SetStateAction<{
      open: boolean;
      doctor: string;
    }>
  >;
  doctors: IDoctor[];
}

interface IPopupForm {
  name: string;
  tel: string;
  doctor: string;
  note: string;
}

export const TeamPopup = ({ isOpen, onClose, doctors }: IPopupProps) => {
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
    <div
      onClick={(e) => {
        e.preventDefault();
        onClose({ open: false, doctor: '' });
      }}
      className={cn(styles['popup-wrapper'], isOpen.open && styles['popup-active'])}
    >
      <form
        onClick={(e) => {
          e.stopPropagation(); // prevent event bubbling
        }}
        className={cn(styles['popup'])}
        onSubmit={handleSubmit(onSubmit)}
      >
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
            className={styles['popup-select']}
          >
            {doctors.map((doctor, index) => (
              <option selected={doctor.name === isOpen.doctor ? true : false} key={index} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          {errors.note && errors.note.message}
          <textarea {...register('note')} className={styles['popup-note']} placeholder="Примечание" />
        </div>
        <div className={styles['btn-wrapper']}>
          <Button className={styles.btn}>Записаться</Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              onClose({ open: false, doctor: '' });
            }}
            className={styles.btn}
            type="secondary"
          >
            Назад
          </Button>
        </div>
      </form>
    </div>
  );
};
