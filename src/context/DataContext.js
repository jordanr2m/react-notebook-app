import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [title, setTitle] = useState('Notebook App');

  return (
    <DataContext.Provider value={{
        title, setTitle
    }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext
