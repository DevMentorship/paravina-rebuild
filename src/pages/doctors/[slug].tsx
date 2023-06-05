import { PortableText } from '@portabletext/react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { IDoctor } from '@/components/Team/Team';
import { client } from '@/lib/client';

import styles from './slug.module.css';

interface IDoctorProps {
  doctor: IDoctor;
}

export default function Doctor({ doctor }: IDoctorProps) {
  return (
    <article className={styles.wrapper}>
      <Link className={cn(styles['back'], 'paragraph')} href={'/about'}>
        <Image
          src="https://res.cloudinary.com/dkqwi0tah/image/upload/f_auto,q_auto/v1685609956/Paravina-rebuild/arrow_wy5l6k.svg"
          alt="назад"
          width={30}
          height={30}
        />
        Назад
      </Link>
      <h1>{doctor.title}</h1>
      <div className={cn(styles.body, 'paragraph')}>
        <PortableText value={doctor.body} />
      </div>
    </article>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "doctor"] {
      slug {
          current
      }
  }`;

  const doctors: IDoctor[] = await client.fetch(query);
  const paths = doctors.map((doctor) => ({
    params: {
      slug: doctor.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const query = `*[_type == "doctor" && slug.current == '${params.slug}'][0]`;

  const doctor: IDoctor = await client.fetch(query);
  return { props: { doctor } };
};
