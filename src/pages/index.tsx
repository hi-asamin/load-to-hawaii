import { GetStaticProps } from 'next';
import { fetchRooms } from '@/adapter/fetchRooms';
import BaseLayout from '@/layout/BaseLayout';
import MainVisual from '@/components/MainVisual';
import TopMainContents from '@/components/TopMainContents';
interface TopPageProps {
  rooms: IRoom[];
}

const Top: React.FC<TopPageProps> = ({ rooms }) => {
  return (
    <BaseLayout>
      {/* メインビジュアル */}
      <MainVisual src="/images/main-visual.jpeg" alt="" />
      {/* Swiperによる横並びカードのリスト */}
      <main>
        <TopMainContents rooms={rooms} />
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
