import "./NavBar.scss"
import "./../../font/stylesheet.css"
// import { NavLink } from "react-router-dom";
// import { CartWidget } from "../CartWidget/CartWidget"
// import logo from '../../images/logo.svg'


export const NavBar = () => {
    return (
        <header className="header">
            <div className="heroline"></div>
            <h1 className="animate__animated animate__swing">Rick and Morty</h1>
            <div className="header-category">
                <a href="#ui-kits" className="header-links">
                    <div className="header-category-tag">
                        Characters
                    </div>
                    <div className="header-tag-circle yellow">
                    </div>
                </a>
            </div>
            <div className="header-category">
                <a href="#ui-kits" className="header-links">
                    <div className="header-category-tag">
                        Episodes
                    </div>
                    <div className="header-tag-circle skyblue">
                    </div>
                </a>
            </div>
            <div className="header-category">
                <a href="#ui-kits" className="header-links">
                    <div className="header-category-tag">
                        Locations
                    </div>
                    <div className="header-tag-circle red">
                    </div>
                </a>
            </div>
        </header>

    )
}