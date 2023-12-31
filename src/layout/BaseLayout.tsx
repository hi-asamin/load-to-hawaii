import Head from 'next/head';
import { ReactNode } from 'react';
import Header from '@/components/organisms/Header';
import Footer from '@/components/Footer';
import { SITE_NAME, SITE_DESCRIPTION } from '@/config/constants';

interface BaseLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  title = SITE_NAME,
  description = SITE_DESCRIPTION,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
        {/* reset.css ress */}
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
      </Head>

      {/* ヘッダー */}
      <Header />

      {/* コンテンツ */}
      {children}

      {/* フッター */}
      <Footer />
    </>
  );
};

export default BaseLayout;
