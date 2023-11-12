import styles from './index.module.scss'; // Make sure to create a corresponding SCSS module file.

interface RankingRibbonProps {
  rank: number;
}

/**
 * Renders a ranking ribbon with a color corresponding to the provided rank.
 *
 * @param {RankingRibbonProps} props The component props.
 * @returns {JSX.Element} A JSX element of the ribbon with appropriate styles.
 */
const RankingRibbon: React.FC<RankingRibbonProps> = ({ rank }) => {
  // Function to determine the ribbon color based on the rank
  const getRibbonColor = (rank: number): string => {
    switch (rank) {
      case 1:
        return styles.gold; // Assuming you have a gold class in your SCSS
      case 2:
        return styles.silver; // Assuming you have a silver class in your SCSS
      case 3:
        return styles.bronze; // Assuming you have a bronze class in your SCSS
      default:
        return styles.black; // Assuming you have a black class in your SCSS
    }
  };

  return <i className={`${styles.ribbon} ${getRibbonColor(rank)}`}>{rank}</i>;
};

export default RankingRibbon;
