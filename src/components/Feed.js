import { useContext } from 'react';
import DataContext from '../context/DataContext.js';
import Note from './Note.js';

const Feed = () => {
    const { notes } = useContext(DataContext);

    return (
        <>
            {notes.map(note => (
                <Note key={note.id} note={note} />
            ))}
        </>
    )
}

export default Feed
