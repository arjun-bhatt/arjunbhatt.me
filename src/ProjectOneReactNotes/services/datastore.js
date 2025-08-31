import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics';

// ^ we are using compat notation here as the new firebase 9 api is a mess and i kinda hate it
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
	apiKey: 'AIzaSyB7smgpPXqohPkT7anRJ2OV5MT8vLlv9rU',
	authDomain: 'react-notes-79196.firebaseapp.com',
	databaseURL: 'https://react-notes-79196-default-rtdb.firebaseio.com',
	projectId: 'react-notes-79196',
	storageBucket: 'react-notes-79196.firebasestorage.app',
	messagingSenderId: '873746649083',
	appId: '1:873746649083:web:689d653de3a678ba33055e',
	measurementId: 'G-0V2T0ZSPFJ'
};

// Initialize Firebase

export const firebaseApp = firebase.initializeApp(firebaseConfig);


// Export a function that accepts a callback
export function onNotesValueChange(callback) {
	firebase.database().ref('notes').on('value', function(snapshot) {
		const newState = snapshot.val();
		callback(newState); // Call the callback with new notes
	});
}

// firebase.database().ref('notes').on('value', function(snapshot) {
//   const newNoteState = snapshot.val();
//   // console.log(newNoteState, '=newNoteState from firebase');
//   setNotes(newNoteState);
//   // do something with new note state
//   // pass the state to a CALLBACK MAYBE? 
// });

// const analytics = getAnalytics(app);

export function fetch () {
	// console.log(firebaseConfig);

}

export function create (newNote) {
	const newNoteKey = firebase.database().ref().child('notes').push().key;
	// console.log('create called! newNoteKey =', newNoteKey, 'newNote =', newNote);
	return firebase.database().ref(`notes/${  newNoteKey}`).set(newNote, error => {
		if (error) {
			console.error('Error creating note:', error);
		} else {
			// console.log('Note created successfully with ID:', newNoteKey);
		}
	});

}

export function update (id, updatedFields) {
	// console.log('update called for id:', id, 'with fields:', updatedFields);
	return firebase.database().ref(`notes/${ id}`).update(updatedFields), error => { 
		if (error) {
			console.error('Error updating note:', error);
		} else {
			// console.log('Note updated successfully with ID:', id); 
		} 
	};
}


export function deleteNote (id) {
	// console.log('deleteNote called for id:', id);
	return firebase.database().ref(`notes/${  id}`).remove()
		.then(() => {
			// console.log('Note deleted successfully with ID:', id);
		})
		.catch((error) => {
			console.error('Error deleting note:', error);
		});


}