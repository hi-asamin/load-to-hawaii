import Image from 'next/image';
import Layout from '@/components/Layout';
import CardList from '@/components/CardList';

export default function Home() {
  return (
    <Layout>
      {/* ヒーローイメージ */}
      <section className="hero">
        <Image
          src="/images/hero-image.jpg"
          alt="Hero Image"
          width={1200}
          height={800}
          layout="responsive"
        />
      </section>

      {/* Swiperによる横並びカードのリスト */}
      <CardList />
    </Layout>
  );
}
