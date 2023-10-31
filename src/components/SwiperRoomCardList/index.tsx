import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import CardItem from '@/components/CardItem';

import 'swiper/css';
import 'swiper/css/free-mode';
import styles from '@/components/SwiperRoomCardList/index.module.scss';

interface RoomCardListProps {
  rooms: IRoom[];
}

const SwiperRoomCardList: React.FC<RoomCardListProps> = ({ rooms }) => {
  return (
    // TODO: 画面サイズによって表示数を変える
    <Swiper
      className={styles.swiperContainer}
      spaceBetween={16}
      slidesPerView={2.3} // 画面に表示されるスライドの数（初期表示時に次のカードの一部が見えるようにする）
      onSlideChange={() => console.log('slide change')}
      freeMode={true} // スライドをスナップさせない
      modules={[FreeMode]}
    >
      {rooms.map((room, index) => (
        <SwiperSlide key={index}>
          <Link href={`/rooms/${room.id}`} key={room.id}>
            <CardItem room={room} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperRoomCardList;
