import Image from 'next/image';

interface CardItemProps {
  room: IRoom;
}

const CardItem: React.FC<CardItemProps> = ({ room }) => {
  const { name, description, area, thumbnail, price, capacity, rank, discountInfo } = room;
  const truncatedDescription =
    description.length > 50 ? `${description.substring(0, 50)}...` : description;
  return (
    <div className="">
      <Image className="" src={thumbnail} alt="" width={500} height={500} />
      <div className="">
        <h5 className="">{name}</h5>
        <p className="">{truncatedDescription}</p>
        <div className="">
          <span className="">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
