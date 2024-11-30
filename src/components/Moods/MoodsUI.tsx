import styles from "./Moods.module.css";

type Props = {
  angry: number;
  sad: number;
  neutral: number;
  happy: number;
  superHappy: number;
  handleAngryMood: () => void;
  handleSadMood: () => void;
  handleNeutralMood: () => void;
  handleHappyMood: () => void;
  handleSuperHappyMood: () => void;
  setAngry: (value: number) => void;
  setSad: (value: number) => void;
  setNeutral: (value: number) => void;
  setHappy: (value: number) => void;
  setSuperHappy: (value: number) => void;
};

export const MoodsUI = ({
  angry,
  sad,
  neutral,
  happy,
  superHappy,
  handleAngryMood,
  handleHappyMood,
  handleNeutralMood,
  handleSuperHappyMood,
  handleSadMood,
  setAngry,
  setHappy,
  setNeutral,
  setSad,
  setSuperHappy,
}: Props) => {
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
          className={`${styles.neutral} ${
            neutral ? styles.animationNeutral : ""
          }`}
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
