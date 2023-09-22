import { Route, Routes } from "react-router";
import Home from './components/Home.tsx';
import Update from "./components/Update.tsx";
import Trash from "./components/Trash.tsx";
import Todo from "./components/Todo.tsx";
import {  } from "react-redux";

const App = () => {
  
  return (
    <>
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
