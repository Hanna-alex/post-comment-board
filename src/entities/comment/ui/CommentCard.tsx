import { type FC } from 'react'
import type { IComment } from '../../../shared/types'

export const CommentCard: FC<IComment> = ({ body, name, id, email }) => {
	return (
		<li key={`com${id}`}>
			<p>{body}</p>
			<span>name: {name}</span>
			<br />
			<span>email: {email}</span>
		</li>
	)
}
