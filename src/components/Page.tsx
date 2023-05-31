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
      <Header headerStyle={route.asPath === '/' ? 'transparent' : 'gray'} />
      <main>
        <h1 className="visually-hidden">Unie espresso bar - Menu</h1>
        <h2 className="visually-hidden">Первый эспрессо бар в Самаре</h2>
        {children}
      </main>
      <Footer />
    </>
  );
};
