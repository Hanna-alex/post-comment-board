import type { ChangeEventHandler } from 'react'
import styles from './postLengthFilter.module.css'

interface PostLengthFilterProps {
	minLength: number
	onChange: (length: number) => void
}

export const PostLengthFilter = ({ minLength, onChange }: PostLengthFilterProps) => {
	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		onChange(Number(e.target.value))
	}

	return (
		<form className={styles.wrapper}>
			<label className={styles.label} htmlFor='minLenght'>
				Минимальная длина заголовка:
			</label>
			<input
				id='minLenght'
				className={styles.input}
				type='number'
				value={minLength}
				onChange={handleChange}
				min={0}
			/>
		</form>
	)
}
