import { createPortal } from 'react-dom'
import type { FC, ReactNode } from 'react'

import { Header } from './Header'
import { Body } from './Body'
import { Footer } from './Footer'

import styles from './modal.module.css'

interface IModalProps {
	isOpen: boolean
	onClose: () => void
	children?: ReactNode
}

interface ICompoundComponent {
	Header: typeof Header
	Body: typeof Body
	Footer: typeof Footer
}

// export const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
// 	if (!isOpen) return null

// 	return ReactDOM.createPortal(
// 		<div className={styles.overlay}>
// 			<div className={styles.modal}>
// 				<Button onClick={onClose} className={'closeBtn'}>
// 					Закрыть
// 				</Button>
// 				{children}
// 			</div>
// 		</div>,
// 		document.body
// 	)
// }

const ModalOverlay: FC<{ onClick: () => void; children: ReactNode }> = ({
	onClick,
	children,
}) => (
	<div className={styles.overlay} onClick={onClick}>
		{children}
	</div>
)

export const Modal: FC<IModalProps> & ICompoundComponent = ({
	isOpen,
	onClose,
	children,
}) => {
	if (!isOpen) return null

	return createPortal(
		<ModalOverlay onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</ModalOverlay>,
		document.body
	)
}

Modal.Header = Header
Modal.Body = Body
Modal.Footer = Footer
