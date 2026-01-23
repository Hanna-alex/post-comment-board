import type { ReactNode } from 'react'

export interface ItemListProps<T> {
	item: T[]
	renderItem: (item: T) => ReactNode
	onItemClick?: (Item: T) => void
}
