import Link from 'next/link';

import styles from '@/components/RoomHeader/index.module.scss';

const RoomHeader: React.FC = () => {
  return (
    <header id={styles.roomHeader}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href="#photos" className={styles.navItem}>
              写真
            </Link>
          </li>
          <li>
            <Link href="#amenities" className={styles.navItem}>
              アメニティ・設備
            </Link>
          </li>
          <li>
            <Link href="#area" className={styles.navItem}>
              エリア
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default RoomHeader;
