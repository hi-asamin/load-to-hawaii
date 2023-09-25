import { GetStaticProps } from 'next';
import { fetchRooms } from '@/adapter/fetchRooms';
import CardList from '@/components/CardList';

interface RoomsPageProps {
  rooms: IRoom[];
}

const Rooms: React.FC<RoomsPageProps> = ({ rooms }) => {
  return (
    <>
      <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
        <h1 className="text-4xl">物件検索</h1>
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
