import { MoodDetailsUI } from './MoodDetailsUI'
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
		<MoodDetailsUI
		handleSubmit={handleSubmit}
		textRef={textRef}
		/>
	)
}