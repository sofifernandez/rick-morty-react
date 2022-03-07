import { NavLink } from "react-router-dom";
import './CharacterList.scss'

export const CharacterList = ({ character }) => {
    return (

        <div className="row justify-content-center col-10 col-sm-5 col-md-5 col-lg-3 col-xl-2 mb-5 mb-lg-4 characterDiv">
            <img className="img-fluid imagenChar px-0" src={character.image} alt="S" />
            {/* DESKTOP */}
            <div className="overlay fs-4 px-0 text-center d-none d-lg-block">
                <NavLink to={`/character/${character.id}`}>
                    <p className='centered'>{character.name}</p>
                </NavLink>
            </div>
            {/* MOBILE */}
            <div className="col-12 d-block d-lg-none">
                <p className="fs-5 text-center">
                    <NavLink to={`/character/${character.id}`}>
                        <b>{character.name}</b>
                    </NavLink>
                </p>
            </div>
        </div>

    );
}