import { type FC } from 'react'
import type { Comment } from '../model/types'

export const CommentCard: FC<Comment> = ({ body, name, id, email }) => {
	return (
		<li key={`com${id}`}>
			<p>{body}</p>
			<span>name: {name}</span>
			<br />
			<span>email: {email}</span>
		</li>
	)
}
