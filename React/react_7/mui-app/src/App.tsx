import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Favorite from './components/Favorite';
import { UrlsProvider } from './contexts/Urls';

function App() {
  return (
    <>
      <Nav />
      <UrlsProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Favorite' element={<Favorite />} />
        </Routes>
      </UrlsProvider>
    </>
  );
}

export default App;
