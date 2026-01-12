import { useState } from 'react'
import { Button, Modal } from '../../shared/ui'

export const ProjectInfoButton = () => {
	const [isModalOpen, setModalOpen] = useState(false)

	return (
		<>
			<Button onClick={() => setModalOpen(true)}>О проекте</Button>
			<Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
				<Modal.Header>О проекте</Modal.Header>
				<Modal.Body>Здесь информация о проекте...</Modal.Body>
				<Modal.Footer onClose={() => setModalOpen(false)}></Modal.Footer>
			</Modal>
		</>
	)
}
