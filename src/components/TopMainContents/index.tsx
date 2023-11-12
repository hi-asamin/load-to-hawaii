import { useRouter } from 'next/router';
import { AiOutlineRight } from 'react-icons/ai';
import SwiperRoomCardList from '@/components/SwiperRoomCardList';

import styles from '@/components/TopMainContents/index.module.scss';

interface TopMainContentsProps {
  rooms: IRoom[];
}

const TopMainContents: React.FC<TopMainContentsProps> = ({ rooms }) => {
  const router = useRouter();
  const handleClick = (section: string) => {
    // router.push('/rooms');
  };
  return (
    <>
      <section id="popular" className={styles.sectionItem}>
        <h2 className={styles.sectionTitle} onClick={() => handleClick('popular')}>
          人気の宿泊先
          <span>
            <AiOutlineRight size="1.2rem" />
          </span>
        </h2>
        <SwiperRoomCardList rooms={rooms} />
      </section>
      <section id="pair" className={styles.sectionItem}>
        <h2 className={styles.sectionTitle} onClick={() => handleClick('pair')}>
          2人滞在におすすめの宿泊先
          <span>
            <AiOutlineRight size="1.2rem" />
          </span>
        </h2>
        <SwiperRoomCardList rooms={rooms} />
      </section>
      <section id="family" className={styles.sectionItem}>
        <h2 className={styles.sectionTitle} onClick={() => handleClick('family')}>
          子連れにおすすめの宿泊先
          <span>
            <AiOutlineRight size="1.2rem" />
          </span>
        </h2>
        <SwiperRoomCardList rooms={rooms} />
      </section>
      <section id="friend" className={styles.sectionItem}>
        <h2 className={styles.sectionTitle} onClick={() => handleClick('friend')}>
          大人数におすすめの宿泊先
          <span>
            <AiOutlineRight size="1.2rem" />
          </span>
        </h2>
        <SwiperRoomCardList rooms={rooms} />
      </section>
    </>
  );
};

export default TopMainContents;
