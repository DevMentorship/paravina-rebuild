import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ReactNode } from 'react';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

export const Page = ({ children }: { children?: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
