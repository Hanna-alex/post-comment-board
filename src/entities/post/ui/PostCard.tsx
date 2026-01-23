import styles from './postCard.module.css'

export interface PostCardProps {
	title: string
	body: string
	id: number
}

export const PostCard = ({ title, body, id }: PostCardProps) => {
	return (
		<li className={styles.postCard} key={id}>
			<h3 className={styles.title}>{title}</h3>
			<p>{body}</p>
		</li>
	)
}
