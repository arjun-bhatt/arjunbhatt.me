import React, { useEffect } from 'react';
import NewNoteButton from './newNoteButton.jsx';
import Note from './note.jsx'; // Import the Note component
import * as DB from '../services/datastore.js';
// import { produce } from 'immer';

export function reactNotesApp(props) {        
	// const initialState = {
	//         1: {title: 'testing',
	//             text: 'I is a note',
	//             x: 400,
	//             y: 12,
	//             zIndex: 26},

	//         2: {title: 'testing2',
	//             text: 'I is a note2',
	//             x: 450,
	//             y: 120,
	//             zIndex: 26},

	//         3: {title: 'testing3',
	//             text: 'I is a note3',
	//             x: 500,
	//             y: 220,
	//             zIndex: 26}
	//     };

	const [notes, setNotes] = React.useState({});
	// const [IDofCurrentlyEditedNote, setIDofCurrentlyEditedNote] = React.useState();

	useEffect(() => {
		DB.onNotesValueChange(notes => {
			// console.log('useEffect called! notes = ', notes);
			setNotes(notes);
		});
		// return setNotes();
	}, []
	); //empty dependency array means this useEffect only runs once, when the component first mounts


	function deleteNote(id){

		DB.deleteNote(id);

		// setNotes(
		// 	produce((draft) => {
		// 		// console.log('delete note called for id:', id, 'draft =', draft);
		// 		delete draft[id]; // so your error was previously using draft.id, when you need draft[id]
		// 	})
	}

	function addNote(){
		// const newId = Date.now(); // simple unique id based on timestamp
		DB.create({
			title: 'New Note',
			text: 'This is a new note.',
			x: 100,
			y: 100,
			zIndex: 1,
			beingEdited: false
		});
	}

	function editNote(id, updatedFields) {
		// console.log('editNote called for id:', id, 'with fields:', updatedFields);
		DB.update(id, updatedFields);
		// setNotes(
		// 	produce((draft) => {
		// 		if (draft[id]) {
		// 			draft[id] = { ...draft[id], ...updatedFields };
		// 		}
		// 		else {
		// 			// console.log(`Note with id ${id} not found. How the fuck did you even do this.`);
		// 		}
		// 	})
		// );
	}

	// function beginEditingNote(IDofNoteWithEditAttempt) {
	// 	// console.log('entering edit mode! IDofCurrentlyEditedNote =', IDofCurrentlyEditedNote, 'updating to:', IDofNoteWithEditAttempt);
	// 	setIDofCurrentlyEditedNote(IDofNoteWithEditAttempt);
	// }

	function renderNotes() {
		if (notes) {
			return(
				<div id="notes-list" className="notes-list">
					{Object.entries(notes).map(([id, note]) => (
						<Note
							key={id}
							id={id}
							title={note.title}
							text={note.text}
							x={note.x}
							y={note.y}
							zIndex={note.zIndex}
							beingEdited={note.beingEdited}
							deleteNote={() => deleteNote(id)}
							editNote={(updatedFields) => editNote(id, updatedFields)}
						/>
					))}
				</div>
			);
		}
	}
    
	return(
		<div id="react-notes-app" className="react-notes-app">
			<NewNoteButton addNote={addNote}/>
			{renderNotes()}
		</div>
	);
} 

export default reactNotesApp;