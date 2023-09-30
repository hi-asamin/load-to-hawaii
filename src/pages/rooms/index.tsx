import { GetStaticProps } from 'next';
import { fetchRooms } from '@/adapter/fetchRooms';
import CardList from '@/components/CardList';

interface RoomsPageProps {
  rooms: IRoom[];
}

const Rooms: React.FC<RoomsPageProps> = ({ rooms }) => {
  return (
    <>
      <main>
        <CardList rooms={rooms} />
      </main>
    </>
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
