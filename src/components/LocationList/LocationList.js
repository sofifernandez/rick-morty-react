import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import './LocationList.scss'

export const LocationList = () => {
    const [locations, setLocations] = useState([]);

     useEffect(() => {
        //There's probably an easier and more straight-forward way to do this, bu it works.
         const urlArray = ['https://rickandmortyapi.com/api/location?page=1',
             'https://rickandmortyapi.com/api/location?page=2',
             'https://rickandmortyapi.com/api/location?page=3',
             'https://rickandmortyapi.com/api/location?page=4',
             'https://rickandmortyapi.com/api/location?page=5',
             'https://rickandmortyapi.com/api/location?page=6',
             'https://rickandmortyapi.com/api/location?page=7']
        async function fetchAllLocations() {
            const results = await Promise.all(urlArray.map((url) => fetch(url)
                .then((r) => r.json())));
            let array = results.map(x => x.results)
            const array2 = [].concat(array[0], array[1], array[2], array[3], array[4], array[5], array[6]);
            setLocations(array2.slice(0,20))
        }
        fetchAllLocations()

    }, [])

    

    if (!locations) return null
    return (
        <div className="row container col-12 justify-content-center mx-auto">
                <div className="fs-3 text-center my-auto headerLocations">
                    Locations
                </div>
                <div className="col-12 my-auto heroline"></div>
                <div className="text-center fs-3 locations pt-3">
                    {locations.length ? locations.map((location) => (
                        <NavLink to={`/episode/${location.id}`}><div className="px-4 mb-3 locationEach" id={location.id}>{location.name}</div></NavLink>))
                        : "Loading..."
                    }
                </div> 
        </div>
    )
}