import Image from 'next/image';

interface CardItemProps {
  room: IRoom;
}

const CardItem: React.FC<CardItemProps> = ({ room }) => {
  const { name, description, area, thumbnail, price, capacity, rank, discountInfo } = room;
  const truncatedDescription =
    description.length > 50 ? `${description.substring(0, 50)}...` : description;
  return (
    <div className="m-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image className="rounded-t-lg" src={thumbnail} alt="" width={500} height={500} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{truncatedDescription}</p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
