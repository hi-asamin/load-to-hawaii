import Image from 'next/image';
import RankingRibbon from '@/components/RankingRibbon';
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
      <div className="">
        <h5 className={styles.cardTitle}>{truncateText(name, 15)}</h5>
        <div className={styles.price}>
          <span>{price}</span>円 / 泊
        </div>
      </div>
    </div>
  );
};

export default SwiperRoomCardItem;
