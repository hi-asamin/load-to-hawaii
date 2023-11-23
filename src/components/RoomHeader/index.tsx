import Link from 'next/link';

import styles from '@/components/RoomHeader/index.module.scss';
import PricePerDay from '@/components/atoms/PricePerDay';

interface Props {
  price: string;
}

const RoomHeader = ({ price }: Props): JSX.Element => {
  return (
    <header id={styles.roomHeader}>
      <div className={styles.container}>
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
        <div className={styles.reserve}>
          <PricePerDay price={price} />
          <Link href="/contact">
            <button className={styles.button}>問い合わせする</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default RoomHeader;
