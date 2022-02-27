import { NavLink } from "react-router-dom";
import './CharacterList.scss'

export const CharacterList = ({ character }) => {
    return (

        <div className="row justify-content-center col-12 col-sm-6 col-lg-3 mb-5 characterDiv">
            <img className="img-top img-fluid" src={character.image} alt="S" />
            {/* DESKTOP */}
            <div className="overlay fs-4 px-0 text-center d-none d-md-block">
                <NavLink to={`/character/${character.id}`}>
                    <p className='centered'>{character.name}</p>
                </NavLink>
            </div>
            {/* MOBILE */}
            <div className="card-body-mobile col-11 d-block d-md-none">
                <p className="card-text nombreProducto fs-4 text-center">
                    <NavLink to={`/character/${character.id}`}>
                        <b>{character.name}</b>
                    </NavLink>
                </p>
            </div>
        </div>

    );
}