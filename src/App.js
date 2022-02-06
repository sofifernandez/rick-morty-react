import { NavBar } from './components/NavBar/NavBar.js'
import { Home } from './components/Home/Home'
import { CharacterListContainer } from './components/CharacterListContainer/CharacterListContainer'
import { CharacterCard } from './components/CharacterCard/CharacterCard.js'
import "./App.css"

function App() {
  return (
    <><NavBar />
      <Home />
      <CharacterListContainer />
      <CharacterCard/>
    </>
  );
}

export default App;
