import { GetStaticProps } from 'next';
import { fetchRooms } from '@/adapter/fetchRooms';
import BaseLayout from '@/layout/BaseLayout';
import RoomCardList from '@/components/RoomCardList';

interface RoomsPageProps {
  rooms: IRoom[];
}

const Rooms: React.FC<RoomsPageProps> = ({ rooms }) => {
  return (
    <BaseLayout>
      <main>
        <RoomCardList rooms={rooms} />
      </main>
    </BaseLayout>
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
