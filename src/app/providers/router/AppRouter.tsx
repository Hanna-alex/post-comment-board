import { useRoutes } from 'react-router-dom'
import {
	PostsPage,
	PostDetailPage,
	UserAlbumsPage,
	UserTodosPage,
	UserPostsPage,
	AlbumPhotosPage,
} from '../../../pages'

export const AppRouter = () => {
	const routes = useRoutes([
		{ path: '/posts', element: <PostsPage /> },
		{ path: '/posts/:id', element: <PostDetailPage /> },
		{ path: '/users/:id/albums', element: <UserAlbumsPage /> },
		{ path: 'users/:id/todos', element: <UserTodosPage /> },
		{ path: '/users/:id/posts', element: <UserPostsPage /> },
		{ path: '/albums/:id/photos', element: <AlbumPhotosPage /> },
	])
	return routes
}
