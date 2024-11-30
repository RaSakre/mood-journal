import { AffectionUI } from './AffectionUI';
import { useRef, useState, useContext } from 'react'
import { MoodContext } from '../../App';


export const Affection = (props:any) => {
	const moodContext = useContext(MoodContext);
	const [isActive, setIsActive] = useState(false);
	const affectionRef = useRef<HTMLDivElement | null>(null)
	const handleClick = () => {
    setIsActive(prev => !prev); // Переключаем состояние
		moodContext.addAffections(props.affect);
		if (isActive){
			moodContext.deleteAffection(props.affect);
		}
  };
	return (
    <AffectionUI
      affectionRef={affectionRef}
      isActive={isActive}
      handleClick={handleClick}
      affect={props.affect}
    />
	)
}