import './CharacterListContainer.scss'
import { useEffect, useState } from "react";
import { CharacterList } from '../CharacterList/CharacterList'

export const CharacterListContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [URLPage, setURLpage] = useState(1);
  const [search, setSearch] = useState()
  const [showMe, setShowMe] = useState(false)

  //https://rickandmortyapi.com/api/character/?name=rick
  useEffect(() => {
    const stringURL=URLPage.toString()
    fetch('https://rickandmortyapi.com/api/character?page='+ stringURL)
      .then(res => res.json()
        .then(data => setCharacters(data.results)))
  }, [URLPage])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const prevPage = () => {
    if (URLPage !== 1) {
      setURLpage(URLPage-1)
    }
    
  }

  const nextPage = () => {
    if (URLPage !== 42) {
      setURLpage(URLPage+1)
    }
    setURLpage(URLPage+1)
  }

  return (
    <div className='container-fluid row justify-content-center mt-0 mx-0 px-0 mb-5'>
      <div className="character-section pt-4 mt-4 mb-md-5 mx-0 container-fluid row justify-content-center justify-self-center col-11 col-md-10">
        <div className='characterTittle fs-1 text-center mb-5  my-auto'>
          ~characters~
        </div>
        {/* SEARCHBOX----------------------------------------------------------- */}
        <div className="row justify-content-center  my-auto">
          <div className=" col-10 col-sm-8 col-md-7 col-lg-5 searchBox">
            <input className="col-10" type="text" name="busqueda" id="" placeholder="Search" onChange={handleChange} />
            <div className="header-tag-circle pinkCircle">
            </div>
          </div>
        </div>

          {/* if there is no search active */}
        {!search ? 
          <div className="pt-4 mt-4 mb-3 mb-md-5 mx-0 container-fluid row justify-content-center justify-self-center col-12">

            {!showMe ? characters.slice(0, 10).map((character) => (<CharacterList character={character} key={character.id} />))
              : characters.map((character) => (
                <><CharacterList character={character} key={character.id} />  </>))}
            <div className='row justify-content-center largeShow'>
              <div className="text-center mt-0 showMe" onClick={() => setShowMe(!showMe)}>{showMe? 'Nope, show me less.':'SHOW ME MORE!'}</div>
              {showMe? <div className='d-flex justify-content-between mb-2'>
                <div className='px-3 controlers' onClick={prevPage}>Prev</div>
                <div className='px-3 controlers' onClick={nextPage}>Next</div>
              </div>:null}
            </div>
          </div>
          :
          // active search
          <div className="pt-4 mt-4 mb-3 mb-md-5 mx-0 container-fluid row justify-content-center justify-self-center col-12">
            {characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase())).map((character) => (<CharacterList character={character} key={character.id} />))}
          </div>}
      </div>
    </div>
  )
}