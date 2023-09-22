import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { Link } from "react-router-dom";

export default function UsersList() {
   const [users, setUsers] = useState([]);
   const [openedUsers, setOpenedUsers] = useState([]);

   function onChooseUser(user) {
      const foundUser = openedUsers.find((_user) => _user.id === user.id);
      if (foundUser) {
         setOpenedUsers(openedUsers.filter((_user) => _user.id !== foundUser.id));
      } else {
         setOpenedUsers([...openedUsers, user]);
      }
   }

   useEffect(() => {
      fetchData("https://jsonplaceholder.typicode.com/users").then((result) => {
         setUsers(result);
      });
   }, []);

   return (
      <div>
         {users.map((user) => {
            return (
               <div key={user.id}>
                  <div className="user_item" onClick={() => onChooseUser(user)}>
                     {user.username}
                  </div>
                        <Link to={`/posts?userId=${user.id}`} >Get user posts</Link>
                        <Link to={`/todos?userId=${user.id}`}>Get user todos</Link>

                  {openedUsers.length > 0 && JSON.stringify(openedUsers.find((_user) => _user.id === user.id))}
               </div>
            );
         })}
      </div>
   );
}
