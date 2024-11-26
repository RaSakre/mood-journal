// import angry from '../../moods-images/Angry/Face=Angry, Stage=1.svg'
// import sad from '../../moods-images/Sad/Face=Sad, Stage=1.svg'
// import neutral from '../../moods-images/Neutral/Face=Neutral, Stage=1.svg'
// import happy from '../../moods-images/Happy/Face=Happy,Stage=1.svg'
// import superHappy from '../../moods-images/Super-Happy/Face=Super,Stage=1.svg'
import styles from "./Moods.module.css";
import { useState, useContext } from "react";
import { MoodContext } from "../../App";



export const Moods = () => {
	const moodContext = useContext(MoodContext);
  const [angry, setAngry] = useState(0);
  const [sad, setSad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [happy, setHappy] = useState(0);
  const [superHappy, setSuperHappy] = useState(0);
	const handleAngryMood= () => {
		setAngry(1)
		moodContext.addMood('Злой')
	}
	const handleSadMood= () => {
		setSad(1)
		moodContext.addMood('Грустный')
	}
	const handleNeutralMood= () => {
		setNeutral(1)
		moodContext.addMood('Нейтральный')
	}
	const handleHappyMood= () => {
		setHappy(1)
		moodContext.addMood('Счастливый')
	}
	const handleSuperHappyMood= () => {
		setSuperHappy(1)
		moodContext.addMood('Супер счастлив')
	}
  return (
    <div className={styles.moods}>
      <h1 className={styles.moodText}>Как ты себя чувствуешь?</h1>
      <div className={styles.moodsImages}>
        <div
          className={`${styles.angry} ${angry ? styles.animationAngry : ""}`}
          onClick={handleAngryMood}
          onAnimationEnd={() => setAngry(0)}
        />
        <div
          className={`${styles.sad} ${sad ? styles.animationSad : ""}`}
          onClick={handleSadMood}
          onAnimationEnd={() => setSad(0)}
        />
        <div
          className={`${styles.neutral} ${neutral ? styles.animationNeutral : ""}`}
          onClick={handleNeutralMood}
          onAnimationEnd={() => setNeutral(0)}
        />
        <div
          className={` ${styles.happy} ${happy ? styles.animationHappy : ""}`}
          onClick={handleHappyMood}
          onAnimationEnd={() => setHappy(0)}
        />
        <div
          className={`${styles.superHappy} ${
            superHappy ? styles.animationSuperHappy : ""
          }`}
          onClick={handleSuperHappyMood}
          onAnimationEnd={() => setSuperHappy(0)}
        />
      </div>
    </div>
  );
};
