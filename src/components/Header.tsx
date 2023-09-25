import Link from 'next/link';
import { useState } from 'react';
import { SITE_NAME } from '@/config/base';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="text-blue-500 font-bold text-xl">Logo</div>
        </Link>

        {/* PC Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/about" className="text-gray-700 hover:text-blue-500">
            About
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </Link>
          <Link href="/rooms" className="text-gray-700 hover:text-blue-500">
            Room
          </Link>
          <Link
            href="/contact"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-blue-100 p-4">
          <Link href="/about" className="block mb-2 text-gray-700 hover:text-blue-500">
            About
          </Link>
          <Link
            href="/blog"
            className="block mb-2 text-gray-700 hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </Link>
          <Link href="/rooms" className="block mb-2 text-gray-700 hover:text-blue-500">
            Room
          </Link>
          <Link
            href="/contact"
            className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            お問い合わせ
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
