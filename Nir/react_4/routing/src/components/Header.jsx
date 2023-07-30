import { NavLink } from "react-router-dom";

export default function Header() {
   return (
      <div>
         <nav>
            <ul className="nav_links">
               <li>
                  <NavLink to="/">Home</NavLink>
               </li>
               <li>
                  <NavLink to="/users">Users</NavLink>
               </li>
               <li>
                  <NavLink to="/posts">Posts</NavLink>
               </li>
               <li>
                  <NavLink to="/todos">Todos</NavLink>
               </li>
            </ul>
         </nav>
      </div>
   );
}
