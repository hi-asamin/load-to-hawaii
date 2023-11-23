import { useRef } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { useInView } from '@/hooks/useInView';
import { RoomMainVisual } from '@/components/RoomMainVisual';
import RoomHeader from '@/components/RoomHeader';
import SectionRoomCardList from '@/components/organisms/SectionRoomCardList';
import FloatingNav from '@/components/FloatingNav';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

import styles from './index.module.scss';

interface Props {
  room: IRoom;
  relatedRooms: IRoom[];
}

const RoomTemplate = ({ room, relatedRooms }: Props): JSX.Element => {
  const mainVisualRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(mainVisualRef);
  return (
    <>
      {/* PC only & メインビジュアル以下にスクロールされた場合 */}
      {!isInView && <RoomHeader price={room.price} />}
      {/* PC only & メインビジュアル以下にスクロールされた場合 */}
      <main>
        {/* 写真 */}
        <section id="photos" ref={mainVisualRef}>
          <RoomMainVisual images={room.images} />
        </section>
        <div className={styles.container}>
          {/* 物件名称 */}
          <section id="name" className={styles.sectionSeparator}>
            <h1 className="">{room.name}</h1>
          </section>
          {/* 寝室・ベッド */}
          <section id="cancelPolicy" className={styles.sectionSeparator}>
            <h2 className="">寝室・ベッド</h2>
          </section>
          {/* 詳細説明 */}
          <section id="detail" className={styles.sectionSeparator}>
            <p className="">{room.description}</p>
            <button className={styles.more}>
              <span className={styles.text}>もっと見る</span>
              <span className={styles.icon}>
                <AiOutlineRight />
              </span>
            </button>
          </section>
          {/* アメニティ */}
          <section id="amenities" className={styles.sectionSeparator}>
            <h2 className="">提供されるアメニティ・設備</h2>
            <button className={styles.allOpen}>
              <span className={styles.text}>アメニティ・設備を全て表示</span>
            </button>
            {/* <section id="bathroom">
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
            </section> */}
          </section>
          {/* エリア */}
          <section id="area" className={styles.sectionSeparator}>
            <h2 className="">滞在エリア</h2>
          </section>
          {/* キャンセルポリシー */}
          <section id="cancelPolicy" className={styles.sectionSeparator}>
            <h2 className="">キャンセルポリシー</h2>
          </section>
          {/* ハウスルール */}
          <section id="rules" className={styles.lastSectionSeparator}>
            <h2 className="">ハウスルール</h2>
          </section>
        </div>
      </main>
      {/* 関連する宿泊先 */}
      <SectionRoomCardList id="related" title="関連する宿泊先" rooms={relatedRooms} />
      <div className={styles.footerWrap}>
        <Footer />
      </div>
      {/* <ScrollToTopButton /> */}
      {/* Mobile only */}
      <FloatingNav price={room.price} />
      {/* Mobile only */}
    </>
  );
};

export default RoomTemplate;
