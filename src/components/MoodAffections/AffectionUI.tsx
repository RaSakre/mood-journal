import styles from './AffectionsList.module.css'

type Props = {
	affect: string;
	isActive: boolean;
	affectionRef: React.RefObject<HTMLDivElement>;
	handleClick: () => void;
}

export const AffectionUI = ({affect, isActive, affectionRef, handleClick}:Props) => {
  return (
    <div
      ref={affectionRef}
      onClick={handleClick}
      className={`${styles.affection} ${
        isActive ? styles.affectionActive : ""
      }`}
    >
      <p>{affect}</p>
    </div>
  );
};
