import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { RoomMainVisual } from '@/components/RoomMainVisual';
import { fetchRooms } from '@/adapter/fetchRooms';

interface Props {
  room: IRoom;
}

const Room: React.FC<Props> = ({ room }) => {
  return (
    <>
      <RoomMainVisual images={room.images} />
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold">{room.name}</h1>
        <p className="text-gray-500">{room.description}</p>
      </div>
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

  return {
    props: {
      room,
    },
  };
};
