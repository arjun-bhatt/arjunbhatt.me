import React, {useRef} from 'react';
import Draggable from 'react-draggable';
import ReactMarkdown from 'react-markdown';


const Note = (props) => {
	// console.log('Note component props:', props);

	const nodeRef = useRef(null);

	const renderDeleteButton = () => (
		<button className="icon-btn" onClick={props.deleteNote} title="Delete">
			<span role="img" aria-label="delete">🗑️</span>
		</button>
	);

	const renderEditButton = () => (
		<button className="icon-btn" onClick={() => props.editNote({ beingEdited: !props.beingEdited })} title={props.beingEdited ? 'Save' : 'Edit'}>
			{props.beingEdited ? <span role="img" aria-label="save">💾</span> : <span role="img" aria-label="edit">✏️</span>}
		</button>
	);
    
	const renderNoteContent = () => {
		if (props.beingEdited) {
			return(
				<div className='note-content-while-editing'>
					<div className='note-title-row'>
						<div className='note-title-while-editing outlined'>
							<input
								type="text"
								value={props.title}
								onChange={(e) => props.editNote({ title: e.target.value })}
							/>
						</div>
						<div className='note-actions'>
							{renderEditButton()}
							{renderDeleteButton()}
						</div>
					</div>
					<div className='note-textarea-while-editing outlined'>
						<textarea
							value={props.text}
							onChange={(e) => props.editNote({ text: e.target.value })}
						/>
					</div>
				</div>
			);
		} else {
			return(
				<div className='note-content-while-not-editing'>
					<div className='note-title-row'>
						<div className='note-title outlined'>
							<ReactMarkdown>{props.title || ''}</ReactMarkdown>
						</div>
						<div className='note-actions'>
							{renderEditButton()}
							{renderDeleteButton()}
						</div>
					</div>
					<div className='note-text outlined'>
						<ReactMarkdown>{props.text || ''}</ReactMarkdown>
					</div>
				</div>
			);
		}
	};

	return (
		<div className="note">
			<Draggable
				nodeRef={nodeRef}
				position={{x: props.x, y: props.y}}
				handle='.drag-me'
				onDrag={(e, data) => {
					props.editNote({ x: data.x, y: data.y });
				}}
			>
				<div className='drag-me' ref={nodeRef}>
					{renderNoteContent()}
				</div>
			</Draggable>
			<br></br>
		</div>
	);
};

export default Note;