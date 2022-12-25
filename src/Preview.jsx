import React from "react"
import ReactMarkdown from "react-markdown"

const Preview = (props) => {
	let value =
		props.notes.length > 0
			? props.notes.filter((note) => note.id === props.currentNote.id)[0].body
			: props.currentNote.body

	return (
		<div className='preview'>
			<ReactMarkdown className='react-markdown'>{value}</ReactMarkdown>
		</div>
	)
}

export default Preview
