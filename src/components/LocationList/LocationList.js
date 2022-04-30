import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './LocationList.scss'

export const LocationList = () => {
    const [URL, setURL] = useState('https://rickandmortyapi.com/api/location?page=1')
    const [locations, setLocations] = useState([]);
    const [nextPage, setNextPage] = useState()
    const [prevPage, setPrevPage] = useState()
    const [error404, setError404] = useState(false)


    useEffect(() => {
        const fetchAllLocations = async () => {
            if ((await fetch(URL)).status === 200) {
                const data = await (await fetch(URL)).json();
                setLocations(data.results);
                setNextPage(data.info.next);
                setPrevPage(data.info.prev);
                setError404(false);
            }
            else if ((await fetch(URL)).status === 404) {
                setError404(true)
            }
        }
        fetchAllLocations()
    }, [URL])

    const toPrevPage = () => {
        if (prevPage !== null) {
            setURL(prevPage)
        }
    }

    const toNextPage = () => {
        if (nextPage !== null) {
            setURL(nextPage)
        }
    }

    const handleSearch = () => {
        const name = document.querySelector('#searchInput').value
        setURL('https://rickandmortyapi.com/api/location/?name=' + name)
    }

    if (!locations) return null
    return (
        <div className="row container justify-content-center mx-auto">
            <div className="fs-3 text-center my-auto headerLocations">
                Locations
            </div>
            {/* ----------------SEARCHBOX---------------------------------------------------------------- */}
            <div className="row justify-content-center  my-auto">
                <div className=" col-12 col-sm-8 col-md-7 col-lg-5 searchBox">
                    <input className="col-10" type="text" name="busqueda" id="searchInput" placeholder="Search locations" />
                    <button type='submit' className=" btnSearch" onClick={handleSearch}> GO! </button>
                </div>
                {error404 ? <div className="row justify-content-center mt-1">OMG, you are useless. Try again you glip-glop.</div> : null}
            </div>
            {/*------------------------------------------------------------------------------------------*/}

            <div className="col-12 mt-3 heroline"></div>
            <div className="text-center fs-3 locations pt-3">
                {locations.length ? locations.map((location) => (
                    <NavLink key={location.id} to={`/location/${location.id}`}>
                        <div className="px-4 mb-3 locationEach fs-4" id={location.id}>
                            {location.name}
                        </div>
                    </NavLink>))
                    : "Loading..."
                }
            </div>
            <div className='row justify-content-center'>
                <div className='d-flex justify-content-between mb-2'>
                    <div className='px-3 controlersOnLocation' onClick={toPrevPage}>Prev</div>
                    <div className='px-3 controlersOnLocation' onClick={toNextPage}>Next</div>
                </div>
            </div>
        </div>
    )
}