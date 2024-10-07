import { createContext, useState, useEffect } from "react";
// Custom hook
import useLocalStorage from "../hooks/useLocalStorage";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [title, setTitle] = useState(JSON.parse(localStorage.getItem('notebooktitle')) || "Notebook App");
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('noteslist')) || []);
    const [hue, setHue] = useLocalStorage('hue.color', '160');
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches; // Check to see their default theme preference
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light' );

    // Add notes to localStorage
    useEffect(() => {
        localStorage.setItem('noteslist', JSON.stringify(notes));
    }, [notes]);

    // Add notebook title to localStorage
    useEffect(() => {
        localStorage.setItem('notebooktitle', JSON.stringify(title));
    }, [title]);

    // Search Bar
    useEffect(() => {
        const filteredNotes = notes.filter(note =>
            ((note.title).toLowerCase()).includes(search.toLowerCase())
            || ((note.body).toLowerCase()).includes(search.toLowerCase()));
        setSearchResults(filteredNotes.reverse());
    }, [notes, search]);

    // Update theme & hue colors
    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme); // adds a color-scheme atr to the html element
    }, [theme]); // Must pass theme as a dependency since we use it in the fn

    useEffect(() => {
        document.documentElement.style.setProperty('--_hue', hue); // Setting custom css variable, --_hue
    }, [hue]);

  return (
    <DataContext.Provider value={{
        title, setTitle, search, setSearch, 
        notes, setNotes, searchResults,
        hue, setHue, theme, setTheme
    }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext
