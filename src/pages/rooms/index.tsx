import { GetStaticProps } from 'next';
import Link from 'next/link';
import axios, { isAxiosError } from 'axios';
import { GOOGLE_DRIVE_SETTINGS } from '@/config/google';
import { parseCSV } from '@/utils/csv-parser';

// INFO: https://blog.makotoishida.com/2020/06/reactgoogle-drive-apigoogle-drive.html

interface Props {
  rooms: IRoom[];
}

const Rooms: React.FC<Props> = ({ rooms }) => {
  return (
    <div>
      {rooms.map((room, index) => (
        <div key={index}>
          <Link href={`/rooms/${room.id}`} passHref>
            <h2>
              {room.name} - {room.address}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Rooms;

export const getStaticProps: GetStaticProps = async () => {
  let parsedData: IRoom[] = [];
  try {
    // const url = `${GOOGLE_DRIVE_SETTINGS.url}/${GOOGLE_DRIVE_SETTINGS.fileId}?alt=media`;
    // const { data } = await axios.get(url, {
    //   headers: {
    //     Authorization: `Bearer ${GOOGLE_DRIVE_SETTINGS.accessToken}`,
    //   },
    // });
    // TODO: 仮データ
    const data = `"id","name","address"\n"1","Room 1","Address 1"\n"2","Room 2","Address 2"`; // CSVデータを解析してpropsとして返す
    parsedData = parseCSV(data); // parseCSVはCSVを解析する関数
  } catch (error) {
    if (isAxiosError(error)) {
      // Axiosのエラー情報を利用してエラーハンドリング
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      // その他のエラー
      console.error('An unexpected error occurred:', error);
    }
  }

  return {
    props: {
      rooms: parsedData,
    },
  };
};
