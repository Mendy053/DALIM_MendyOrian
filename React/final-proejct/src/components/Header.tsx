import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div className="header">
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/update">TODO</NavLink></li>
                <li><NavLink to="/trash">🗑</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;