// import type { ComponentType, ReactElement } from 'react'

// export interface WithLoadingProps {
// 	isLoading: boolean
// }

// // Универсальный HOC, который принимает компонент и возвращает компонент с loader
// export function withLoader<P>(WrappedComponent: ComponentType<P>) {
// 	const Component = (props: P & WithLoadingProps): ReactElement => {
// 		const { isLoading, ...restProps } = props

// 		if (isLoading) {
// 			return <div>Загрузка...</div>
// 		}
// 		return <WrappedComponent {...(restProps as P)} />
// 	}

// 	Component.displayName = `withLoader(${WrappedComponent.displayName ?? WrappedComponent.name ?? 'Component'})`
// 	return Component
// }

import type { ComponentType, ReactElement } from 'react'

export interface WithLoadingProps {
	isLoading: boolean
}

export function withLoader<P extends object>(WrappedComponent: ComponentType<P>) {
	const Component = (props: P & WithLoadingProps): ReactElement => {
		const { isLoading, ...restProps } = props

		if (isLoading) {
			return <div>Загрузка...</div>
		}

		return <WrappedComponent {...(restProps as P)} />
	}

	Component.displayName = `withLoader(${
		WrappedComponent.displayName ?? WrappedComponent.name ?? 'Component'
	})`

	return Component
}
