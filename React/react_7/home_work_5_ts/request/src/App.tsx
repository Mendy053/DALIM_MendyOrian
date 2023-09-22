import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </>
  );
}

export default App;
