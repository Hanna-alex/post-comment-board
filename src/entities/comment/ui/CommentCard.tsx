import { type FC } from 'react'
import type { IComment } from '../../../shared/types'

export const CommentCard: FC<IComment> = ({ body, name, id }) => {
	return (
		<li key={id}>
			<span>{body}</span>
			<span>{name}</span>
		</li>
	)
}
