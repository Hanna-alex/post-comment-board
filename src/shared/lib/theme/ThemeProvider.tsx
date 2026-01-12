import { useState, useEffect } from 'react'

import { ThemeContext } from './ThemeContext'

import type { FC } from 'react'
import type { IChildrenProps } from '../../types'

//Контекст для хранения текущей темы и функции переключателя
export type Theme = 'light' | 'dark'

export const ThemeProvider: FC<IChildrenProps> = ({ children }) => {
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
