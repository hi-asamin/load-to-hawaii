import Image from 'next/image';
import styles from '@/components/MainVisual/index.module.scss';

interface MainVisualProps {
  src: string;
  alt: string;
}

const MainVisual: React.FC<MainVisualProps> = ({ src, alt }) => {
  return (
    <div id={styles.mainVisual}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default MainVisual;
