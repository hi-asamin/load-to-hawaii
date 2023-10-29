import { GetStaticProps } from 'next';
import { fetchRooms } from '@/adapter/fetchRooms';
import BaseLayout from '@/layout/BaseLayout';
import { SearchBar } from '@/components/SearchBar';
import CardList from '@/components/CardList';
import MainVisual from '@/components/MainVisual';
interface TopPageProps {
  rooms: IRoom[];
}

const Top: React.FC<TopPageProps> = ({ rooms }) => {
  return (
    <BaseLayout>
      {/* メインビジュアル */}
      <MainVisual src="/images/main-visual.jpeg" alt="" />
      <SearchBar />

      {/* Swiperによる横並びカードのリスト */}
      <main>
        <CardList rooms={rooms} />
      </main>
    </BaseLayout>
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
