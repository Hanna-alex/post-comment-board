import { useCallback, useState } from 'react'
import { CommentCard } from '../../../entities'
import { Button } from '../../../shared/ui'
import type { CommentListProps } from '../model/types'

export const CommentList = ({ comments }: CommentListProps) => {
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
