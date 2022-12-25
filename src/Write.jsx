import React from "react"

const Write = (props) => {
	const handleChange = (e) => {
		let value = e.target.value
		props.updateCurrentNote(value, props.currentNote.id)
	}

	let values =
		props.notes.length > 0
			? props.notes.filter((note) => note.id === props.currentNote.id)[0].body
			: props.currentNote.body

	return (
		<div className='write'>
			<textarea
				resizeable='false'
				className='text-area'
				value={values}
				onChange={handleChange}
			></textarea>
		</div>
	)
}

export default Write
