import { NavLink } from 'react-router-dom'

export const UserTabs = ({ userId }: { userId: string | number }) => {
	return (
		<nav>
			<NavLink
				to={'posts'}
				className={({ isActive }) => (isActive ? 'active' : '')}>
				Посты
			</NavLink>
			<NavLink
				to={`/users/${userId}/posts`}
				className={({ isActive }) => (isActive ? 'active' : '')}>
				Посты пользователя
			</NavLink>
			<NavLink
				to={`/users/${userId}/albums`}
				className={({ isActive }) => (isActive ? 'active' : '')}>
				Альбомы
			</NavLink>
			<NavLink
				to={`/users/${userId}/todos`}
				className={({ isActive }) => (isActive ? 'active' : '')}>
				Задачи
			</NavLink>
		</nav>
	)
}
