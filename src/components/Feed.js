import Note from './Note.js';

// Pass searchResults down as notes prop
const Feed = ({ notes }) => {
    return (
        <>
            {notes.map(note => (
                <Note key={note.id} note={note} />
            ))}
        </>
    )
}

export default Feed
