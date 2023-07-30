import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Todos from "./pages/Todos";

function App() {
   return (
      <>
         <Header />

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/posts/:postId" element={<Post />} />
            <Route path="/posts/user-posts/:userId" element={<Posts />} />
            <Route path="/posts/user-todos/:userId" element={<Todos />} />

            <Route path="*" element={<div>Not found 404</div>} />
         </Routes>
      </>
   );
}

export default App;
