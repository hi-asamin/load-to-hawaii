import Image from 'next/image';
import styles from '@/components/RoomCardItem/index.module.scss';

interface Props {
  room: IRoom;
}

/**
 * RoomCardItem component that displays a room's details in a card format.
 * @param {Props} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered room card item.
 */
const RoomCardItem: React.FC<Props> = ({ room }) => {
  const { name, description, area, thumbnail, price, capacity, rank, discountInfo } = room;
  return (
    <div className={styles.container}>
      <Image className={styles.thumbnail} src={thumbnail} alt="" width={150} height={250} />
      <div className={styles.details}>
        <div className={styles.area}>{area}</div>
        <div className={styles.feature}>{area}</div>
        <div className={styles.price}>
          <span>{price}</span>円 / 泊
        </div>
      </div>
    </div>
  );
};

export default RoomCardItem;
