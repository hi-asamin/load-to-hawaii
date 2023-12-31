import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import SwiperRoomCardItem from '@/components/SwiperRoomCardItem';

import 'swiper/css';
import 'swiper/css/free-mode';
import styles from '@/components/SwiperRoomCardList/index.module.scss';

interface RoomCardListProps {
  rooms: IRoom[];
}

const SwiperRoomCardList: React.FC<RoomCardListProps> = ({ rooms }) => {
  return (
    <Swiper
      className={styles.swiperContainer}
      spaceBetween={16}
      slidesPerView={2.15} // 画面に表示されるスライドの数（初期表示時に次のカードの一部が見えるようにする）
      onSlideChange={() => console.log('slide change')}
      freeMode={true} // スライドをスナップさせない
      modules={[FreeMode]}
      breakpoints={{
        768: {
          slidesPerView: 3.5, // 768px以上の画面サイズでのスライド数
        },
        1024: {
          slidesPerView: 4.5, // 1024px以上の画面サイズでのスライド数
        },
      }}
    >
      {rooms.map((room, index) => (
        <SwiperSlide key={index}>
          <Link href={`/rooms/${room.id}`} key={room.id}>
            <SwiperRoomCardItem room={room} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperRoomCardList;
