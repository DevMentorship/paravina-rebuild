import { EventParameters } from './types/ymEvents';

type YM = (tagID: number, ...parameters: EventParameters) => void;

export const ym = (tagID: number | null, ...parameters: EventParameters) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- ym is defined by the Yandex.Metrica script
  // @ts-ignore
  const ym = window.ym as YM | undefined;

  if (!ym || !tagID) {
    return;
  }

  ym(tagID, ...parameters);
};
