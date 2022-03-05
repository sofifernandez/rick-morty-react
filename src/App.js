import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar.js'
import { Home } from './components/Home/Home'
import { CharacterListContainer } from "./components/CharacterListContainer/CharacterListContainer.js";
import { CharacterCard } from './components/CharacterCard/CharacterCard.js'
import { LocationCard } from './components/LocationCard/LocationCard.js'
import { EpisodesList } from "./components/EpisodesList/EpisodesList.js";
import { EpisodeCard } from './components/EpisodeCard/EpisodeCard'
import { LocationList } from "./components/LocationList/LocationList.js";
import "./App.css"

//https://reactrouter.com/docs/en/v6/upgrading/v5

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<><Home /><CharacterListContainer /> <EpisodesList/><LocationList/></>} />
        <Route exact path="/character/:characterId" element={<CharacterCard />} />
        <Route exact path="/location/:locationId" element={<LocationCard />} />
        <Route exact path="/episode/:episodeId" element={<EpisodeCard />} />
        {/* <Route exact path="/">
          <Home />
          <CharacterListContainer />
        </Route>
        <Route exact path="/character/:characterId">
          <CharacterCard />
        </Route> */}
        {/* <Route exact path="/location/:locationId">
          <LocationCard />
        </Route>
        <Route exact path="/episode/:episodeId">
          <EpisodeCard />
        </Route> */}
      </Routes>


    </BrowserRouter>
  );
}

export default App;
