import Layout from './Layout.js';
import Home from './components/Home.js';
import NewNote from './components/NewNote.js';
import NotePage from './components/NotePage.js';
import About from './components/About.js';
import Missing from './components/Missing.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { DataProvider } from './context/DataContext.js';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="note">
            <Route index element={<NewNote />} />
            <Route path=":id" element={<NotePage />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
