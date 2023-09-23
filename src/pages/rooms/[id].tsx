import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { rooms } from '@/data/rooms';

interface Props {
  room: IRoom;
}

const Room: React.FC<Props> = ({ room }) => {
  return <div>{room.name}</div>;
};

export default Room;

// getStaticPathsの実装
export const getStaticPaths: GetStaticPaths = async () => {
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
  const room = rooms.find((room: IRoom) => room.id.toString() === context.params?.id);

  return {
    props: {
      room,
    },
  };
};
