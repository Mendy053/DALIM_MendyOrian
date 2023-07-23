import { useState, useEffect } from "react";
import Users from "./components/Users";
import Todos from "./components/Todos";
import Posts from "./components/Posts";

export default function AppFetch() {
   const [array, setArray] = useState([]);
   const [choose, setChoose] = useState();

   function onButtonClick(type) {
      setChoose(type);
      fetch(`https://jsonplaceholder.typicode.com/${type}`, {
         method: "GET",
      })
         .then((response) => response.json())
         .then((result) => {
            console.log(result);
            setArray(result);
         });
   }

   return (
      <div>
         <button id="get-users" onClick={() => onButtonClick("users")}>Get Users</button>
         <button id="get-todos" onClick={() => onButtonClick("todos")}> Get Todos</button>
         <button id="get-posts" onClick={() => onButtonClick("posts")}> Get Posts</button>
         {(
            choose === "users" ?
               <Users users={array} /> :
               choose === "todos" ?
                  <Todos todos={array} /> :
                  choose === "posts" ?
                     <Posts posts={array} /> :
                     <></>)}
      </div>
   );
}
