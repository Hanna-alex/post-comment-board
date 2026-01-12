import type { FC } from 'react'
import type { IChildrenProps } from '../../types'

import styles from './body.module.css'

export const Body: FC<IChildrenProps> = ({ children }) => (
	<p className={styles.body}>{children}</p>
)
