import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAME } from '@/config/constants';
import styles from '@/components/Footer/index.module.scss';

/**
 * Footer component that displays site information and links.
 *
 * @returns {React.ReactElement} Rendered footer component
 */
const Footer: React.FC = () => {
  return (
    <footer id={styles.footer}>
      {/* <div className="">
        <section className="">
          <h3 className="">サポート</h3>
          <ul>
            <li className="">
              <Link href="/faq" className="">
                ヘルプセンター
              </Link>
            </li>
            <li className="">
              <Link href="/cancel" className="">
                キャンセルオプション
              </Link>
            </li>
            <li className="">
              <Link href="/neighbors" className="">
                近隣トラブルを報告する
              </Link>
            </li>
          </ul>
        </section>
        <section className="">
          <h3 className="">{SITE_NAME}</h3>
          <ul>
            <li className="">
              <Link href="/news" className="">
                ニュースルーム
              </Link>
            </li>
            <li className="">
              <Link href="/release" className="">
                新機能のご紹介
              </Link>
            </li>
            <li className="">
              <Link href="/about" className="">
                {SITE_NAME}について
              </Link>
            </li>
            <li className="">
              <Link href="/blog" className="" target="_blank" rel="noopener noreferrer">
                ブログ
              </Link>
            </li>
          </ul>
        </section>
        <section className="">
          <ul>
            <li className="">
              <Link href="/privacy" className="">
                プライバシー
              </Link>
            </li>
            <li className="">
              <Link href="/tos" className="">
                利用規約
              </Link>
            </li>
            <li className="">
              <Link href="/sitemap" className="">
                サイトマップ
              </Link>
            </li>
          </ul>
        </section>
      </div> */}
      {/* Logo */}
      <Link id={styles.logo} href="/">
        <Image src="/logo.png" alt="logo" width={200} height={50} />
      </Link>
      <p id={styles.copyright}>© 2023 {SITE_NAME}_ハワイ宿泊</p>
    </footer>
  );
};

export default Footer;
