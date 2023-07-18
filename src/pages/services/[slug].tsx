import cn from 'classnames';
import Image from 'next/image';

import { urlFor } from '@/lib/client';
import { client } from '@/lib/client';

import styles from './slug.module.css';

interface IAboutService {
  service_title: string;
  description: string;
  _key: string;
}

interface IAboutDoctor {
  name: string;
  photo: string;
  _key: string;
}

export interface IService {
  index: number;
  role: string;
  slug: {
    current: string;
    _type: string;
  };
  services: IAboutService[];
  doctors: IAboutDoctor[];
}

interface IServiceProps {
  service: IService;
}

const Service = ({ service }: IServiceProps) => {
  const { role, services, doctors } = service;
  return (
    <div className={cn('container')}>
      <>{role}</>
      {services.map(({ description, service_title, _key }) => (
        <div
          style={{
            margin: '20px',
          }}
          key={_key}
        >
          <div>{service_title}</div>
          <div>{description}</div>
        </div>
      ))}

      {doctors.map(({ name, photo, _key }) => (
        <div key={_key}>
          <div>{name}</div>
          <Image src={urlFor(photo).url()} alt={name} width={200} height={200} />
        </div>
      ))}
    </div>
  );
};

export default Service;

export async function getStaticPaths() {
  const query = `*[_type == "services"] {
      slug {
          current
      }
  }`;

  const services: IService[] = await client.fetch(query);
  const paths = services.map((service) => ({
    params: {
      slug: service.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const query = `*[_type == "services" && slug.current == '${params.slug}'][0]`;

  const service: IService = await client.fetch(query);
  return { props: { service } };
};
