import type { IChildrenProps } from '../types/iChildren'
import styles from './container.module.css'

export const Container: React.FC<IChildrenProps> = ({ children }) => {
	return <div className={styles.container}>{children}</div>
}
