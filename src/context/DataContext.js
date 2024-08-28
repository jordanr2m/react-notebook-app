import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [title, setTitle] = useState('Notebook App');
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('noteslist')) || []);

    // Add notes to localStorage
    useEffect(() => {
        localStorage.setItem('noteslist', JSON.stringify(notes));
    }, [notes]);

    // Search Bar
    useEffect(() => {
        const filteredNotes = notes.filter(note =>
            ((note.title).toLowerCase()).includes(search.toLowerCase())
            || ((note.body).toLowerCase()).includes(search.toLowerCase()));
        setSearchResults(filteredNotes.reverse());
    }, [notes, search]);

  return (
    <DataContext.Provider value={{
        title, setTitle, search, setSearch, 
        notes, setNotes, searchResults
    }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext
