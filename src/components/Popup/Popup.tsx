import cn from 'classnames';
import { useState } from 'react';

import Image from 'next/image';
import { Spinner } from '../Spinner/Spinner';
import styles from './Popup.module.css';

enum errMessage {
  name = 'Имя не может содержать цифры',
  shortName = 'Имя не может быть короче 2 символов',
  phone = 'Введите номер телефона в формате 8 999 111 1111',
  note = 'Опишите вашу проблему',
  agreement = 'Примите соглашение, пожалуйста',
  fetchErr = 'Что-то пошло не так. Попробуйте позже',
}

interface IPopupProps {
  popupRef: React.RefObject<HTMLDialogElement>;
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

export const Popup = ({ popupRef }: IPopupProps) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [submitStatus, setSubmitStatus] = useState(defaultSubmitStatus);
  const { name, phone, note, agreement } = formFields;

  popupRef.current?.addEventListener('click', (e) => {
    if (e.target instanceof HTMLDialogElement && !e.target.closest('form')) {
      e.target.close();
    }
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === 'agreement') {
      setFormFields({ ...formFields, agreement: !agreement });
      return;
    }
    if (name === 'phone') {
      const phone = value.replace(/\D/g, '');
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
        if (randomNumber < 0.1) {
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
    if (phone.length !== (10 || 11)) {
      setSubmitStatus({ ...submitStatus, err: errMessage.phone });
      return;
    }
    if (!note) {
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
        popupRef.current?.close();
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

  return (
    <dialog className={cn(styles.popup)} ref={popupRef}>
      <button
        className={cn(styles['popup-close'])}
        onClick={() => popupRef.current?.close()}
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
          <textarea required placeholder="Примечание" name="note" value={note} onChange={handleChange} />
          <div className={cn(styles['popup-submit'])}>
            {submitStatus.err && <span className={cn(styles['popup-err'])}>{submitStatus.err}</span>}
            <label>
              <input required type="checkbox" name="agreement" checked={agreement} onChange={handleChange} />
              <a href="/agreement">Согласие с условиями</a>
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
