import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '@/components/RoomMainVisual/index.module.css';

// import required modules
import { Pagination } from 'swiper/modules';

import MainVisual from '@/components/MainVisual';

interface RoomMainVisualProps {
  images: Image[];
}

/**
 * メインビジュアルコンポーネント
 * @param {MainVisualProps} props - プロップス
 * @param {Image[]} props.images - 表示する画像の配列
 */
export const RoomMainVisual: React.FC<RoomMainVisualProps> = ({ images }) => {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
          renderFraction: (currentClass, totalClass) => {
            return (
              '<div class="' +
              styles.pagination +
              '">' +
              '<span class="' +
              currentClass +
              '">' +
              '</span>' +
              ' / ' +
              '<span class="' +
              totalClass +
              '"></span>' +
              '</div>'
            );
          },
        }}
        navigation={true}
        modules={[Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <MainVisual src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
