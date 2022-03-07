import "./NavBar.scss"
import "./../../font/stylesheet.css"
import { NavLink } from "react-router-dom";


export const NavBar = () => {
    return (
        <header className="header mb-5">
            <div className="heroline"></div>
            <NavLink to={'/'}><h1 className="animate__animated animate__swing headerTitle">Rick and Morty</h1></NavLink>
            <div className="header-category">
                <NavLink to={'/character'} className={({ isActive }) => (isActive ? "activated-link" : "header-links")}>
                    <div className="header-category-tag">
                       characters
                    </div>
                    <div className="header-tag-circle yellow">
                    </div>
                </NavLink>
            </div>
            <div className="header-category">
                <NavLink to={'/episode'} className={({ isActive }) => (isActive ? "activated-link" : "header-links")}>
                    <div className="header-category-tag">
                        episodes
                    </div>
                    <div className="header-tag-circle skyblue">
                    </div>
                </NavLink>
            </div>
            <div className="header-category">
                <NavLink to={'/location'} className={({ isActive }) => (isActive ? "activated-link" : "header-links")}>
                    <div className="header-category-tag">
                        locations
                    </div>
                    <div className="header-tag-circle red">
                    </div>
                </NavLink>
            </div>
        </header>

    )
}