import React from "react";

function NavLink(props) {
   return (
      <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="#">
            {props.navText}
         </a>
      </li>
   );
}

export default function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
         <div className="container-fluid">
            <a className="navbar-brand" href="#">
               Offcanvas navbar
            </a>
            <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <NavLink navText="Dashboard" />
                  <NavLink navText="Contact" />
                  <NavLink navText="About" />
               </ul>
               <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">
                     Search
                  </button>
               </form>
            </div>
         </div>
      </nav>
   );
}
