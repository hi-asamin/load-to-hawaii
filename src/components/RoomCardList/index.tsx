import Link from 'next/link';
import RoomCardItem from '@/components/RoomCardItem';

import styles from '@/components/RoomCardList/index.module.scss';

interface CardListProps {
  rooms: IRoom[];
}

const RoomCardList: React.FC<CardListProps> = ({ rooms }) => {
  return (
    <div className={styles.container}>
      {rooms.map((room) => (
        <Link href={`/rooms/${room.id}`} key={room.id}>
          <RoomCardItem key={room.id} room={room} />
        </Link>
      ))}
    </div>
  );
};

export default RoomCardList;
