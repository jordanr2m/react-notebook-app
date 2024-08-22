import Feed from "./Feed"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext.js';

const Home = () => {
  const { searchResults } = useContext(DataContext);

  return (
    <main className="Home">
      {searchResults.length ? (
        <Feed notes={searchResults}/>
      ) : (
        <p className="statusMsg">No notes to display. Create a <Link to="note">new note</Link></p>
      )}
    </main>
  )
}

export default Home
