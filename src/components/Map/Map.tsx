import cn from 'classnames';
import Link from 'next/link';

import styles from './Map.module.css';

export const Map = () => (
  <section className={cn(styles['map-wrapper'], 'container')}>
    <div>
      <h3 className={cn(styles['map-title'], 'heading3')}>Где мы находимся?</h3>
      <p className={cn(styles['map-desc'], 'paragraph')}>Нашу клинику можно найти по адресу:</p>
      <Link className={styles['map-link']} href="https://yandex.ru/maps/51/samara/?utm_medium=mapframe&utm_source=maps">
        Самара
      </Link>
      <Link
        className={styles['map-link']}
        href="https://yandex.ru/maps/51/samara/house/novo_sadovaya_ulitsa_164a/YUkYdw9jSUcAQFtpfX5ycnpmYg==/?ll=50.186546%2C53.231725&utm_medium=mapframe&utm_source=maps&z=14"
      >
        Ново-Садовая улица, 164А — Яндекс Карты
      </Link>
    </div>
    <iframe
      className={styles['map-window']}
      title="Яндекс карта"
      src="https://yandex.ru/map-widget/v1/?ll=50.186546%2C53.231725&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzM3ODgxMxJF0KDQvtGB0YHQuNGPLCDQodCw0LzQsNGA0LAsINCd0L7QstC-LdCh0LDQtNC-0LLQsNGPINGD0LvQuNGG0LAsIDE2NNCQIgoNbLtIQhVE71RC&z=14"
      width="560"
      height="400"
      frameBorder="1"
    ></iframe>
  </section>
);
