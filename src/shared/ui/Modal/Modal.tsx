import { createPortal } from 'react-dom'
import type { MouseEventHandler, PropsWithChildren, ReactElement } from 'react'

import { Header } from './Header'
import { Body } from './Body'
import { Footer } from './Footer'

import styles from './modal.module.css'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
}

interface ModalOverlayProps {
	onClick: MouseEventHandler<HTMLDivElement>
}

const ModalOverlay = ({ onClick, children }: PropsWithChildren<ModalOverlayProps>) => (
	<div className={styles.overlay} onClick={onClick}>
		{children}
	</div>
)

type ModalComponent = (props: PropsWithChildren<ModalProps>) => ReactElement | null

export const Modal: ModalComponent & {
	Header: typeof Header
	Body: typeof Body
	Footer: typeof Footer
} = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null

	return createPortal(
		<ModalOverlay onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</ModalOverlay>,
		document.body,
	)
}

Modal.Header = Header
Modal.Body = Body
Modal.Footer = Footer
