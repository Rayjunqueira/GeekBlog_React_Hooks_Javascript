import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Singlepost from './pages/Singlepost';
import Animespage from './pages/Animespage';
import Moviespage from './pages/Moviespage';
import Gamespage from './pages/Gamespage';
import Marvelpage from './pages/Marvelpage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/animes' element={<Animespage />} />
      <Route path='/movies' element={<Moviespage />} />
      <Route path='/games' element={<Gamespage />} />
      <Route path='/marvel' element={<Marvelpage />} />
      <Route path='/singlepost/:id' element={<Singlepost />} />
      <Route path='/searchpage/:search' element={<SearchPage />} />
    </Routes>
  );
}

export default App;
