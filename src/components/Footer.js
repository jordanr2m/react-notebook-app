import { useContext } from 'react';
import DataContext from '../context/DataContext.js';

const Footer = () => {
  const { notes } = useContext(DataContext);

  return (
    <footer className="Footer">
      <p>{notes.length} {notes.length === 1 ? "note" : "notes"}</p>
    </footer>
  )
}

export default Footer
