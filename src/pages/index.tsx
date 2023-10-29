import { GetStaticProps } from 'next';
import Image from 'next/image';
import { fetchRooms } from '@/adapter/fetchRooms';
import { SearchBar } from '@/components/SearchBar';
import CardList from '@/components/CardList';

interface TopPageProps {
  rooms: IRoom[];
}

const Top: React.FC<TopPageProps> = ({ rooms }) => {
  return (
    <>
      {/* メインビジュアル */}
      <div className="">
        <span className="">メインビジュアル</span>
      </div>
      <SearchBar />

      {/* Swiperによる横並びカードのリスト */}
      <main>
        <CardList rooms={rooms} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<TopPageProps> = async () => {
  const rooms = await fetchRooms();
  return {
    props: {
      rooms,
    },
  };
};

export default Top;
