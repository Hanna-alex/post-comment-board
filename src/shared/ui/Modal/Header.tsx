import type { PropsWithChildren } from 'react'
import styles from './header.module.css'

export const Header = ({ children }: PropsWithChildren) => (
	<h2 className={styles.header}>{children}</h2>
)
