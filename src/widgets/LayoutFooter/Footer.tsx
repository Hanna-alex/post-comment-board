import { ContentWrapper } from '../../shared/layouts'
import styles from './footer.module.css'

export const Footer = () => {
	const year: string = new Date().getFullYear().toString()

	return (
		<footer className={styles.footer}>
			<ContentWrapper>
				<span>© {year}</span>
			</ContentWrapper>
		</footer>
	)
}
