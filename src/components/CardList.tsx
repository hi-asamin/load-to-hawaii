import CardItem from '@/components/CardItem';

interface CardListProps {
  rooms: IRoom[];
}

const CardList: React.FC<CardListProps> = ({ rooms }) => {
  return (
    <div className="_list_1f9mj_2">
      {rooms.map((room) => (
        <CardItem key={room.id} room={room} />
      ))}
    </div>
  );
};

export default CardList;
