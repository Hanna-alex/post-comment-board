import { Container } from '../../shared'
import styles from './footer.module.css'

export const Footer = () => {
	const year: string = new Date().getFullYear().toString()

	return (
		<footer className={styles.footer}>
			<Container>
				<span>© {year}</span>
			</Container>
		</footer>
	)
}
