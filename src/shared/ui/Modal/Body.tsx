import type { PropsWithChildren } from 'react'

import styles from './body.module.css'

export const Body = ({ children }: PropsWithChildren) => (
	<p className={styles.body}>{children}</p>
)
