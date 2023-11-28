import { Route, Routes } from "react-router";
import Update from "./components/Update.tsx";
import { TrashConnected } from "./components/Trash.tsx";
import { TodoConnected } from "./components/Todo.tsx";
import { HomeConnected } from "./components/Home/Home.tsx";
import { HeaderConnected } from "./components/Header.tsx";
import { connect } from "react-redux";
import { RootState } from "./state/index.ts";

interface AppPropsType {
  isDarkMood: boolean
}

const AppComponent: React.FC<AppPropsType> = ({ isDarkMood }) => {
  return (
    <>
        <div id="app-background" className={isDarkMood ? "dark-mood" : ""}>
        </div>
        <div id="app">
          <HeaderConnected />
          <Routes>
            <Route path="/" element={<HomeConnected />} />
            <Route path="/update" element={<Update />} />
            <Route path="/trash" element={<TrashConnected />} />
            <Route path="/todo" element={<TodoConnected />} />
          </Routes>
        </div>
      </>
      );
};

export const App = connect((state: RootState) => ({isDarkMood: state.isDarkMood.isDark }))(AppComponent)
