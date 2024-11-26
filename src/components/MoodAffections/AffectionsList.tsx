import { Affection } from "./Affection";
import styles from './AffectionsList.module.css'

const affections = ['Работа', "Семья", "Финансы", 'Сон', 'Алкоголь', 'Еда', 'Хобби', 'Отношения', 'Учеба', 'Погода', 'Музыка', 'Здоровье', 'Путешествия', 'Срочные дела']

export const AffectionsList = () => {
	return (
		<div className={styles.affectionPage}>
			<h2 className={styles.affectionTitle}>Что влияет на твое настроение?</h2>
			<div className={styles.affectionList}>
			{affections.map(el => <Affection key={el} affect={el}/>)}
			</div>
		</div>
	);
};
