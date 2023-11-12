import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { fetchRooms } from '@/adapter/fetchRooms';
import { RoomMainVisual } from '@/components/RoomMainVisual';
import RoomHeader from '@/components/RoomHeader';
import FloatingNav from '@/components/FloatingNav';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

interface Props {
  room: IRoom;
}

const Room: React.FC<Props> = ({ room }) => {
  return (
    <>
      <Head>
        {/* reset.css ress */}
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
      </Head>
      {/* PC only */}
      <RoomHeader />
      {/* PC only */}
      <main className="">
        {/* 写真 */}
        <section id="photos">
          <RoomMainVisual images={room.images} />
        </section>
        {/* 物件概要 */}
        <section id="detail">
          {/* 物件名称 */}
          <h1 className="">{room.name}</h1>
          {/* 詳細説明 */}
          <p className="">{room.description}</p>
        </section>
        {/* アメニティ */}
        <section id="amenities">
          <h2 className="">提供されるアメニティ・設備</h2>
          <section id="bathroom">
            <h3 className="">バスルーム</h3>
          </section>
          <section id="bedroom">
            <h3 className="">ベッドルーム</h3>
          </section>
          <section id="laundry">
            <h3 className="">洗濯</h3>
          </section>
          <section id="entertainment">
            <h3 className="">エンターテイメント</h3>
          </section>
          <section id="kitchen">
            <h3 className="">キッチン</h3>
          </section>
          <section id="internet">
            <h3 className="">インターネット</h3>
          </section>
          <section id="family">
            <h3 className="">ファミリー</h3>
          </section>
          <section id="safety">
            <h3 className="">安全</h3>
          </section>
          <section id="leisure">
            <h3 className="">レジャー</h3>
          </section>
          <section id="location">
            <h3 className="">立地</h3>
          </section>
          <section id="view">
            <h3 className="">眺望</h3>
          </section>
          <section id="parking">
            <h3 className="">駐車場</h3>
          </section>
          <section id="other">
            <h3 className="">その他</h3>
          </section>
        </section>
        {/* エリア */}
        <section id="area">
          <h2 className="">滞在エリア</h2>
        </section>
      </main>
      {/* <ScrollToTopButton /> */}
      <Footer />
      {/* Mobile only */}
      <FloatingNav price={room.price} />
      {/* Mobile only */}
    </>
  );
};

export default Room;

// getStaticPathsの実装
export const getStaticPaths: GetStaticPaths = async () => {
  const rooms = await fetchRooms();
  const paths = rooms.map((room: IRoom) => ({
    params: { id: room.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

// getStaticPropsの実装
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const rooms = await fetchRooms();
  const room = rooms.find((room: IRoom) => room.id.toString() === context.params?.id);

  return {
    props: {
      room,
    },
  };
};
