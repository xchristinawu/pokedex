import React, {useEffect, useState} from "react"
import PokemonCards from "./components/PokemonCards"
import useFetch from "./components/effects/use-fetch"

export default function App() {
  const {data, isLoading} = useFetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
  
  return (
    <main>
      {(!isLoading && data) && <PokemonCards pokemonData={data.results}/>}
    </main>
  );
}
