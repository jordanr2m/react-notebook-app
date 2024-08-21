import Feed from "./Feed"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext.js';

const Home = () => {
  const { notes } = useContext(DataContext);

  return (
    <main className="Home">
      {notes.length ? (
        <Feed />
      ) : (
        <p style={{marginTop: '0.25rem'}}>No notes to display. Create a <Link to="note">new note</Link></p>
      )}
    </main>
  )
}

export default Home
