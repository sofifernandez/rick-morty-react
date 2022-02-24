import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CharacterList } from '../CharacterList/CharacterList'
import './LocationCard.scss'

export const LocationCard = () => {
    const { locationId } = useParams();
    const [location, setLocation] = useState();
    const [residentsURL, setResidentsURL] = useState([]);
    const [residentsList, setResidentsList] = useState();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location/${locationId}`)
            .then(res => res.json()
                .then(data => setLocation(data)))
    }, [locationId])

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location/${locationId}`)
            .then(res => res.json()
                .then(data => setResidentsURL(data.residents)))
    }, [locationId])


    useEffect(() => {
        async function fetchAll() {
            const results = await Promise.all(residentsURL.map((url) => fetch(url).then((r) => r.json())));
            setResidentsList(results)
        }
        fetchAll()
    }, [residentsURL])

    
    if (!location) return null;
    return (
        <div className="row container-fluid mx-0 justify-content-center">
            {/* LOCATION CARD */}
            <div className="row col-12 col-md-8 col-xl-8 fs-1 pb-3 mb-5 locationCard">
                <p className='text-center'>{location.name}</p>
                <div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-sm-6 ms-sm-auto text-center propertyType'>type:</div>
                        <div className='col-12 col-sm-6 ms-sm-auto fs-3 text-center text-sm-start propertyValue'>{location.type}</div>
                    </div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-sm-6 ms-sm-auto text-center propertyDimension'>dimension:</div>
                        <div className='col-12 col-sm-6 ms-sm-auto fs-3 text-center text-sm-start propertyValue '>{location.dimension}</div>
                    </div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-sm-6 ms-sm-auto text-center propertyResidents'>residents:</div>
                        <div className='col-12 col-sm-6 ms-sm-auto fs-3 text-center text-sm-start propertyValue'>{location.residents.length}</div>
                    </div>
                </div>
            </div>
            {/* RESIDENTS */}
            <div className='text-center fw-bold col-12 fs-1'>
                RESIDENTS
            </div>
            <div className="pt-4 mt-4 mb-md-5 mx-0 container-fluid row justify-content-center justify-self-center col-10">
                {residentsList.length ? residentsList.map((character) => (<CharacterList character={character} key={character.id} />))
                    : "Loading..."
                }
            </div>
        </div>
    )
}