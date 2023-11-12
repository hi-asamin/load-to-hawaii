import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram } from 'react-icons/ai';
import { FaTiktok, FaLine } from 'react-icons/fa';
import { BLOG_URL, TIKTOK_ACCOUNT, INSTAGRAM_ACCOUNT, LINE_ACCOUNT } from '@/config/constants';

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
            予約
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
        <li>
          <Link
            className={styles.navItem}
            href={TIKTOK_ACCOUNT}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={24} />
          </Link>
        </li>
        <li>
          <Link
            className={styles.navItem}
            href={INSTAGRAM_ACCOUNT}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram size={24} />
          </Link>
        </li>
        <li>
          <Link
            className={styles.navItem}
            href={LINE_ACCOUNT}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLine size={24} />
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <header>
      {/* PC Header */}
      <div id={styles.pcHeader}>
        {/* Logo */}
        <Link id={styles.logo} href="/">
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
        <div className={styles.mobileHeaderTop}>
          {/* Logo */}
          <Link id={styles.logo} href="/">
            <Image src="/logo.png" alt="logo" width={200} height={50} />
          </Link>
          {/* Hamburger Menu */}
          <button id={styles.hamburger} onClick={handleClick}>
            <span>{isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}</span>
          </button>
        </div>
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav id={styles.mobileNav} role="navigation">
            <NavigationMenu />
            <SNSMenu />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
