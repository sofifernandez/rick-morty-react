import './CharacterList.scss'
export const CharacterList = ({ character }) => {
    return (
        <div className="row justify-content-center col-6 col-lg-4 mb-5 characterDiv">
            <img className="img-top img-fluid" src={character.image} alt="S" />
            <div className="overlay fs-2 px-0 text-center d-none d-md-block">
                <p className='centered'>{character.name}</p>
            </div>
            {/* MOBILE */}
            <div className="card-body-mobile col-11 d-block d-md-none">
                <p className="card-text nombreProducto fs-3 text-center">
                    <b>{character.name}</b>
                </p>
            </div>
        </div>
    );
}