import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { BLOG_URL, TIKTOK_URL, INSTAGRAM_URL } from '@/config/constants';

import styles from '@/components/Header/index.module.scss';

const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Reset isMenuOpen state when window is resized
    const handleResize = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Reset isMenuOpen state when page changes
    setIsMenuOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Hide main tag when menu is open
      const mainTag = document.querySelector('main');
      if (mainTag) {
        mainTag.style.display = 'none';
      }
    } else {
      document.body.style.overflow = 'unset';
      // Show main tag when menu is closed
      const mainTag = document.querySelector('main');
      if (mainTag) {
        mainTag.style.display = 'block';
      }
    }
    // Reset scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
      const mainTag = document.querySelector('main');
      if (mainTag) {
        mainTag.style.display = 'block';
      }
    };
  }, [isMenuOpen]);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  /**
   * Navigation menu component
   *
   * @returns {React.ReactElement} Rendered navigation menu
   */
  const NavigationMenu = () => {
    return (
      <ul className={styles.menu}>
        <li>
          <Link href="/about" className={styles.navItem}>
            はじめての方
          </Link>
        </li>
        <li>
          <Link
            href={BLOG_URL}
            className={styles.navItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            ブログ
          </Link>
        </li>
        <li>
          <Link href="/rooms" className={styles.navItem}>
            物件一覧
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.navItem}>
            空室確認
          </Link>
        </li>
      </ul>
    );
  };

  /**
   * SNS menu component
   *
   * @returns {React.ReactElement} Rendered SNS menu
   */
  const SNSMenu = () => {
    return (
      <ul className={styles.snsMenu}>
        <Link
          className={styles.navItem}
          href={TIKTOK_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok />
        </Link>
        <Link
          className={styles.navItem}
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram />
        </Link>
      </ul>
    );
  };

  const MobileHeaderTop = () => {
    return (
      <div className={styles.mobileHeaderTop}>
        {/* Logo */}
        <Link className={styles.logo} href="/">
          <Image src="/logo.png" alt="logo" width={200} height={50} />
        </Link>
        {/* Hamburger Menu */}
        <button id={styles.hamburger} onClick={handleClick}>
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    );
  };

  return (
    <header>
      {/* PC Header */}
      <div id={styles.pcHeader}>
        {/* Logo */}
        <Link className={styles.logo} href="/">
          <Image src="/logo.png" alt="logo" width={200} height={50} />
        </Link>

        {/* PC Navigation */}
        <nav id={styles.pcNav} role="navigation">
          <NavigationMenu />
          <SNSMenu />
        </nav>
      </div>

      {/* Mobile Header */}
      <div id={styles.mobileHeader}>
        {/* Mobile Navigation Menu */}
        {isMenuOpen ? (
          // If menu is open, show menu
          <div className={styles.mobileHeaderOpen}>
            <MobileHeaderTop />
            <nav id={styles.mobileNav} role="navigation">
              <NavigationMenu />
              <SNSMenu />
            </nav>
          </div>
        ) : (
          // If menu is closed, show logo and hamburger menu
          <MobileHeaderTop />
        )}
      </div>
    </header>
  );
};

export default Header;
