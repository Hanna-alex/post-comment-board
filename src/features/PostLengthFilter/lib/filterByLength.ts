import type { IPost } from '../../../shared/types'

export const filterByLength = (posts: IPost[], minLength: number): IPost[] => {
	return posts.filter((post) => post.title?.length >= minLength)
}
