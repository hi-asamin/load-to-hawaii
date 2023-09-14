import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { GOOGLE_DRIVE_SETTINGS } from '@/config/google';
import { parseCSV } from '@/utils/csv-parser';

interface Props {
  room: IRoom;
}

const Room: React.FC<Props> = ({ room }) => {
  return (
    <div>
      {room.name} - {room.address}
    </div>
  );
};

export default Room;

// getStaticPathsの実装
export const getStaticPaths: GetStaticPaths = async () => {
  // const url = `${GOOGLE_DRIVE_SETTINGS.url}/${GOOGLE_DRIVE_SETTINGS.fileId}?alt=media`;
  // const { data } = await axios.get(url, {
  //   headers: {
  //     Authorization: `Bearer ${GOOGLE_DRIVE_SETTINGS.accessToken}`,
  //   },
  // });
  // TODO: 仮データ
  const data = `"id","name","address"\n"1","Room 1","Address 1"\n"2","Room 2","Address 2"`;
  // CSVデータを解析してpropsとして返す
  const parsedData: IRoom[] = parseCSV(data);
  const paths = parsedData.map((dataItem) => ({
    params: { id: dataItem.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

// getStaticPropsの実装
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  // const url = `${GOOGLE_DRIVE_SETTINGS.url}/${GOOGLE_DRIVE_SETTINGS.fileId}?alt=media`;
  // const { data } = await axios.get(url, {
  //   headers: {
  //     Authorization: `Bearer ${GOOGLE_DRIVE_SETTINGS.accessToken}`,
  //   },
  // });
  // TODO: 仮データ
  const data = `"id","name","address"\n"1","Room 1","Address 1"\n"2","Room 2","Address 2"`;

  const parsedData: IRoom[] = parseCSV(data);
  const room = parsedData.find(
    (item) => item.id.toString() === context.params?.id
  );

  return {
    props: {
      room,
    },
  };
};
