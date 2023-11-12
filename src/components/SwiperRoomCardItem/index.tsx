import Image from 'next/image';
import RankingRibbon from '@/components/RankingRibbon';
import PricePerDay from '../atoms/PricePerDay';
import styles from '@/components/SwiperRoomCardItem/index.module.scss';

interface Props {
  room: IRoom;
}

const SwiperRoomCardItem: React.FC<Props> = ({ room }) => {
  const { name, description, area, thumbnail, price, capacity, rank, discountInfo } = room;
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };
  return (
    <div className={styles.container}>
      {rank && <RankingRibbon rank={Number(rank)} />}
      <Image className={styles.thumbnail} src={thumbnail} alt="" width={150} height={150} />
      <div className={styles.details}>
        <h5 className={styles.cardTitle}>{truncateText(name, 15)}</h5>
        <PricePerDay price={price} />
      </div>
    </div>
  );
};

export default SwiperRoomCardItem;
