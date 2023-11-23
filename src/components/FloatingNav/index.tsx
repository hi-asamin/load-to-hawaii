import Link from 'next/link';
import PricePerDay from '@/components/atoms/PricePerDay';
import styles from '@/components/FloatingNav/index.module.scss';
interface FloatingNavProps {
  price: string;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ price }) => {
  return (
    <div id={styles.floatingNav}>
      <div className={styles.container}>
        <PricePerDay price={price} />
        <Link href="/contact">
          <button className={styles.button}>問い合わせする</button>
        </Link>
      </div>
    </div>
  );
};

export default FloatingNav;
