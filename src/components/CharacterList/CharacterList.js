export const CharacterList = ({ character }) => {
    return (
        <div className="row justify-content-center col-10 col-sm-3 mb-5">
            <img className="card-img-top img-fluid" src={character.image} alt="S" />
            <div className="card-body col-11">
                <p className="card-text nombreProducto">
                    <b>{character.name}</b>
                </p>
            </div>
        </div>
    );
}