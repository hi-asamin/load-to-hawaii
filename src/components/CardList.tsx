import Link from 'next/link';
import CardItem from '@/components/CardItem';

interface CardListProps {
  rooms: IRoom[];
}

const CardList: React.FC<CardListProps> = ({ rooms }) => {
  return (
    <div className="">
      {rooms.map((room) => (
        <Link href={`/rooms/${room.id}`} key={room.id}>
          <CardItem key={room.id} room={room} />
        </Link>
      ))}
    </div>
  );
};

export default CardList;
