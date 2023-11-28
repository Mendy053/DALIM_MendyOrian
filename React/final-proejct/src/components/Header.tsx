import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../state";
import { changeTODarkMood, changeToLightMood } from "../state/darkmood/Actions/ActionsTypes";
import Time from "./Time";

interface HeaderPropsType {
    isDarkMood: boolean
}

const Header: React.FC<HeaderPropsType> = ({ isDarkMood }) => {
    const dispatch = useDispatch();
    const clickHandler = () => {
        if (isDarkMood) {
            dispatch(changeToLightMood())
        } else {
            dispatch(changeTODarkMood())
        }
    }

    return (
        <>
            <div className="header">
                <ul>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/trash">TRASH</NavLink></li>
                </ul>
                <div><Time/></div>
                <div onClick={clickHandler} id="dark">
                    <span>{isDarkMood ? '☀️' : '🌙'}</span>
                </div>
            </div>
            <div id="header-space"></div>
        </>
    )
}

export const HeaderConnected = connect((state: RootState) => ({ isDarkMood: state.isDarkMood.isDark }))(Header)