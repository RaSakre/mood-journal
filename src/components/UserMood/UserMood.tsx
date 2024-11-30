import { useContext } from "react"
import { MoodContext } from "../../App"
import { UserMoodUI } from "./UserMoodUI";

export const UserMood = () => {
  const moodContext = useContext(MoodContext);

  return (
		<UserMoodUI
		moodContext={moodContext}
		/>
  );
};

