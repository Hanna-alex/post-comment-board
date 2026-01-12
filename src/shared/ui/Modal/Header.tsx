import type { FC } from 'react'
import type { IChildrenProps } from '../../types'
import styles from './header.module.css'

export const Header: FC<IChildrenProps> = ({ children }) => (
	<h2 className={styles.header}>{children}</h2>
)
