import type { IChildrenProps } from '../types/children'
import styles from './contentWrapper.module.css'

export const ContentWrapper: React.FC<IChildrenProps> = ({ children }) => {
	return <div className={styles.contentWrapper}>{children}</div>
}
