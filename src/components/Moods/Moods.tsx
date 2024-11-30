import { MoodsUI } from "./MoodsUI";
import { useState, useContext } from "react";
import { MoodContext } from "../../App";

export const Moods = () => {
  const moodContext = useContext(MoodContext);
  const [angry, setAngry] = useState(0);
  const [sad, setSad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [happy, setHappy] = useState(0);
  const [superHappy, setSuperHappy] = useState(0);
  const handleAngryMood = () => {
    setAngry(1);
    moodContext.addMood("Злой");
  };
  const handleSadMood = () => {
    setSad(1);
    moodContext.addMood("Грустный");
  };
  const handleNeutralMood = () => {
    setNeutral(1);
    moodContext.addMood("Нейтральный");
  };
  const handleHappyMood = () => {
    setHappy(1);
    moodContext.addMood("Счастливый");
  };
  const handleSuperHappyMood = () => {
    setSuperHappy(1);
    moodContext.addMood("Супер счастлив");
  };
  return (
    <MoodsUI
      handleAngryMood={handleAngryMood}
      handleSadMood={handleSadMood}
      handleNeutralMood={handleNeutralMood}
      handleHappyMood={handleHappyMood}
      handleSuperHappyMood={handleSuperHappyMood}
      angry={angry}
      happy={happy}
      sad={sad}
      neutral={neutral}
      superHappy={superHappy}
      setAngry={setAngry}
      setHappy={setHappy}
      setSad={setSad}
      setNeutral={setNeutral}
      setSuperHappy={setSuperHappy}
    />
  );
};
