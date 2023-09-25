// components/MainVisual.tsx
import { useState } from 'react';
import Image from 'next/image';

interface RoomMainVisualProps {
  images: string[];
}

/**
 * メインビジュアルコンポーネント
 * @param {MainVisualProps} props - プロップス
 * @param {string[]} props.images - 表示する画像のURLの配列
 */
export const RoomMainVisual: React.FC<RoomMainVisualProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[50vh] md:h-[66.6667vh]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          fill
          objectFit="cover"
          className={`transition-opacity duration-300 ${
            currentIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <button
        className="absolute bottom-4 right-4 p-2 bg-white bg-opacity-50 rounded-full"
        onClick={nextImage}
      >
        次へ
      </button>
    </div>
  );
};
