import type { FC, ReactNode } from 'react'
import { Button } from '../Button/Button'

import styles from './footer.module.css'

type ModalFooterProps = {
	onClose?: () => void
	children?: ReactNode
}

export const Footer: FC<ModalFooterProps> = ({ children, onClose }) => (
	<div className={styles.footer}>
		{children ? (
			children
		) : (
			<Button onClick={onClose} className={'closeBtn'}>
				Закрыть
			</Button>
		)}
	</div>
)
