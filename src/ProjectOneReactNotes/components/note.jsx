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
				<div className='note-content-while-editing' id={`note-content-editing-${props.id}`}>
					<div className='note-title-row' id={`note-title-row-editing-${props.id}`}>
						<div className='note-title-while-editing outlined' id={`note-title-editing-${props.id}`}>
							<input
								type="text"
								className="note-title-input"
								id={`note-title-input-${props.id}`}
								value={props.title}
								onChange={(e) => props.editNote({ title: e.target.value })}
							/>
						</div>
						<div className='note-actions' id={`note-actions-editing-${props.id}`}>
							{renderEditButton()}
							{renderDeleteButton()}
						</div>
					</div>
					<div className='note-textarea-while-editing outlined' id={`note-textarea-editing-${props.id}`}>
						<textarea
							className="note-textarea-input"
							id={`note-textarea-input-${props.id}`}
							value={props.text}
							onChange={(e) => props.editNote({ text: e.target.value })}
						/>
					</div>
				</div>
			);
		} else {
			return(
				<div className='note-content-while-not-editing' id={`note-content-not-editing-${props.id}`}>
					<div className='note-title-row' id={`note-title-row-not-editing-${props.id}`}>
						<div className='note-title outlined' id={`note-title-not-editing-${props.id}`}>
							<ReactMarkdown>{props.title || ''}</ReactMarkdown>
						</div>
						<div className='note-actions' id={`note-actions-not-editing-${props.id}`}>
							{renderEditButton()}
							{renderDeleteButton()}
						</div>
					</div>
					<div className='note-text outlined' id={`note-text-not-editing-${props.id}`}>
						<ReactMarkdown>{props.text || ''}</ReactMarkdown>
					</div>
				</div>
			);
		}
	};

	return (
		<div id={`${props.id}`}>
			<Draggable
				nodeRef={nodeRef}
				position={{x: props.x, y: props.y}}
				handle='.drag-me'
				onDrag={(e, data) => {
					props.editNote({ x: data.x, y: data.y });
				}}
			>
				<div className='drag-me note-draggable' ref={nodeRef}>
					{renderNoteContent()}
				</div>
			</Draggable>
		</div>
	);
};

export default Note;