import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [title, setTitle] = useState('Notebook App');
    const [search, setSearch] = useState('');

  return (
    <DataContext.Provider value={{
        title, setTitle, search, setSearch
    }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext
