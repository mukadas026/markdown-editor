import React, { useEffect, useState } from "react"
import Write from "./Write"
import Preview from "./Preview"
import NoteMenu from "./NoteMenu"
import Modal from "./Modal"

import "./App.css"

const App = () => {
	let initNote = `
## Welcome to Markdown Editor 1.0 by -*Mukadas*-
---
#### You currently have no notes, to add notes
	
- Click on the add notes button 
- Type in the text area on the left
---
#### To delete notes:
- Add at least one note
- Hover over the note title
- Click on the delete button that pops up
`
	const [notes, setNotes] = useState(
		localStorage.getItem("md-notes") ? JSON.parse(localStorage.getItem("md-notes")) : []
	)
	const [currentNote, setCurrentNote] = useState(notes.length > 0 ? notes[0] : { body: initNote })
	const [creating, setCreating] = useState(false)

	const addNote = (note) => {
		setNotes((prevNotes) => [note, ...prevNotes])
		setCurrentNote(note)
	}
	const updateCurrentNote = (value, id) => {
		setNotes((prevNotes) => prevNotes.map((note) => (note.id === id ? { ...note, body: value } : note)))
	}

	const handleSetCurrentNote = (id) => {
		let selectedNote = notes.filter((note) => note.id === id)
		setCurrentNote(selectedNote[0])
	}
	const handleDeleteNote = (id) => {
		setNotes((prevNotes) => {
			return prevNotes.filter((note) => note.id !== id)
		})

		setCurrentNote(() => (currentNote.id === id ? (notes.length > 1 ? notes[1] : { body: initNote }) : currentNote))
	}
	const hidePop = (e) => {
		if (creating) {
			setCreating(false)
		}
	}

	useEffect(() => {
		localStorage.setItem("md-notes", JSON.stringify(notes))
	}, [notes])

	return (
		<main className='heading'>
			<h1 className='main-heading'>Markdown Editor 1.0</h1>
			<div
				className='main'
				onClick={hidePop}
			>
				<Write
					notes={notes}
					currentNote={currentNote}
					updateCurrentNote={updateCurrentNote}
				/>
				<NoteMenu
					setIsCreating={setCreating}
					notes={notes}
					setCurrentNote={handleSetCurrentNote}
					deleteNote={handleDeleteNote}
				/>
				<Preview
					currentNote={currentNote}
					notes={notes}
				/>
			</div>
			<Modal
				addNote={addNote}
				isCreating={creating}
				setIsCreating={setCreating}
			/>
		</main>
	)
}

export default App