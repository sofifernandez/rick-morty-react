import blackwhiteimg from "../../images/bitmap.png"
import './Home.scss'

export const Home = () => {

    return (
        <>
            <div className="row mx-0 justify-content-center container-fluid" id='home-body'>
                <div className="col-10 col-md-4 mb-4 ms-lg-4">
                    <img className='img-fluid' id="cartel" src={blackwhiteimg} alt="BW" />
                </div>
                <div className="justify-content-center col-12 col-sm-8 col-md-5 ms-3 my-5">
                    {/* CHARACTERS */}
                    <div className="row">
                        <div className="col-8 fs-1 mb-2 text-center title-backcolor_1 animate__animated animate__zoomIn">
                            characters:
                        </div>
                        <div className="col-4 text-center align-middle fs-1">826</div>
                    </div>
                    {/* EPISODES */}
                    <div className="row">
                        <div className="col-8 fs-1 mb-2 text-center title-backcolor_2 animate__animated animate__zoomIn animate__delay-1s">
                            episodes:
                        </div>
                        <div className="col-4 text-center align-middle fs-1">51</div>
                    </div>
                    {/* LOCATIONS */}
                    <div className="row">
                        <div className="col-8 fs-1 mb-2 text-center  title-backcolor_3 animate__animated animate__zoomIn animate__delay-2s">
                            locations:
                        </div>
                        <div className="col-4 text-center align-middle fs-1">126</div>
                    </div>
                </div>  
            </div>
            {/* -------------------------------------------------------------------------- */
            /*                               DANCING QUOTES                               */
            /* --------------------------------------------------------------------------  */}
            <div className="mx-0 mt-2 mb-5">
                <div className="slider -fast">
                    <div className="quotes">
                        <p >"Wabba lubba dub dub!"</p>
                        <p >"Riggity Riggity Wrecked Son!"</p>
                        <p>"And that’s the waaaay it goes"</p>
                        <p >"If I die in a cage, I lose a bet"</p>
                        <p >"What up, my glip-glops?"</p>
                        <p>"Sometimes science is a lot more art than science"</p>
                        <p >"Nine more seasons until I get that dipping Szechuan sauce"</p>
                        <p >"I’m not looking for judgement, just a yes or no. Can you assimilate a giraffe?"</p>
                        <p>"Weddings are basically funerals with a cake"</p>
                        <p >"Wait a minute! Is that Mountain Dew in my quantum-transport-solution?"</p>
                        <p >"Oh, boy, so you actually learned something today? What is this, Full House?"</p>
                        <p>"There’s a lesson here and I’m not going to be the one to figure it out"</p>
                        <p >"Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV."</p>
                        <p >"B*tch, my generation gets traumatized for breakfast!"</p>
                    </div>
                </div>
            </div>
        </>
    )
}