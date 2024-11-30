import { NavLink } from "react-router-dom";
import styles from "./UserMood.module.css";
import { IMoodContext } from "../../App";

type Props = {
  moodContext: IMoodContext;
};

export const UserMoodUI = ({ moodContext }: Props) => {
  return (
    <>
      <div className={styles.moodContainer}>
        <div className={styles.column}>
          <h3>Настроение</h3>
          <p>{moodContext.mood}</p>
        </div>
        <div className={styles.separator} />
        <div className={styles.column}>
          <h3>Причины такого настроения</h3>
          <p className={styles.affections}>
            {moodContext.affections.map((affection, index) => (
              <span key={index} className={styles.affectionItem}>
                {affection}
                {index < moodContext.affections.length - 1 && ", "}
              </span>
            ))}
          </p>
        </div>
        <div className={styles.separator} />
        <div className={styles.column}>
          <h3>Подробнее</h3>
          <p>{moodContext.moodDetails}</p>
        </div>
      </div>
      <div className={styles.backButton}>
        <NavLink to={"/"}>Назад</NavLink>
      </div>
    </>
  );
};
