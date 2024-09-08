import { useEffect, useContext, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import DataContext from '../context/DataContext.js';
import { format } from 'date-fns';

const EditNote = () => {
    const { notes, setNotes } = useContext(DataContext);
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const navigate = useNavigate();
    // Grab the note to edit
    const { id } = useParams();
    const note = notes.find(note => note.id === id);

    useEffect(() => {
        if (note) {
            setEditTitle(note.title);
            setEditBody(note.body);
        }
    }, [note, setEditTitle, setEditBody]);

    const handleEdit = (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedNote = { id, title: editTitle, datetime, body: editBody };
        setNotes(notes.map(note => note.id === id ? updatedNote : note));
        setEditTitle('');
        setEditBody('');
        navigate('/');
    }

    return (
        <main className='NewNote'>
            {note &&
                <>
                    <h2>Edit Note</h2>
                    <form className='newNoteForm'>
                        <label htmlFor='noteTitle'>Title</label>
                        <input
                            id='noteTitle'
                            type='text'
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor='noteBody'>Content</label>
                        <textarea
                            id='noteBody'
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button type='button' onClick={() => handleEdit(note.id)}>Update</button>
                    </form>
                </>
            }
            {!note &&
                <>
                    <h2>Note Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Visit the Homepage</Link>
                    </p>
                </>
            }
        </main>
    )
}

export default EditNote
