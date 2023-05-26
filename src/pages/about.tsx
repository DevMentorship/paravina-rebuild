import { AboutHero } from '@/components/AboutHero/AboutHero';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Reviews } from '@/components/Reviews/Reviews';
import { Team } from '@/components/Team/Team';

export default function About() {
  return (
    <>
      <Header />
      <AboutHero />
      <Team />
      <Reviews />
      <Footer />
    </>
  );
}
