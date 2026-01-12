import { useCallback, useState, type FC } from 'react'
import { CommentCard } from '../../../entities'
import { Button } from '../../../shared/ui'
import type { IComment } from '../../../shared/types'

interface ICommentListProps {
	comments: IComment[]
}

export const CommentList: FC<ICommentListProps> = ({ comments }) => {
	const [isCollapsed, setIsCollapsed] = useState(true)

	const toggleCollapsed = useCallback(() => {
		setIsCollapsed((prev) => !prev)
	}, [])

	return (
		<div>
			<Button onClick={toggleCollapsed}>
				{isCollapsed ? 'Развернуть комментарии' : 'Свернуть комментарии'}
			</Button>

			{!isCollapsed && (
				<ul>
					{comments.map((comment) => (
						<CommentCard {...comment} />
					))}
				</ul>
			)}
		</div>
	)
}
