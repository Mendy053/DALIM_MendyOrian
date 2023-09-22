import './App.css';
import { FavoritesProvider } from './Contexts/Favorites';
import { Route, Routes } from 'react-router';
import Home from './Components/Home';
import Favorites from './Components/Favorites';
import NavBar from './Components/NavBar';
import { NewRequestProvider } from './Contexts/NewRequest';
;

function App() {
  return (
    <>
      <NavBar />

      <FavoritesProvider>
        <NewRequestProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </NewRequestProvider>
      </FavoritesProvider>
    </>
  );
}

export default App;
