import styles from './MoodDetails.module.css'
import { useRef } from 'react'
import { useContext } from 'react'
import { MoodContext } from '../../App'
import { useNavigate } from 'react-router-dom'

export const MoodDetails = () => {
	const navigate = useNavigate()
	const moodContext = useContext(MoodContext)
	const textRef = useRef<HTMLTextAreaElement| null>(null)
	const handleSubmit = (evt:any) => {
		evt.preventDefault()
		if(textRef.current) {
			moodContext.addMoodDetails(textRef.current.value)
			navigate('/userMood')
		}
	}
	return (
		<div className={styles.moodInfo}>
			<h3 className={styles.moodTitle}>Напишите об этом</h3>
			<form onSubmit={handleSubmit}>
				<textarea ref={textRef} placeholder='Опишите свои чувства подробнее, если хотите' rows={4} cols={40} className={styles.moodText}></textarea>
				<div className={styles.moodButton}>
					<button className={styles.saveMood}>Сохранить чувства</button>
				</div>
			</form>
		</div>
	)
}