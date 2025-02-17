import { FormGroup, SBuilderForm } from './BuilderForm.styles'
import SharedButton from './Button.styles'
import Input from './BaseInput.styles'

interface BuilderFormProps {
	newTitle: string
	setNewTitle: (value: string) => void
	newDescription: string
	setNewDescription: (value: string) => void
	newImagePath: string
	setNewImagePath: (value: string) => void
	handleAddTile: (event: React.FormEvent) => void
}

function BuilderForm({
	newTitle,
	setNewTitle,
	newDescription,
	setNewDescription,
	newImagePath,
	setNewImagePath,
	handleAddTile,
}: BuilderFormProps) {
	return (
		<SBuilderForm onSubmit={handleAddTile} aria-label='Add new tile'>
			<h2>Create a New Tile</h2>
			<FormGroup>
				<label htmlFor='title'>Title:</label>
				<Input
					id='title'
					type='text'
					value={newTitle}
					onChange={(e) => setNewTitle(e.target.value)}
					required
				/>
			</FormGroup>
			<FormGroup>
				<label htmlFor='description'>Description:</label>
				<Input
					id='description'
					type='text'
					value={newDescription}
					onChange={(e) => setNewDescription(e.target.value)}
					required
				/>
			</FormGroup>
			<FormGroup>
				<label htmlFor='imagePath'>Image URL:</label>
				<Input
					id='imagePath'
					type='text'
					value={newImagePath}
					onChange={(e) => setNewImagePath(e.target.value)}
					required
				/>
			</FormGroup>
			<SharedButton type='submit'>Add Tile</SharedButton>
		</SBuilderForm>
	)
}

export default BuilderForm
