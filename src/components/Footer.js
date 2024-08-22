import { useContext } from 'react';
import DataContext from '../context/DataContext.js';

const Footer = () => {
  const { notes } = useContext(DataContext);

  return (
    <footer className="Footer default-theme">
      <p>{notes.length} {notes.length <= 1 ? "note" : " notes total"}</p>
    </footer>
  )
}

export default Footer
