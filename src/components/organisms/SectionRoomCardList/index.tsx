import { AiOutlineRight } from 'react-icons/ai';
import SwiperRoomCardList from '@/components/SwiperRoomCardList';

import styles from '@/components/organisms/SectionRoomCardList/index.module.scss';

interface Props {
  id: string;
  title: string;
  rooms: IRoom[];
}

const SectionRoomCardList: React.FC<Props> = ({ id, title, rooms }) => {
  return (
    <section id={id} className={styles.sectionItem}>
      <h2 className={styles.sectionTitle}>
        {title}
        <span>
          <AiOutlineRight size="1.2rem" />
        </span>
      </h2>
      <SwiperRoomCardList rooms={rooms} />
    </section>
  );
};

export default SectionRoomCardList;
