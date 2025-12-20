//хук для использования темы
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const useTheme = () => {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error('Функция useTheme должна использоваться внутри ThemeProvider.')
	}
	return context
}
