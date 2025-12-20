import ReactDOM from 'react-dom'
import { Button } from '../Button/Button'
import type { FC } from 'react'

import styles from './modal.module.css'

interface IModalProps {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

export const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null

	return ReactDOM.createPortal(
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<Button onClick={onClose} className={'closeBtn'}>
					Закрыть
				</Button>
				{children}
			</div>
		</div>,
		document.body
	)
}
