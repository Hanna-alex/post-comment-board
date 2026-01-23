import type { PropsWithChildren } from 'react'
import styles from './contentWrapper.module.css'

export const ContentWrapper = ({ children }: PropsWithChildren) => {
	return <div className={styles.contentWrapper}>{children}</div>
}
