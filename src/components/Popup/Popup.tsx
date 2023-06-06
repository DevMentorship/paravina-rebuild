import cn from 'classnames';
import { useState } from 'react';

import Image from 'next/image';
import { Spinner } from '../Spinner/Spinner';
import styles from './Popup.module.css';

enum errMessage {
  name = 'Имя не может содержать цифры',
  shortName = 'Имя не может быть короче 2 символов',
  phone = 'Введите номер телефона в формате 7 999 111 1111',
  note = 'Максимальная длина примечания 300 символов',
  agreement = 'Примите соглашение, пожалуйста',
  fetchErr = 'Что-то пошло не так. Попробуйте позже',
}

interface IPopupProps {
  popupRef: React.RefObject<HTMLDialogElement>;
  closeModal: (ref: HTMLDialogElement) => void;
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

export const Popup = ({ popupRef, closeModal }: IPopupProps) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [submitStatus, setSubmitStatus] = useState(defaultSubmitStatus);
  const { name, phone, note, agreement } = formFields;

  popupRef.current?.addEventListener('click', (e) => {
    if (e.target instanceof HTMLDialogElement && !e.target.closest('form')) {
      closeModal(e.target);
    }
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSubmitStatus({ ...submitStatus, err: '' });

    const { name, value } = event.target;
    if (name === 'agreement') {
      setFormFields({ ...formFields, agreement: !agreement });
      return;
    }
    if (name === 'phone') {
      const phone = value.replace(/[^0-9+\-\s()]/g, '');
      setFormFields({ ...formFields, [name]: phone });
      return;
    }
    setFormFields({ ...formFields, [name]: value });
    return;
  };

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (/\d/.test(name)) {
      setSubmitStatus({ ...submitStatus, err: errMessage.name });
      return;
    }
    if (name.length < 2) {
      setSubmitStatus({ ...submitStatus, err: errMessage.shortName });
      return;
    }
    const phoneLength = phone.replace(/\D/g, '').length;
    if (phoneLength < 10 || phoneLength > 11) {
      setSubmitStatus({ ...submitStatus, err: errMessage.phone });
      return;
    }
    if (note.length > 300) {
      setSubmitStatus({ ...submitStatus, err: errMessage.note });
      return;
    }
    if (!agreement) {
      setSubmitStatus({ ...submitStatus, err: errMessage.agreement });
      return;
    }
    setSubmitStatus({ ...submitStatus, err: '', isLoading: true });

    async function handleFetchResult(message: string) {
      setSubmitStatus({ ...submitStatus, isLoading: false, status: message });
      if (message === '200') {
        setFormFields(defaultFormFields);
      }
      setTimeout(() => {
        setSubmitStatus({ ...submitStatus, status: '' });
        closeModal(popupRef.current as HTMLDialogElement);
      }, 6000);
    }

    await fetchSubmit(formFields)
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
    <dialog className={cn(styles.popup)} ref={popupRef}>
      <button
        className={cn(styles['popup-close'])}
        onClick={(e) => closeModal(popupRef.current as HTMLDialogElement)}
        formMethod="dialog"
        type="button"
      >
        &#x2716;
      </button>
      {submitStatus.isLoading && <Spinner />}
      {!submitStatus.isLoading && submitStatus.status === '' && (
        <form onSubmit={handleSubmit}>
          <h2 className="heading2">Связаться с нами</h2>
          <input required placeholder="Имя" name="name" type="text" value={name} onChange={handleChange} />
          <input required placeholder="Телефон" name="phone" type="text" value={phone} onChange={handleChange} />
          <textarea placeholder="Примечание" name="note" value={note} onChange={handleChange} />
          {note.length >= 250 && note.length <= 300 &&(
            <span className={cn(styles['popup-note-notification'])}>
              Осталось&nbsp;{300 - note.length}&nbsp;{getNoun(300 - note.length, 'символ')}
            </span>
          )}
          {note.length >= 301 && (
            <span className={cn(styles['popup-note-notification'], styles.warning) }>
              Вы превысили лимит на&nbsp;{note.length - 300}&nbsp;{getNoun(note.length, 'символ')}
            </span>
          )}
          <div className={cn(styles['popup-submit'])}>
            {submitStatus.err && <span className={cn(styles['popup-err'])}>{submitStatus.err}</span>}
            <label>
              <input required type="checkbox" name="agreement" checked={agreement} onChange={handleChange} />
              <span>Согласие с&nbsp;</span>
              <a href="/agreement">условиями</a>
            </label>
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
    </dialog>
  );
};
