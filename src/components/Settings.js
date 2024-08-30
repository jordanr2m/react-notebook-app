import { useContext } from 'react';
import DataContext from '../context/DataContext.js';
import ThemeSwitcher from './ThemeSwitcher.js';

const Settings = () => {
  const { title, setTitle } = useContext(DataContext);

  return (
    <main className="Settings">
      <h2>Settings</h2>
      <label htmlFor='notebookTitle'>Notebook Title:</label>
      <input
        id='notebookTitle'
        type='text'
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <h3>Theme Settings</h3>
      <ThemeSwitcher />
    </main>
  )
}

export default Settings
