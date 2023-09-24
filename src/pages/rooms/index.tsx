import { GetStaticProps } from 'next';
import Link from 'next/link';
import { fetchRooms } from '@/adapter/fetchRooms';

interface RoomsPageProps {
  rooms: IRoom[];
}

const Rooms: React.FC<RoomsPageProps> = ({ rooms }) => {
  return (
    <div>
      {rooms.map((room, index) => (
        <div key={index}>
          <Link href={`/rooms/${room.id}`} passHref>
            <h2>{room.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Rooms;

export const getStaticProps: GetStaticProps<RoomsPageProps> = async () => {
  const rooms = await fetchRooms();
  return {
    props: {
      rooms,
    },
  };
};
