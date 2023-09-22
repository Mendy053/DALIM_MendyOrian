import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Favorite from "./Components/Favorite";
import { NewRequestProvider } from "./contexts/NewRequest";

function App() {
  return (<>
    <  Navbar />

    <main>
      <Routes>

        <Route path="/" element={
          <NewRequestProvider>
            <Home />
          </NewRequestProvider>
        }></Route>

        <Route path="/favorite" element={<Favorite />}></Route>
      </Routes>
    </main>
  </>);
}

export default App;
