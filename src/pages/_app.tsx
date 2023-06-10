import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { YandexMetricaProvider } from 'next-yandex-metrica';

import { Page } from '@/components/Page';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = (
    `https://${process.env.NEXT_PUBLIC_CANONICAL_DOMAIN || 'paravina.site'}` +
    (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];
  const YandexMetricaID: number = (process.env.NEXT_PUBLIC_YM_ID && +process.env.NEXT_PUBLIC_YM_ID) || 0;

  return (
    <>
      <Head>
        <meta content="website" property="og:type" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="/image.jpg" property="og:image" />
        <meta content="Стоматология Паравина" property="og:image:alt" />
        <meta
          property="og:title"
          content="Авторская клиника эстетической стоматологии и косметологии Екатерины Паравиной в городе Самара."
        />
        <meta
          property="og:description"
          content="Авторская клиника эстетической стоматологии и косметологии Екатерины Паравиной в городе Самара."
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta content="Доктор Паравина" property="og:site_name"></meta>
        <meta
          content="Авторская клиника эстетической стоматологии и косметологии Екатерины Паравиной в городе Самара."
          name="description"
        />
        <meta content="#110c11" name="msapplication-TileColor" />
        <meta content="#110c11" name="theme-color" />
        <title>Паравина</title>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Page>
        <YandexMetricaProvider
          tagID={YandexMetricaID}
          initParameters={{ clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true }}
        >
          <Component {...pageProps} />
        </YandexMetricaProvider>
      </Page>
    </>
  );
}
