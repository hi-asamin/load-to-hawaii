import CardItem from '@/components/CardItem';
import { rooms } from '@/data/rooms';

const CardList: React.FC = () => {
  return (
    <div className="_list_1f9mj_2">
      {rooms.map((room) => (
        <CardItem key={room.id} room={room} />
      ))}
    </div>
  );
};

export default CardList;
