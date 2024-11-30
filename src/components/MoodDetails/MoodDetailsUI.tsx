import { FormEvent } from 'react'
import styles from './MoodDetails.module.css'

type Props = {
	textRef: React.MutableRefObject<HTMLTextAreaElement| null>
	handleSubmit: (e:FormEvent) => void

}

export const MoodDetailsUI = ({textRef, handleSubmit}:Props) => {
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