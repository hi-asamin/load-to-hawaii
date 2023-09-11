import Head from 'next/head';
import { ReactNode } from 'react';
import { SITE_NAME, SITE_DESCRIPTION } from '@/config/base';

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<Props> = ({
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
      </Head>
      <div className="min-h-screen flex flex-col">
        {/* ヘッダー */}
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl">{SITE_NAME}</h1>
        </header>

        {/* コンテンツ */}
        <main className="flex-grow p-4">{children}</main>

        {/* フッター */}
        <footer className="bg-gray-800 text-white p-4">
          <p>&copy; 2023 {SITE_NAME}</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
