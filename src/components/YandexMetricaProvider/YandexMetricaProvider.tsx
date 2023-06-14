import Image from 'next/image';
import Script, { ScriptProps } from 'next/script';
import React, { createContext, FC, ReactNode, useMemo } from 'react';

import { useTrackRouteChange } from '@/hooks/useTrackRouteChange';
import { InitParameters } from '@/lib/types/ymParameters';

export const MetricaTagIDContext = createContext<number | null>(null);

interface Props {
  children: ReactNode;
  tagID?: number;
  strategy?: ScriptProps['strategy'];
  initParameters?: InitParameters;
}

export const YandexMetricaProvider: FC<Props> = ({
  children,
  tagID,
  strategy = 'afterInteractive',
  initParameters,
}) => {
  const YANDEX_METRICA_ID = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;
  const id = useMemo(() => tagID || (YANDEX_METRICA_ID ? Number(YANDEX_METRICA_ID) : null), [YANDEX_METRICA_ID, tagID]);

  useTrackRouteChange({ tagID: id });

  if (!id) {
    console.warn('[next-yandex-metrica] Yandex.Metrica tag ID is not defined');

    return <>{children}</>;
  }

  return (
    <>
      <Script id="yandex-metrica" strategy={strategy}>
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          ym(${id}, "init", ${JSON.stringify(initParameters || {})});
        `}
      </Script>
      <noscript id="yandex-metrica-pixel">
        <Image height="1" width="1" style={{ display: 'none' }} src={`https://mc.yandex.ru/watch/${id}`} alt="" />
      </noscript>
      <MetricaTagIDContext.Provider value={id}>{children}</MetricaTagIDContext.Provider>
    </>
  );
};

//Integrated from https://github.com/reapziq/next-yandex-metrica
