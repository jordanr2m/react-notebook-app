import { useContext } from 'react';
import DataContext from '../context/DataContext.js';
import { format } from 'date-fns';

const Footer = () => {
  const { notes } = useContext(DataContext);
  const datetime = format(new Date(), 'MMMM dd, yyyy');

  return (
    <footer className="Footer">
      <p>{datetime}</p>
      <p><b>{notes.length}</b> {notes.length === 1 ? "Note" : "Notes"}</p>
    </footer>
  )
}

export default Footer
