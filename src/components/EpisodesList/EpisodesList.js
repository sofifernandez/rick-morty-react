import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './EpisodesList.scss'


export const EpisodesList = () => {
    const [episodes, setEpisodes] = useState([]);


    useEffect(() => {
        //There's probably an easier and more straoght-forward way to do this, bu it works.
        const urlArray = ['https://rickandmortyapi.com/api/episode?page=1', 'https://rickandmortyapi.com/api/episode?page=2', 'https://rickandmortyapi.com/api/episode?page=3']
        async function fetchAllEpisodes() {
            const results = await Promise.all(urlArray.map((url) => fetch(url)
                .then((r) => r.json())));
            let array = results.map(x => x.results)
            const array2 = [].concat(array[0], array[1], array[2]);
            const season01 = array2.filter(x => x.episode.includes('S01'))
            const season02 = array2.filter(x => x.episode.includes('S02'))
            const season03 = array2.filter(x => x.episode.includes('S03'))
            const season04 = array2.filter(x => x.episode.includes('S04'))
            const season05 = array2.filter(x => x.episode.includes('S05'))
            const final = [[...season01], [...season02], [...season03], [...season04], [...season05]]
            setEpisodes(final)
        }
        fetchAllEpisodes()

    }, [])

    if (!episodes) return null
    return (
        <div className="row container justify-content-center mx-auto">
            {episodes.map((season, index) => (
                <div key={season.index} className="row col-12 col-md-10 justify-content-center mb-5">
                    <div className="fs-3 my-auto headerSeason">
                        Season {index + 1}
                    </div>
                    <div className="col-12 my-auto heroline"></div>
                    <div className="text-center fs-3 episodes pt-3">
                        {season.length ? season.map((episode) => (
                            <NavLink to={`/episode/${episode.id}`} >
                                <div key={episode.id} className="px-4 mb-3 episodeEach" id={episode.id}>
                                    {episode.episode}
                                </div>
                            </NavLink>))
                            : "Loading..."}
                    </div>
                </div>
            ))}
        </div>
    )
}