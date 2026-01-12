import { createContext } from 'react'
import type { Theme } from './ThemeProvider'

interface ThemeContextProps {
	theme: Theme
	toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)
