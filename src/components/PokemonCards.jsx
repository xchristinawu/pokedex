import React, { useEffect } from "react"
import Pokemon from "./Pokemon"
import { nanoid } from "nanoid"

export default function PokemonCards({pokemonList}) {
    const pokemonElements = pokemonList.map(pokemon => (
        <Pokemon
            key={nanoid()}
            url={pokemon.url}
        />
    ))  

    return (
        <div className="all-pokemon-container">{pokemonElements}</div>
    )
}