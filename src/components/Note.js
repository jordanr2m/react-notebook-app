import { Link } from "react-router-dom";

// Receives individual note from Feed component
const Note = ({ note }) => {
  return (
    <article className="note">
      <Link to={`note/${note.id}`}>
        <h2>{note.title}</h2>
        <p className="noteDate">{note.datetime}</p>
      </Link>
      {/* Show a snippet of body text */}
      <p className="noteBody">{
        (note.body).length <= 50
          ? note.body
          : `${(note.body).slice(0, 50)}...`
      }</p>
    </article>
  )
}

export default Note
