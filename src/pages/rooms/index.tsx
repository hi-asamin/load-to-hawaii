import { GetStaticProps } from 'next';
import { fetchRooms } from '@/adapter/fetchRooms';
import BaseLayout from '@/layout/BaseLayout';
import CardList from '@/components/CardList';

interface RoomsPageProps {
  rooms: IRoom[];
}

const Rooms: React.FC<RoomsPageProps> = ({ rooms }) => {
  return (
    <BaseLayout>
      <main>
        <CardList rooms={rooms} />
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
