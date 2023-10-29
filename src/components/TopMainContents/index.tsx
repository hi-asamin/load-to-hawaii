import { useRouter } from 'next/router';
import { AiOutlineRight } from 'react-icons/ai';
import RoomCardList from '@/components/RoomCardList';

import styles from '@/components/TopMainContents/index.module.scss';

interface TopMainContentsProps {
  rooms: IRoom[];
}

const TopMainContents: React.FC<TopMainContentsProps> = ({ rooms }) => {
  const router = useRouter();
  const handleClick = (section: string) => {
    console.log(section + 'がクリックされました');
    router.push('/rooms');
  };
  return (
    <>
      <section id="popular" className={styles.sectionItem}>
        <h2 className={styles.sectionTitle} onClick={() => handleClick('popular')}>
          人気の宿泊先
          <span>
            <AiOutlineRight size={18} />
          </span>
        </h2>
        <RoomCardList rooms={rooms} />
      </section>
      <section id="popular" className={styles.sectionItem}>
        <h2 className={styles.sectionTitle} onClick={() => handleClick('popular')}>
          2人滞在におすすめの宿泊先
          <span>
            <AiOutlineRight size={18} />
          </span>
        </h2>
        <RoomCardList rooms={rooms} />
      </section>
      <section id="popular" className={styles.sectionItem}>
        <h2 className={styles.sectionTitle} onClick={() => handleClick('popular')}>
          子連れにおすすめの宿泊先
          <span>
            <AiOutlineRight size={18} />
          </span>
        </h2>
        <RoomCardList rooms={rooms} />
      </section>
      <section id="popular" className={styles.sectionItem}>
        <h2 className={styles.sectionTitle} onClick={() => handleClick('popular')}>
          大人数におすすめの宿泊先
          <span>
            <AiOutlineRight size={18} />
          </span>
        </h2>
        <RoomCardList rooms={rooms} />
      </section>
    </>
  );
};

export default TopMainContents;
