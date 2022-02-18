import './CharacterCard.scss'
import { useEffect, useState } from "react";

export const CharacterCard = () => {
    const [card, setCards] = useState();

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/2')
            .then(res => res.json()
                .then(data => setCards(data)))
    }, [])


    if (!card) return null;

    return (
        <div className='d-flex row container-fluid justify-content-evenly mx-0 mb-5 my-md-auto'>
            {/* -------------------------------------------------------------------------- */
            /*                                    CARD                                    */
            /* -------------------------------------------------------------------------- */}
            <div className='mainCard col-11 col-md-6 col-lg-5 justify-content-center row mb-5'>
                <img className='rounded mx-auto d-block mt-3 col-10 px-0 imagen' src={card.image} alt="" />
                <div className='text-center cardName fs-2 col-12 my-3'>
                    {card.name}
                </div>
                {/* CARD SPECIES */}
                <div className='species col-12 row justify-content-evenly mb-3'>
                    <div className='col-7 propertyTitle row'>
                        <div className='col-6 speciesTitleCircle my-auto'>
                        </div>
                        <div className='col-6 fs-3 my-auto'>
                            Species
                        </div>
                    </div>
                    <div className='col-4 fs-3'>
                        {card.species}
                    </div>
                </div>
                {/* CARD STATUS */}
                <div className='status col-12 row justify-content-evenly mb-3'>
                    <div className='col-7 propertyTitle row'>
                        <div className='col-6 statusTitleCircle my-auto'>
                        </div>
                        <div className='col-6 fs-3 my-auto'>
                            Status
                        </div>
                    </div>
                    <div className='col-4 fs-3'>
                        {card.status}
                    </div>
                </div>
                {/* CARD ORIGIN */}
                <div className='species col-12 row justify-content-evenly mb-3'>
                    <div className='col-7 propertyTitle row'>
                        <div className='col-6 originTitleCircle my-auto'>
                        </div>
                        <div className='col-6 fs-3 my-auto'>
                            Origin
                        </div>
                    </div>
                    <div className='col-4 fs-3'>
                        {card.origin.name}
                    </div>
                </div>
            </div>

            {/* -------------------------------------------------------------------------- */
            /*                                  MORE INFO                                 */
            /* -------------------------------------------------------------------------- */}
            <div className='moreInfo col-9 col-md-5 col-lg-3 my-auto text-center justify-content-center'>
                <div className='more text-center mx-auto fs-1'>
                    MORE
                </div>
                <div className='info text-center mx-auto fs-1 mb-4'>
                    INFO:
                </div>

                <div className='moreInfoText row py-4'>
                    {/* MORE INFO -LOCATION */}
                    <div className='row mx-auto justify-content-start'>
                        <div className='col-3 moreInfoTitleCircle my-auto'>
                        </div>
                        <div className='col-8 fs-4 my-auto moreInfoTitle'>
                            Last known location:
                        </div>
                    </div>
                    <div className='fs-4 mb-4'>
                        {card.location.name}
                    </div>
                    {/* MORE INFO -EPISODES */}
                    <div className='row mx-auto justify-content-start'>
                        <div className='col-3 moreInfoTitleCircle my-auto'>
                        </div>
                        <div className='col-8 fs-4 my-auto moreInfoTitle'>
                            Episodes:
                        </div>
                    </div>
                    <div className='fs-4 mb-2'>
                        {card.episode.length}
                    </div>
                </div>
            </div>
        </div>
    )
}