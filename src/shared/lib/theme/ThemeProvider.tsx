import { useState, useEffect } from 'react'
import type { PropsWithChildren } from 'react'
import { ThemeContext, type Theme } from './ThemeContext'

//Контекст для хранения текущей темы и функции переключателя

export const ThemeProvider = ({ children }: PropsWithChildren) => {
	const [theme, setTheme] = useState<Theme>('dark')

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
	}

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
