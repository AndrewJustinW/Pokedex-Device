import Pokedex from "./components/Pokedex";
import "./styles/app.scss"
import { useState, useEffect } from "react"
import axios from "axios"


function App() {

  const [pokemonID, setPokemonID] = useState(1)
  const [currentPokemon, setCurrentPokemon] = useState()

  useEffect(() => {

    const fetchPokemon = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)

      setCurrentPokemon(res.data)

    }
    fetchPokemon()

  }, [pokemonID])


  return (
    <div className="App">

      <Pokedex pokemonID={pokemonID} setPokemonID={setPokemonID} setCurrentPokemon={setCurrentPokemon} currentPokemon={currentPokemon} />

    </div>
  );
}

export default App;
