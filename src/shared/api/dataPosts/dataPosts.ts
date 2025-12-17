interface IPost {
	id: number
	title: string
	body: string
}

export const posts: IPost[] = [
	{ id: 1, title: 'Пост 1', body: 'Контент поста 1' },
	{ id: 2, title: 'Пост 2', body: 'Контент поста 2' },
	{ id: 3, title: 'Пост 3', body: 'Контент поста 3' },
]
