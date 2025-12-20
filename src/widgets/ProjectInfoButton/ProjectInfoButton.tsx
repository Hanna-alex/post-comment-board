import { useState } from 'react'
import { Button, Modal } from '../../shared/iu'

export const ProjectInfoButton = () => {
	const [isModalOpen, setModalOpen] = useState(false)

	return (
		<>
			<Button onClick={() => setModalOpen(true)}>О проекте</Button>
			<Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
				<h2>О проекте</h2>
				<p>Здесь информация о проекте...</p>
			</Modal>
		</>
	)
}
