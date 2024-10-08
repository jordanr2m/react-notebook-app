import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext.js';
import { format } from 'date-fns';

const NewNote = () => {
  const { notes, setNotes } = useContext(DataContext);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const navigate = useNavigate();

  // Add a new note
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = (new Date().getTime()).toString(36);
    const datetime = format(new Date(), 'MMMM dd, yyyy - p');
    const newNote = { id, title: noteTitle, datetime, body: noteBody };
    const allNotes = [...notes, newNote];
    setNotes(allNotes);
    // Set inputs back to empty after we submit new post
    setNoteTitle('');
    setNoteBody('');
    navigate('/');
  }

  return (
    <main className="NewNote">
      <h2>New Note</h2>
      <form className='newNoteForm' onSubmit={handleSubmit}>
        <label htmlFor='noteTitle'>Title</label>
        <input
          autoFocus
          id='noteTitle'
          type='text'
          required
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <label htmlFor='noteBody'>Content</label>
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
