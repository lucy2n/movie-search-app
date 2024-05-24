// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import { MantineProvider, MantineColorsTuple, MantineThemeOverride } from '@mantine/core';
import Head from "next/head";
import { Layout } from '@/components/layout/layout';
import { useRouter } from 'next/router';

const myColor: MantineColorsTuple = [
    '#F2ECFA',
    '#F2ECFA',
    '#E5D5FA',
    '#D1B4F8',
    '#BD93F7',
    '#9854F6',
    '#9854F6',
    '#541F9D',
    '#541F9D',
    '#541F9D',
    '#541F9D',
];

const theme: MantineThemeOverride = {
  colors: {
    myColor,
  },
  primaryColor: 'myColor',
};

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  const is404 = router.pathname == '/404';
  
  return (
    <MantineProvider theme={theme}>
       <Head>
        <title>Movie Search</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      { is404 ?
        <Layout page='404'>
           <Component {...pageProps} /> 
        </Layout>
        :
        <Layout page='page'>
          <Component {...pageProps} />
        </Layout>
      }
    </MantineProvider>
  );
}