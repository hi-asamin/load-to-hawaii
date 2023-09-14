import { SITE_NAME } from '@/config/base';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <p>&copy; 2023 {SITE_NAME}</p>
    </footer>
  );
};

export default Footer;
