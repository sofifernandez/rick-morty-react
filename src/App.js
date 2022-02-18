import { NavBar } from './components/NavBar/NavBar.js'
import { Home } from './components/Home/Home'
import { CharacterListContainer } from './components/CharacterListContainer/CharacterListContainer'
import { CharacterCard } from './components/CharacterCard/CharacterCard.js'
import { LocationCard } from './components/LocationCard/LocationCard.js'
import {EpisodeCard} from './components/EpisodeCard/EpisodeCard'
import "./App.css"

function App() {
  return (
    <><NavBar />
      <Home />
      <CharacterListContainer />
      <CharacterCard />
      <LocationCard />
      <EpisodeCard/>
    </>
  );
}

export default App;
