import type { AppProps } from 'next/app';
import Head from 'next/head'; // Import the Head component
import Layout from '@/app/layout';
import '../styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Super Fe</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
