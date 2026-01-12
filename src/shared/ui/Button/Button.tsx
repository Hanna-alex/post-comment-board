import type { FC } from 'react'
import styles from './button.module.css'

interface IButtonProps {
	onClick?: () => void
	children: React.ReactNode
	type?: 'button' | 'submit' | 'reset'
	className?: string
}

export const Button: FC<IButtonProps> = ({
	children,
	onClick,
	type = 'button',
	className,
}) => {
	const additionalStyle = className === 'closeBtn' ? styles.closeBtn : null

	return (
		<button
			className={`${styles.button} ${additionalStyle}`}
			type={type}
			onClick={onClick}>
			{children}
		</button>
	)
}
