import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext.js';

const NotePage = () => {
  const { notes, setNotes } = useContext(DataContext);
  const { id } = useParams(); // Grab note's id
  const note = notes.find(note => note.id === id); // Define the note we are displaying
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const newNotesList = notes.filter(note => note.id !== id);
    setNotes(newNotesList);
    navigate('/');
  }

  return (
    <main className="NotePage">
      <article className='note'>
        {note &&
          <>
            <h2>{note.title}</h2>
            <p className='noteDate'>{note.datetime}</p>
            <p className='noteBody'>{note.body}</p>
            <Link to={`../../edit/${note.id}`}>
              <button className="editButton">Edit Note</button>
            </Link>
            <button className='deleteButton' 
              onClick={() => handleDelete(note.id)}>Delete Note</button>
          </>
        }
        {/* Show this if note not found */}
        {!note && 
          <>
            <h2>Note Not Found</h2>
            <p>Well, that's disappointing</p>
            <p><Link to="/">Visit the Homepage</Link></p>
          </>
        }
      </article>
    </main>
  )
}

export default NotePage
