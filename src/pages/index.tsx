import Head from 'next/head';

import { Accordion } from '@/components/Accordion/Accordion';
import { IAccordionItem } from '@/components/AccordionItem/AccordionItem';
import { Banner } from '@/components/Banner/Banner';
import { Gallery, IGalleryImages } from '@/components/Gallery/Gallery';
import { Hero } from '@/components/Hero/Hero';
import { HeroQualities } from '@/components/HeroQualities/HeroQualities.component';
import { IStandardImage, Standards } from '@/components/Standards/Standards';
import { ITabImages, Tabs } from '@/components/Tabs/Tabs';
import { client } from '@/lib/client';

import { IService } from './services/[slug]';

interface IProps {
  faq: IAccordionItem[];
  standards: IStandardImage[];
  gallery: IGalleryImages[];
  stomatology: ITabImages[];
  cosmetology: ITabImages[];
  services: IService[];
}

const sortDocs = (a: { index: number }, b: { index: number }) => {
  if (a.index && b.index) return a.index - b.index;
};

export default function Home({ faq, standards, gallery, stomatology, cosmetology, services }: IProps) {
  return (
    <>
      <Head>
        <title>Паравина</title>
      </Head>

      <Hero />
      <Banner services={services} />
      <Tabs tabImages={{ cosmetology, stomatology }} />
      <Standards standardImages={standards} />
      <Gallery galleryImages={gallery} />
      <HeroQualities />
      <Accordion items={faq} title="Часто задаваемые вопросы" isVisible={true} />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "faq": *[_type == "faq"], "promotionCard": *[_type == "promotionCard"], "gallery": *[_type == "gallery"],
    "standards": *[_type == "standards"], "stomatology": *[_type == "stomatology"],
    "cosmetology": *[_type == "cosmetology"],
    "services": *[_type == "services"],
  }`;
  const result = await client.fetch(query);

  const faq = result.faq.sort(sortDocs);
  const standards = result.standards.sort(sortDocs);
  const gallery = result.gallery.sort(sortDocs);
  const stomatology = result.stomatology.sort(sortDocs);
  const cosmetology = result.cosmetology.sort(sortDocs);
  const services = result.services.sort(sortDocs);

  return { props: { faq, standards, gallery, stomatology, cosmetology, services } };
};
