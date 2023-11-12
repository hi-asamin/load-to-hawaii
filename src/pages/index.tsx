import { GetStaticProps } from 'next';
import { fetchRooms } from '@/adapter/fetchRooms';
import BaseLayout from '@/layout/BaseLayout';
import TopTemplate from '@/components/templates/Top';
interface TopPageProps {
  rooms: IRoom[];
}

const Top: React.FC<TopPageProps> = ({ rooms }) => {
  return (
    <BaseLayout>
      <TopTemplate popular={rooms} pair={rooms} family={rooms} friend={rooms} />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps<TopPageProps> = async () => {
  const rooms = await fetchRooms('popular');
  return {
    props: {
      rooms,
    },
  };
};

export default Top;
