import { Container } from '../../shared'
import styles from './header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<h2>Тут логотип</h2>
			</Container>
		</header>
	)
}
