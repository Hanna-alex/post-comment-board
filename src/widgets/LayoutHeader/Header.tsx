import { ThemeSwitcher } from '../../features'
import { ContentWrapper } from '../../shared/layouts'
import { ProjectInfoButton } from '../ProjectInfoButton/ProjectInfoButton'

import styles from './header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<ContentWrapper>
				<h2>Тут логотип</h2>
				<ProjectInfoButton />
				<ThemeSwitcher />
			</ContentWrapper>
		</header>
	)
}
