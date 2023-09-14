import Image from 'next/image';

interface Props {
  room: IRoom;
}

const CardItem: React.FC<Props> = ({ room }) => {
  const { name, area, thumbnail, price, capacity, rank, discountInfo } = room;
  const rankClass = rank === '1' ? 'text-yellow-500' : 'text-gray-400';
  const rating = '4.5';
  const discountedPrice = '¥10,000'; // price - discount;
  return (
    <div className="_listItemContent_1f9mj_10">
      <div className="relative">
        <div className="absolute -top-1 left-2">
          <div className="inline-block">
            <div className="relative inline-block">
              <i className={`icon ribbon-solid ${rankClass}`} />
              <span className="text-[13px] absolute left-1/2 top-1/2 -mt-1 -translate-x-1/2 -translate-y-1/2 text-center font-bold text-white">
                {rank}
              </span>
            </div>
          </div>
        </div>
        <img alt={name} className="_thumbnail_1f9mj_17" src={thumbnail} />
      </div>
      <div className="_accommodationInfo_1f9mj_22">
        <div>
          <span className="_accommodationName_1f9mj_27">{name}</span>
        </div>
        <div className="_areaAndRating_1f9mj_37">
          <span className="_areaName_1f9mj_40">{area}</span>
          <span className="_rating_1f9mj_50">
            <i className="icon star-solid _starIcon_1f9mj_55" /> {rating}
          </span>
        </div>
        <div className="my-auto text-right">
          {discountInfo && (
            <span className="text-yellow-800 text-xs font-bold">{discountInfo}</span>
          )}
          <span className="text-gray-800 mt-2 pb-2">
            <span className="text-gray-600 flex-1/2 line-through">{price}</span>
            <span className="text-xs block">
              <span className="inline-block">{capacity}</span>
              <span className="ml-1 inline-block">
                <span className="text-lg font-bold">{discountedPrice}</span>
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
