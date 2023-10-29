import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import CardItem from '@/components/CardItem';

import 'swiper/css';
import styles from '@/components/RoomCardList/index.module.scss';

interface RoomCardListProps {
  rooms: IRoom[];
}

const RoomCardList: React.FC<RoomCardListProps> = ({ rooms }) => {
  return (
    <Swiper
      className={styles.swiperContainer}
      spaceBetween={16}
      slidesPerView={2.3} // 画面に表示されるスライドの数（初期表示時に次のカードの一部が見えるようにする）
      onSlideChange={() => console.log('slide change')}
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

export default RoomCardList;
