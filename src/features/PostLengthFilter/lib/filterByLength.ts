import type { IPost } from '../../../shared/types'

export const filterByLength = (posts: IPost[], minLength: number) => {
	const safeMinLength = Math.max(0, minLength)
	return posts.filter((post: IPost) => post.title?.length >= safeMinLength)
}
