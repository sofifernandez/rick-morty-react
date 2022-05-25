import { NavLink } from "react-router-dom";
import './CharacterList.scss'

export const CharacterList = ({ character }) => {
    return (

        <div className="row justify-content-center mx-auto px-0 px-md-1 px-xl-2 col-5 col-xl-3 mb-5 mb-lg-4 characterDiv">
            <img className="img-fluid imagenChar px-0" src={character.image} alt="S" />
            {/* DESKTOP */}
            <div className="overlay fs-5 px-0 text-center d-none d-lg-block ">
                <NavLink to={`/character/${character.id}`}>
                    <p className='centered mobile-text'>{character.name}</p>
                </NavLink>
            </div>
            {/* MOBILE */}
            <div className="col-12 d-block d-lg-none ">
                <p className="fs-6 text-center mobile-text">
                    <NavLink to={`/character/${character.id}`}>
                        <b>{character.name}</b>
                    </NavLink>
                </p>
            </div>
        </div>

    );
}