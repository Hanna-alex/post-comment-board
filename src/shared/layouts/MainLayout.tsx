import type { IChildrenProps } from '../types/iChildren'
import stytles from './mainLayout.module.css'

export const MainLayout: React.FC<IChildrenProps> = ({ children }) => {
	return <div className={stytles.main}>{children}</div>
}
