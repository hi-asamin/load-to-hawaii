import Link from 'next/link';
import { SITE_NAME } from '@/config/constants';

/**
 * Footer component that displays site information and links.
 *
 * @returns {React.ReactElement} Rendered footer component
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 py-12">
      <div className="container mx-auto px-4 md:grid md:grid-cols-3 gap-8">
        <section className="border-b md:border-b-0 py-4 md:py-0">
          <h3 className="font-bold mb-4">サポート</h3>
          <ul>
            <li className="mb-2">
              <Link href="/faq" className="hover:underline">
                ヘルプセンター
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/cancel" className="hover:underline">
                キャンセルオプション
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/neighbors" className="hover:underline">
                近隣トラブルを報告する
              </Link>
            </li>
          </ul>
        </section>
        <section className="border-b md:border-b-0 py-4 md:py-0">
          <h3 className="font-bold mb-4">{SITE_NAME}</h3>
          <ul>
            <li className="mb-2">
              <Link href="/news" className="hover:underline">
                ニュースルーム
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/release" className="hover:underline">
                新機能のご紹介
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/about" className="hover:underline">
                {SITE_NAME}について
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/blog"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ブログ
              </Link>
            </li>
          </ul>
        </section>
        <section className="pt-4">
          <ul>
            <li className="mb-2">
              <Link href="/privacy" className="hover:underline">
                プライバシー
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/tos" className="hover:underline">
                利用規約
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/sitemap" className="hover:underline">
                サイトマップ
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <p className="mt-4 text-center">© 2023 {SITE_NAME}</p>
    </footer>
  );
};

export default Footer;
