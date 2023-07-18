import cn from 'classnames';
import Link from 'next/link';

import { IService } from '@/pages/services/[slug]';

import styles from './Banner.module.css';

export interface IBannerProps {
  services: IService[];
}

export const Banner = ({ services }: IBannerProps): JSX.Element => (
  <div className={cn('container', styles.banner)}>
    {services.map((service: IService) => (
      <Link href={`/services/${service.slug.current}`} key={service.index} className={styles.link}>
        {service.role}
      </Link>
    ))}
  </div>
);
