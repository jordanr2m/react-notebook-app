import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [title, setTitle] = useState('Notebook App');
    const [search, setSearch] = useState('');
    const [notes, setNotes] = useState([]);

  return (
    <DataContext.Provider value={{
        title, setTitle, search, setSearch, 
        notes, setNotes
    }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext
