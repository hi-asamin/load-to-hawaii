import { GetStaticProps } from 'next';
import Link from 'next/link';
import { rooms } from '@/data/rooms';

interface Props {
  rooms: IRoom[];
}

const Rooms: React.FC<Props> = ({ rooms }) => {
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      rooms,
    },
  };
};
