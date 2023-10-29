import Link from 'next/link';
import styles from '@/components/FloatingNav/index.module.scss';
interface FloatingNavProps {
  price: string;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ price }) => {
  return (
    <div id={styles.floatingNav}>
      <div className={styles.container}>
        <div className={styles.price}>{price}</div>
        <Link href="/contact">
          <button className={styles.button}>予約する</button>
        </Link>
      </div>
    </div>
  );
};

export default FloatingNav;
