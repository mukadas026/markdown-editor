import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import { IoIosCloseCircle } from "react-icons/io"

const Modal = (props) => {
	const [title, setTitle] = useState("")

	const handleChange = (e) => {
		let value = e.target.value
		setTitle(value)
	}

	const createNote = () => {
		const newNote = {
			id: nanoid(),
			title: title,
			body: "# type in Markdown",
		}
		props.addNote(newNote)
		// setTitle("")
		props.setIsCreating(false)
	}

	useEffect(() => {
		if (!props.isCreating) setTitle("")
	}, [props.isCreating])

	return (
		<div className={props.isCreating ? 'modal-container' : 'hide'}>
			<div className={props.isCreating ? "modal visible" : "modal"}>
				<div
					className='close'
					onClick={() => props.setIsCreating(false)}
				>
					<IoIosCloseCircle />
				</div>
				<h2>Create New Note</h2>
				<label>
					Note Title{" "}
					<input
						type='text'
						value={title}
						onChange={handleChange}
					/>
				</label>
				<button onClick={createNote}>Add Note</button>
			</div>
		</div>
	)
}

export default Modal
