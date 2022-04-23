import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './EpisodesList.scss'


export const EpisodesList = () => {
    const [episodes, setEpisodes] = useState([]);
    const [search, setSearch] = useState();
    const [error404, setError404] = useState(false)

    //There's probably an easier and more straight-forward way to do this, bu it works.
    useEffect(() => {
        if (!search) {
            async function fetchAllEpisodes() {
                const urlArray = ['https://rickandmortyapi.com/api/episode?page=1', 'https://rickandmortyapi.com/api/episode?page=2', 'https://rickandmortyapi.com/api/episode?page=3']
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
        } else {
            const fetchSomeEpisode = async () => {
                if ((await fetch(URL)).status === 200) {
                    const data = await (await fetch(search)).json();
                    setEpisodes(data.results);
                    setError404(false);
                }
                else if ((await fetch(URL)).status === 404) {
                    setError404(true)
                }
            }
            fetchSomeEpisode()
        }
    }, [search])

    const handleSearch = () => {
        const name = document.querySelector('#searchInput').value
        setSearch('https://rickandmortyapi.com/api/episode/?name=' + name)
    }

    if (!episodes) return null
    return (
        <div className="row container justify-content-center mx-auto">
            {/* ----------------SEARCHBOX---------------------------------------------------------------- */}
            <div className="row justify-content-center mb-5">
                <div className=" col-10 col-sm-8 col-md-7 col-lg-5 searchBox">
                    <input className="col-10" type="text" name="busqueda" id="searchInput" placeholder="Search by episode name" />
                    <button type='submit' className=" btnSearch" onClick={handleSearch}> GO! </button>
                </div>
                {error404 ? <div className="row justify-content-center mt-1">OMG, you are useless. Try again you glip-glop.</div> : null}
            </div>
            {/*------------------------------------------------------------------------------------------*/}

            {!search ?
                episodes.map((season, index) => (
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
                ))
                :
                <div className="text-center fs-3 episodes pt-3">
                    {episodes.length ? episodes.map((episode) => (
                        <NavLink to={`/episode/${episode.id}`} >
                            <div key={episode.id} className="px-4 mb-3 episodeEach" id={episode.id}>
                                {episode.episode}
                            </div>
                        </NavLink>))
                        : "Loading..."}
                </div>
            }
        </div>
    )
}