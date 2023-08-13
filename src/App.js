import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/home/Home';
import Posts from './pages/post/Post';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='post' element={<Posts />}/>
        <Route path='gallery' element={<Gallery />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
