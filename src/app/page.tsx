import MainLayout from '../layouts/MainLayout';
import Head from "next/head";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Footer />
      </MainLayout>
    </main>
  );
}
