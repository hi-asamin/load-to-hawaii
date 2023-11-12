import { RoomMainVisual } from '@/components/RoomMainVisual';
import RoomHeader from '@/components/RoomHeader';
import FloatingNav from '@/components/FloatingNav';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

import styles from './index.module.scss';

interface Props {
  room: IRoom;
}

const RoomTemplate = ({ room }: Props): JSX.Element => {
  return (
    <>
      {/* PC only */}
      <RoomHeader />
      {/* PC only */}
      <main className={styles.main}>
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
        <Footer />
      </main>
      {/* <ScrollToTopButton /> */}
      {/* Mobile only */}
      <FloatingNav price={room.price} />
      {/* Mobile only */}
    </>
  );
};

export default RoomTemplate;
