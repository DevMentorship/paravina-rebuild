import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Spinner } from '../Spinner/Spinner';
import styles from './Popup.module.css';

enum errMessage {
  name = 'Имя не может содержать цифры',
  shortName = 'Имя не может быть короче 2 символов',
  noName = 'Укажите имя',
  phoneSymbols = 'Телефон может содержать только цифры и символы + ( ) -',
  phoneLength = 'Неверная длина телефона',
  noPhone = 'Укажите телефон',
  note = 'Максимальная длина примечания 300 символов',
  noAgreement = 'Примите соглашение, пожалуйста',
  fetchErr = 'Что-то пошло не так. Попробуйте позже',
}

interface IPopupProps {
  popupRef: React.RefObject<HTMLDivElement>;
  modalIsOpened: boolean;
  setModalIsOpened: (state: boolean) => void;
}

type IFormFields = {
  name: string;
  phone: string;
  note: string;
  agreement: boolean;
};

const defaultSubmitStatus = {
  isLoading: false,
  status: '',
  err: '',
};

const defaultFormFields = {
  name: '',
  phone: '',
  note: '',
  agreement: false,
};

export const Popup = ({ popupRef, modalIsOpened, setModalIsOpened }: IPopupProps) => {
  const [submitStatus, setSubmitStatus] = useState(defaultSubmitStatus);
  const [noteLength, setNoteLength] = useState(0);
  const {
    reset,
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({ defaultValues: defaultFormFields });

  function fetchSubmit(_data: IFormFields): Promise<string> {
    //Here should be backend endpoint for submitting

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          resolve('200');
        } else {
          reject(new Error('400'));
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  }

  const onSubmit = async (data: IFormFields) => {
    setSubmitStatus({ ...submitStatus, isLoading: true, status: '' });
    async function handleFetchResult(message: string) {
      setSubmitStatus({ ...submitStatus, isLoading: false, status: message });
      if (message === '200') {
        reset();
      }
      setTimeout(() => {
        setSubmitStatus({ ...submitStatus, status: '' });
        setModalIsOpened(false);
      }, 6000);
    }

    await fetchSubmit(data)
      .then((status) => {
        handleFetchResult(status);
      })
      .catch((error) => {
        handleFetchResult(error.message);
      });
    return;
  };

  function getNoun(number: number, word: string) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return word + 'ов';
    }
    n %= 10;
    if (n === 1) {
      return word;
    }
    if (n >= 2 && n <= 4) {
      return word + 'а';
    }
    return word + 'ов';
  }

  return (
    <>
      <button
        className={cn(styles['popup-bg'], modalIsOpened && styles['popup-opened'])}
        onClick={() => setModalIsOpened(false)}
        aria-label="Закрыть модальное окно"
      ></button>
      <div className={cn(styles.popup, modalIsOpened && styles['popup-opened'])} ref={popupRef}>
        {submitStatus.isLoading && <Spinner />}
        {!submitStatus.isLoading && submitStatus.status === '' && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="heading2">Связаться с нами</h2>
            <input
              {...register('name', {
                required: errMessage.noName,
                minLength: { value: 2, message: errMessage.shortName },
                pattern: /\D/,
              })}
              placeholder="Имя"
              type="text"
            />
            <input
              {...register('phone', {
                required: errMessage.noPhone,
                pattern: {
                  value: /[0-9+\-\s()]/g,
                  message: errMessage.phoneSymbols,
                },
                validate: (value) => {
                  const phoneLength = value.replace(/\D/g, '').length;
                  if (phoneLength < 10 || phoneLength > 11) return errMessage.phoneLength;
                },
              })}
              placeholder="Телефон"
              type="text"
            />
            <textarea
              {...register('note', {
                maxLength: {
                  value: 300,
                  message: `Вы превысили лимит на ${noteLength - 300} ${getNoun(noteLength, 'символ')}`,
                },
              })}
              placeholder="Примечание"
              onChange={(event) => setNoteLength(event.currentTarget.value.length)}
              onBlur={() => clearErrors}
            />
            <div className={cn(styles['popup-info'])}>
              <label>
                <input {...register('agreement', { required: errMessage.noAgreement })} type="checkbox" />
                <span>Согласие с&nbsp;</span>
                <a href="/agreement">условиями</a>
              </label>
              {Object.keys(errors).length > 0 && (
                <span className={cn(styles['popup-err'])}>
                  {errors[Object.keys(errors)[0] as keyof typeof errors]?.message}
                </span>
              )}
              {noteLength >= 250 && noteLength <= 300 && (
                <span className={cn(styles['popup-note-notification'])}>
                  Осталось&nbsp;{300 - noteLength}&nbsp;{getNoun(300 - noteLength, 'символ')}
                </span>
              )}
              {noteLength >= 301 && (
                <span className={cn(styles['popup-note-notification'], styles.warning)}>
                  Вы превысили лимит на&nbsp;{noteLength - 300}&nbsp;
                  {getNoun(noteLength, 'символ')}
                </span>
              )}
            </div>
            <div className={cn(styles['popup-submit'])}>
              <button
                onClick={() => setModalIsOpened(false)}
                formMethod="dialog"
                type="button"
                aria-label="Закрыть модальное окно"
              >
                Закрыть
              </button>

              <button type="submit">Отправить</button>
            </div>
          </form>
        )}
        {submitStatus.status === '200' && (
          <div className={cn(styles['popup-message'])}>
            <Image src={'/assets/done.svg'} alt="Success" width={50} height={50} />
            <h2>Успешно</h2>
          </div>
        )}
        {submitStatus.status === '400' && (
          <div className={cn(styles['popup-message'])}>
            <Image src={'/assets/error.svg'} alt="Fail" width={50} height={50} />
            <h2>{errMessage.fetchErr}</h2>
          </div>
        )}
      </div>
    </>
  );
};
