// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import { MantineProvider, MantineColorsTuple, MantineThemeOverride } from '@mantine/core';
import Head from "next/head";
import SideBar from '@/components/side-bar/side-bar';
import Layout from '@/components/layout/layout';

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
  return (
    <MantineProvider theme={theme}>
       <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}