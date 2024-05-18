// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import { MantineProvider, MantineColorsTuple, MantineThemeOverride } from '@mantine/core';
import Head from "next/head";
import SideBar from '@/components/side-bar/side-bar';
import Layout from '@/components/layout/layout';

const myColor: MantineColorsTuple = [
  '#f6eeff',
  '#e7daf7',
  '#cab1ea',
  '#ad86dd',
  '#9562d2',
  '#854bcb',
  '#7d3ec9',
  '#6b31b2',
  '#5f2aa0',
  '#52228d'
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