import { type FC } from 'react'
import styles from './postLengthFilter.module.css'

interface IPostLengthFilterProps {
	minLength: number
	onChange: (lenght: number) => void
}

export const PostLengthFilter: FC<IPostLengthFilterProps> = ({ minLength, onChange }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(Number(e.target.value))
	}

	return (
		<form className={styles.wrapper}>
			<label className={styles.label} htmlFor='minLenght'>
				Минимальная длина заголовка:
			</label>
			<input
				className={styles.input}
				type='number'
				value={minLength}
				onChange={handleChange}
				min={0}
				id='minLenght'
			/>
		</form>
	)
}
