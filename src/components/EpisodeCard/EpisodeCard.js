import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterList } from '../CharacterList/CharacterList'
import './EpisodeCard.scss'

export const EpisodeCard = () => {
    const { episodeId } = useParams();
    const [episode, setEpisode] = useState();
    const [charactersURL, setCharactersURL] = useState([]);
    const [charactersList, setCharactersList] = useState();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
            .then(res => res.json()
                .then(data => setEpisode(data)))
    }, [episodeId])

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
            .then(res => res.json()
                .then(data => setCharactersURL(data.characters)))
    }, [episodeId])


    useEffect(() => {
        async function fetchAll() {
            const results = await Promise.all(charactersURL.map((url) => fetch(url).then((r) => r.json())));
            setCharactersList(results)
        }
        fetchAll()
    }, [charactersURL])

    if (!episode) return null;

    return (
        <div className='d-flex row container-fluid justify-content-evenly mx-0 mb-5 my-md-auto'>
            {/* -------------------------------------------------------------------------- */
            /*                                    CARD                                    */
            /* -------------------------------------------------------------------------- */}
            <div className='row col-9 col-lg-6 justify-content-center mt-5 mb-5 mainCardEpisode'>
                <div className='text-center episodeName fs-1 col-12 my-3'>
                    {episode.episode}
                </div>
                {/* EPISODE NAME */}
                <div className='species col-12 row justify-content-evenly mb-3'>
                    <div className='col-11 col-md-5 propertyTitleEpisode row'>
                        <div className='col-3 nameTitleCircle my-auto'>
                        </div>
                        <div className='col-9 fw-bold fs-2 my-auto'>
                            Name
                        </div>
                    </div>
                    <div className='col-11 col-md-7 fs-3 text-center'>
                        {episode.name}
                    </div>
                </div>
                {/* EPISODE AIR DATE */}
                <div className='status col-12 row justify-content-evenly mb-3'>
                    <div className='col-11 col-md-5 propertyTitleEpisode row'>
                        <div className='col-3 dateTitleCircle my-auto'>
                        </div>
                        <div className='col-9 fw-bold fs-2 my-auto'>
                            Air date
                        </div>
                    </div>
                    <div className='col-11 col-md-7 fs-3 text-center'>
                        {episode.air_date}
                    </div>
                </div>
                {/* CHARACTERS */}
                <div className='species col-12 row justify-content-evenly mb-3'>
                    <div className='col-11 col-md-5 propertyTitleEpisode row'>
                        <div className='col-3 charactersTitleCircle my-auto'>
                        </div>
                        <div className='col-9 fw-bold fs-2 my-auto'>
                            Characters
                        </div>
                    </div>
                    <div className='col-11 col-md-7 fs-3 text-center'>
                        {episode.characters.length}
                    </div>
                </div>
            </div>
            {/* -------------------------------------------------------------------------- */
            /*                                    CHARACTER LIST                            */
            /* -------------------------------------------------------------------------- */}
            <div className='container-fluid row justify-content-center mt-0 mx-0 px-0 mb-5'>
                <div className="character-section pt-4 mt-4 mb-md-5 mx-0 container-fluid row justify-content-center justify-self-center col-11 col-md-10">
                    <div className='characterTittle fs-1 text-center col-6'>
                        Characters
                    </div>
                    <div className="pt-4 mt-4 mb-md-5 mx-0 container-fluid row justify-content-center justify-self-center col-12">
                        {charactersList.length ? charactersList.map((character) => (<CharacterList character={character} key={character.id} />))
                            : "Loading..."
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}