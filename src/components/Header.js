import { SlNotebook } from "react-icons/sl";
import { useContext } from 'react';
import DataContext from '../context/DataContext.js';

const Header = () => {
  const { title } = useContext(DataContext);

  return (
    <header className='Header'>
      <h1>{title}</h1>
      {<SlNotebook />}
    </header>
  )
}

export default Header
