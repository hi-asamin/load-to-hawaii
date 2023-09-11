import Image from 'next/image';

interface Props {
  thumbnail: string;
  title: string;
  description: string;
  price: string;
}

const CardItem: React.FC<Props> = ({
  thumbnail,
  title,
  description,
  price,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <Image src={thumbnail} alt={title} layout="fill" objectFit="cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <span className="text-xl font-semibold">{price}</span>
      </div>
    </div>
  );
};

export default CardItem;
