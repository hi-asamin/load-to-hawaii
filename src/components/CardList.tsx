// components/CardList.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import CardItem from './CardItem';

type Room = {
  thumbnail: string;
  title: string;
  description: string;
  price: string;
};

const CardList: React.FC = () => {
  const rooms: Room[] = [
    {
      thumbnail: '/images/room-image.jpg',
      title: 'Room 1',
      description: 'Room 1 description',
      price: '¥10,000',
    },
    {
      thumbnail: '/images/room-image.jpg',
      title: 'Room 2',
      description: 'Room 2 description',
      price: '¥20,000',
    },
    {
      thumbnail: '/images/room-image.jpg',
      title: 'Room 3',
      description: 'Room 3 description',
      price: '¥30,000',
    },
    {
      thumbnail: '/images/room-image.jpg',
      title: 'Room 4',
      description: 'Room 4 description',
      price: '¥40,000',
    },
    {
      thumbnail: '/images/room-image.jpg',
      title: 'Room 5',
      description: 'Room 5 description',
      price: '¥50,000',
    },
    {
      thumbnail: '/images/room-image.jpg',
      title: 'Room 6',
      description: 'Room 6 description',
      price: '¥60,000',
    },
  ];
  return (
    <div className="relative">
      <Swiper
        spaceBetween={16}
        slidesPerView="auto"
        centeredSlides={false}
        pagination={{ clickable: true }}
        className="mx-[-15%]"
      >
        {rooms.map((room, index) => (
          <SwiperSlide key={index}>
            <CardItem
              thumbnail={room.thumbnail}
              title={room.title}
              description={room.description}
              price={room.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardList;
