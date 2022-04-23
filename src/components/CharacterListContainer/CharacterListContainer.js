import './CharacterListContainer.scss'
import { useEffect, useState } from "react";
import { CharacterList } from '../CharacterList/CharacterList'

export const CharacterListContainer = () => {
  const [URL, setURL] = useState('https://rickandmortyapi.com/api/character?page=1')
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage]= useState()
  const [showMe, setShowMe] = useState(false); //show more characters in array
  const [error404, setError404]= useState(false)
  
  useEffect(() => {
    const fetchCharacters = async () => {
      if ((await fetch(URL)).status === 200) {
        const data = await (await fetch(URL)).json();
        setCharacters(data.results);
        setNextPage(data.info.next);
        setPrevPage(data.info.prev);
        setError404(false);
      }
      else if ((await fetch(URL)).status === 404){
        setError404(true)
      }  
    }
      fetchCharacters()
  }, [URL])


  const handleSearch = () => {
    const name = document.querySelector('#searchInput').value
    setURL('https://rickandmortyapi.com/api/character/?name=' + name)
  }

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

  return (
    <div className='container-fluid row justify-content-center mt-0 mx-0 px-0 mb-5'>
      <div className="character-section pt-4 mt-4 mb-md-5 mx-0 container-fluid row justify-content-center justify-self-center col-11 col-md-10">
        <div className='characterTittle fs-1 text-center mb-5  my-auto'>
          ~characters~
        </div>

        {/* ----------------SEARCHBOX---------------------------------------------------------------- */}
        <div className="row justify-content-center  my-auto">
          <div className=" col-10 col-sm-8 col-md-7 col-lg-5 searchBox">
            <input className="col-10" type="text" name="busqueda" id="searchInput" placeholder="Search" />
            <button type='submit' className=" btnSearch" onClick={handleSearch}> GO! </button>
          </div>
         {error404 ? <div className="row justify-content-center mt-1">OMG, you are useless. Try again you glip-glop.</div>: null}
        </div>
        {/*------------------------------------------------------------------------------------------*/}

        <div className="pt-4 mt-4 mb-3 mb-md-5 mx-0 container-fluid row justify-content-center justify-self-center col-12">
          {!showMe ?
            characters.slice(0, 10).map((character) => (<CharacterList character={character} key={character.id} />))
            :
            characters.map((character) => (
              <CharacterList character={character} key={character.id} />))}
          <div className='row justify-content-center largeShow'>
            <div className="text-center mt-0 showMe" onClick={() => setShowMe(!showMe)}>{showMe ? 'Nope, show me less.' : 'SHOW ME MORE!'}</div>
            {showMe ?
              <div className='d-flex justify-content-between mb-2'>
              <div className='px-3 controlers' onClick={toPrevPage}>Prev</div>
              <div className='px-3 controlers' onClick={toNextPage}>Next</div>
              </div> :
              null}
          </div>
        </div>
      </div>
    </div>
  )
}