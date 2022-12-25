import React from "react"
import { FaPlus, FaTrashAlt } from "react-icons/fa"

const NoteMenu = (props) => {
	const handleClick = () => {
		props.setIsCreating(true)
	}	

	const handleDelete = (e, id) => {
		e.stopPropagation()
		props.deleteNote(id)
	}

	const notesList = props.notes.map((note, index) => {
		return (
			<div
				className='note'
				key={note.id}
				onClick={() => props.setCurrentNote(note.id)}
			>
				<p>{note.title}</p>
				<div onClick={(e) => handleDelete(e, note.id)}>
					<FaTrashAlt />
				</div>
			</div>
		)
	})

	return (
		<div className='note-menu'>
			<div className='note-btn'>
				<div className='note-btn-text'>
					<p>ᗩdd Ոotes 📝</p>
				</div>
				<button
					className='add-note-btn'
					onClick={handleClick}
				>
					<FaPlus />
				</button>
			</div>
			<div className='notes-list'>{notesList}</div>
		</div>
	)
}

export default NoteMenu
