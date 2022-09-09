import React, { useEffect } from "react"
import Pokemon from "./Pokemon"

export default function PokemonCards({pokemonData}) {
    const pokemonElements = pokemonData.map((pokemon,i) => (
        <Pokemon
            key={i}
            url={pokemon.url}
        />
    ))  

    return (
        <div>{pokemonElements}</div>
    )
}