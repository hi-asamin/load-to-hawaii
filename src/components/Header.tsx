import { SITE_NAME } from '@/config/base';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-xl">{SITE_NAME}</h1>
    </header>
  );
};

export default Header;
