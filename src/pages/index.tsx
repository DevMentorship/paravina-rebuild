import Head from 'next/head';

import { Accordion, IAccordion } from '@/components/Accordion/Accordion';
import { Gallery, IGalleryImages } from '@/components/Gallery/Gallery';
import { IStandardImage, Standards } from '@/components/Standards/Standards';
import { ITabImages, Tabs } from '@/components/Tabs/Tabs';
import { client } from '@/lib/client';

interface IProps {
  faq: IAccordion[];
  standards: IStandardImage[];
  gallery: IGalleryImages[];
  stomatology: ITabImages[];
  cosmetology: ITabImages[];
}

export default function Home({ faq, standards, gallery, stomatology, cosmetology }: IProps) {
  return (
    <>
      <Head>
        <title>Паравина</title>
      </Head>

      <Tabs tabImages={{ cosmetology, stomatology }} />
      <Standards standardImages={standards} />
      <Gallery galleryImages={gallery} />
      <Accordion items={faq} title="Часто задаваемые вопросы" />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "faq": *[_type == "faq"], "promotionCard": *[_type == "promotionCard"], "gallery": *[_type == "gallery"],
    "standards": *[_type == "standards"], "stomatology": *[_type == "stomatology"],
    "cosmetology": *[_type == "cosmetology"],
  }`;
  const result = await client.fetch(query);

  const faq = result.faq[0].faqItems;
  const standards = result.standards[0].standardImages;
  const gallery = result.gallery[0].galleryImages;
  const stomatology = result.stomatology[0].stomatologyImages;
  const cosmetology = result.cosmetology[0].cosmetologyImages;

  return { props: { faq, standards, gallery, stomatology, cosmetology } };
};
