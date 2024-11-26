import styles from './AffectionsList.module.css'
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
			<div ref={affectionRef} onClick={handleClick}  className={`${styles.affection} ${isActive ? styles.affectionActive : ''}`}>
				<p>{props.affect}</p>
			</div>
	)
}