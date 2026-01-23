import type { PropsWithChildren } from 'react'
import styles from './mainLayout.module.css'

export const MainLayout = ({ children }: PropsWithChildren) => {
	return <div className={styles.main}>{children}</div>
}
