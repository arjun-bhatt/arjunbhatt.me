import React from 'react';

const NewNoteButton = (props) => {
	return (
		<div className='new-note-button-container'>
			<button className="new-note-button" onClick={props.addNote}>
            New Note
			</button>
		</div>
	);
};

export default NewNoteButton;