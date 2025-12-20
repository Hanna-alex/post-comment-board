import { useTheme } from '../../../shared/lid'
import { Button } from '../../../shared/iu'

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button onClick={toggleTheme}>
			Переключиться на {theme === 'light' ? 'темную' : 'светлую'} тему
		</Button>
	)
}
