import { AppProps } from 'next/app';
import { Head } from '@/components/Layout';
import '@/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
};