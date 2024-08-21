import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext.js';

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <nav className='Nav'>
      {/* Form for nav search bar */}
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search notes</label>
        <input
          id='search'
          type='text'
          placeholder='Search notes'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {/* Nav Links */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="note">New Note</Link></li>
        <li><Link to="about">Settings</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
