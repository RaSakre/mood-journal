import "./App.css";
import { Header } from "./components/Header/Header";
import { Moods } from "./components/Moods/Moods";
import { AffectionsList } from "./components/MoodAffections/AffectionsList";
import { MoodDetails } from "./components/MoodDetails/MoodDetails";
import { createContext, ReactNode, useState } from "react";
import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import { UserMood } from "./components/UserMood/UserMood";
import { HashRouter as Router } from "react-router-dom";

export interface IMoodContext {
  mood: string;
  affections: string[];
  moodDetails: string;
  addMood: (feeling: string) => void;
  addAffections: (feeling: string) => void;
  deleteAffection: (feeling: string) => void;
  addMoodDetails: (moodDetails: string) => void;
}

export const MoodContext = createContext<IMoodContext>({
  mood: "",
  affections: [],
  moodDetails: "",
  addMood: () => {},
  addAffections: () => {},
  deleteAffection: () => {},
  addMoodDetails: () => {},
});

const MoodProvider = ({ children }: { children: ReactNode }) => {
  const [mood, setMood] = useState("");
  const [affections, setAffections] = useState<string[]>([]);
  const [moodDetails, setMoodDetails] = useState("");
  const addMood = (feeling: string) => {
    setMood(feeling);
  };
  const addAffections = (feeling: string) => {
    if (!affections.includes(feeling)) {
      setAffections([...affections, feeling]);
    }
  };
  const deleteAffection = (feeling: string) => {
    setAffections(affections.filter((affection) => affection !== feeling));
  };
  const addMoodDetails = (moodDetails: string) => {
    setMoodDetails(moodDetails);
  };
  return (
    <MoodContext.Provider
      value={{
        mood,
        affections,
        moodDetails,
        addMood,
        addAffections,
        deleteAffection,
        addMoodDetails,
      }}
    >
      {children}
    </MoodContext.Provider>
  );
};

const United = () => {
  return (
    <div>
      <Moods />
      <AffectionsList />
      <MoodDetails />
    </div>
  );
};

function App() {
  return (
    <MoodProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<United />} />
            <Route path="/userMood" element={<UserMood />} />
          </Routes>
        </div>
      </Router>
    </MoodProvider>
  );
}

export default App;
