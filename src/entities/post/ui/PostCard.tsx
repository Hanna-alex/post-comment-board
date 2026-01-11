import type { IPost } from '../../../shared/types'
import styles from './postCard.module.css'

export const PostCard: React.FC<IPost> = ({ title, body }) => {
	return (
		<li className={styles.postCard}>
			<h3 className={styles.title}>{title}</h3>
			<p>{body}</p>
		</li>
	)
}
