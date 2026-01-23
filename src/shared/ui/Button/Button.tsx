import type { MouseEventHandler, PropsWithChildren } from 'react'
import styles from './button.module.css'

interface ButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>
	type?: 'button' | 'submit' | 'reset'
	className?: string
}

export const Button = ({
	children,
	onClick,
	type = 'button',
	className,
}: PropsWithChildren<ButtonProps>) => {
	const buttonClassName = [styles.button, className].filter(Boolean).join(' ')

	return (
		<button className={buttonClassName} type={type} onClick={onClick}>
			{children}
		</button>
	)
}
