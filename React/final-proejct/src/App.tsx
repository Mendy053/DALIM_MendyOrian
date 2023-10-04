import { Route, Routes } from "react-router";
import Update from "./components/Update.tsx";
import Trash from "./components/Trash.tsx";
import Todo from "./components/Todo.tsx";
import Home from "./components/Home/Home.tsx";
import Header from "./components/Header.tsx";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update" element={<Update />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </>
  );
};

export default App;
