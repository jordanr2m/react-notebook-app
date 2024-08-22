import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [title, setTitle] = useState('Notebook App');
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [notes, setNotes] = useState([
        {
            id: "lz7e4199",
            title: "My First Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
          },
          {
            id: "lz7e4q2l",
            title: "My 2nd Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
          },
          {
            id: "lz7e5f8w",
            title: "My 3rd Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
          },
          {
            id: "lzabsfse",
            title: "My Fourth Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
          }
    ]);

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
