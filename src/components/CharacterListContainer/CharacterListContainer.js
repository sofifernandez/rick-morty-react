import './CharacterListContainer.scss'
import { useEffect, useState } from "react";
import { CharacterList } from '../CharacterList/CharacterList'

export const CharacterListContainer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json()
        .then(data => setCharacters(data.results.slice(0, 8))))
  }, [])

  return (
    <div className='container-fluid row justify-content-center mt-0 mx-0 px-0 mb-5'>
      <div className="character-section pt-4 mt-4 mb-md-5 mx-0 container-fluid row justify-content-center justify-self-center col-11 col-md-10">
        <div className='characterTittle fs-1 text-center'>
          ~characters~
        </div>
        <div className="pt-4 mt-4 mb-md-5 mx-0 container-fluid row justify-content-center justify-self-center col-12">
          {characters.length ? characters.map((character) => (<CharacterList character={character} key={character.id} />))
            : "Loading..."
          }
        </div>
      </div>
    </div>
  )
}