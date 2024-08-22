import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext.js';
import { format } from 'date-fns';

const NewNote = () => {
  const { notes, setNotes } = useContext(DataContext);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

  // Add a new note
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = (new Date().getTime()).toString(36);
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newNote = { id, title: noteTitle, datetime, body: noteBody };
  }

  return (
    <main className="NewNote">
      <h2>New Note</h2>
      <form className='newNoteForm' onSubmit={handleSubmit}>
        <label htmlFor='noteTitle'>Title</label>
        <input
          id='noteTitle'
          type='text'
          required
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <label htmlFor='noteBody'>Body</label>
        <textarea
          id='noteBody'
          required
          value={noteBody}
          onChange={(e) => setNoteBody(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default NewNote
