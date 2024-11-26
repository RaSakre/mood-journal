import { useContext } from "react"
import { MoodContext } from "../../App"
import styles from './UserMood.module.css'

export const UserMood = () => {
  const moodContext = useContext(MoodContext);

  return (
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
      {affection}{index < moodContext.affections.length - 1 && ', '}
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
  );
};

