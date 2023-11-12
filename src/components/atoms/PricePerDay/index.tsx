import styles from '@/components/atoms/PricePerDay/index.module.scss';

interface Props {
  price: string;
}

/**
 * RoomCardItem component that displays a room's details in a card format.
 * @param {Props} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered room card item.
 */
const PricePerDay: React.FC<Props> = ({ price }) => {
  return (
    <div className={styles.price}>
      <span>¥ {price} </span>/泊
    </div>
  );
};

export default PricePerDay;
