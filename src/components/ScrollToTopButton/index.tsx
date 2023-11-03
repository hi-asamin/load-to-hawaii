// components/ScrollToTopButton.tsx
import { useEffect, useState } from 'react';
import { AiOutlineUp } from 'react-icons/ai';
import styles from '@/components/ScrollToTopButton/index.module.scss';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={styles.scrollToTopButton}
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <AiOutlineUp size="1.5rem" />
    </div>
  );
};

export default ScrollToTopButton;
