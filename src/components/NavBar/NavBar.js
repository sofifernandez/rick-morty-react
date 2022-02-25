import "./NavBar.scss"
import "./../../font/stylesheet.css"
// import { NavLink } from "react-router-dom";


export const NavBar = () => {
    return (
        <header className="header mb-5">
            <div className="heroline"></div>
            <h1 className="animate__animated animate__swing">Rick and Morty</h1>
            <div className="header-category">
                <a href="#ui-kits" className="header-links">
                    <div className="header-category-tag">
                        characters
                    </div>
                    <div className="header-tag-circle yellow">
                    </div>
                </a>
            </div>
            <div className="header-category">
                <a href="#ui-kits" className="header-links">
                    <div className="header-category-tag">
                        episodes
                    </div>
                    <div className="header-tag-circle skyblue">
                    </div>
                </a>
            </div>
            <div className="header-category">
                <a href="#ui-kits" className="header-links">
                    <div className="header-category-tag">
                        locations
                    </div>
                    <div className="header-tag-circle red">
                    </div>
                </a>
            </div>
        </header>

    )
}