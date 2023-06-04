import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

export const Page = ({ children }: { children?: ReactNode }) => {
  const route = useRouter();
  return (
    <>
      <Header isVisible={route.asPath !== '/'} />
      <main>
        <h1 className="visually-hidden">Стоматология Паравина</h1>
        <h2 className="visually-hidden">
          Авторская клиника эстетической стоматологии и косметологии Екатерины Паравиной в городе Самара.
        </h2>
        {children}
      </main>
      <Footer />
    </>
  );
};
