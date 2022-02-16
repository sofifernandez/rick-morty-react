import './LocationCard.scss'
import { useEffect, useState } from "react";

export const LocationCard = () => {
    const [location, setLocation] = useState();
    const [residentsURL, setResidentsURL] = useState();
    const [residentsList, setResidentsList] = useState();

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location/8')
            .then(res => res.json()
                .then(console.log(res))
                .then(data => setLocation(data)))
    }, [])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location/8')
            .then(res => res.json()
                .then(data => setResidentsURL(data.residents)))
    }, [])




    Promise.all([fetch('https://rickandmortyapi.com/api/character/8')])
        //.then(res => console.log(res[0]))
        .then(res => res.json())
            .then(dataJSON => setResidentsList({
                dataJSON
            }))



    if (!location) return null;
    return (
        <div className="row justify-content-center">
            <div className="row col-10 col-md-8 col-lg-7 col-xl-6 fs-1 locationCard pb-4">
                <p className='text-center'>{location.name}</p>
                <div>
                    <div className='row justify-content-center'>
                        <div className='col-6 propertyType text-center ms-auto'>type:</div>
                        <div className='col-6 fs-3 propertyValue ms-auto'>{location.type}</div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-6 propertyDimension text-center ms-auto'>dimension:</div>
                        <div className='col-6 fs-3 propertyValue ms-auto'>{location.dimension}</div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-6 propertyResidents text-center ms-auto'>residents:</div>
                        <div className='col-6 fs-3 propertyValue ms-auto'>{location.residents.length}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}