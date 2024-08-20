import Layout from './Layout.js';
import Home from './components/Home.js';
import NewPost from './components/NewPost.js';
import PostPage from './components/PostPage.js';
import About from './components/About.js';
import Missing from './components/Missing.js';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
      
        <Route index element={<Home />} />

        <Route path="post">
          <Route index element={<NewPost />} />
          <Route path=":id" element={PostPage} />
        </Route>

        <Route path="about" element={<About />} />

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
