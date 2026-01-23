import type { PropsWithChildren } from 'react'
import { Button } from '../Button/Button'
import styles from './footer.module.css'

interface ModalFooterProps {
	onClose?: () => void
}

export const Footer = ({ children, onClose }: PropsWithChildren<ModalFooterProps>) => (
	<div className={styles.footer}>
		{children ?? (
			<Button onClick={onClose} className={'closeBtn'}>
				Закрыть
			</Button>
		)}
	</div>
)
