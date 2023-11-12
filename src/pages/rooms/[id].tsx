import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { fetchRooms } from '@/adapter/fetchRooms';
import RoomTemplate from '@/components/templates/Rooms/Id';

interface Props {
  room: IRoom;
  relatedRooms: IRoom[];
}

const Room: React.FC<Props> = ({ room, relatedRooms }) => {
  return (
    <>
      <Head>
        {/* reset.css ress */}
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
      </Head>
      <RoomTemplate room={room} relatedRooms={relatedRooms} />
    </>
  );
};

export default Room;

// getStaticPathsの実装
export const getStaticPaths: GetStaticPaths = async () => {
  const rooms = await fetchRooms();
  const paths = rooms.map((room: IRoom) => ({
    params: { id: room.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

// getStaticPropsの実装
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const rooms = await fetchRooms();
  const room = rooms.find((room: IRoom) => room.id.toString() === context.params?.id);
  const relatedRooms = rooms;

  return {
    props: {
      room,
      relatedRooms,
    },
  };
};
