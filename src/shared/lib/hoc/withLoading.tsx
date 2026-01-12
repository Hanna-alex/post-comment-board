import { type FC } from 'react'

type WithLoadingProps = {
	isLoading: boolean
}

// Универсальный HOC, который принимает компонент и возвращает компонент с loader
export function withLoader<P extends object>(
	WrappedComponent: React.ComponentType<P>
): FC<P & WithLoadingProps> {
	const Component: FC<P & WithLoadingProps> = ({ isLoading, ...props }) => {
		if (isLoading) {
			return <div>Загрузка...</div>
		}
		return <WrappedComponent {...(props as P)} />
	}

	return Component
}
