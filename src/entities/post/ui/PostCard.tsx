import styles from './postCard.module.css'

interface IPostCardPros {
	id: number
	title: string
	body: string
}

export const PostCard: React.FC<IPostCardPros> = ({ title, body }) => {
	return (
		<li className={styles.postCard}>
			<h3 className={styles.title}>{title}</h3>
			<p>{body}</p>
		</li>
	)
}
