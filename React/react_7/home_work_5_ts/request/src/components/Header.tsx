import { NavLink } from "react-router-dom";

export default function Header() {
   return (
      <header>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/favorite">Favorite</NavLink>
            </li>
         </ul>
      </header>
   );
}
