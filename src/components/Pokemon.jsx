import React, { useState, useEffect } from "react"
import useFetch from "./effects/use-fetch"
import { typeColors } from "./pokemon-type-colors"
import Pokeball from "../img/pokeball-white.png"
import { nanoid } from "nanoid"

export default function Pokemon({url}) {
    const {data, isLoading} = useFetch(url)

    function capitalize(str) {
        return str.replace(/^./, str[0].toUpperCase())
    }

    return (
        <div>
            {(!isLoading && data) && 
            <div 
                className="pokemon-container"
                style={{backgroundColor: typeColors[data.types[0].type.name]}}
            >
                <div className="pokemon-id">
                    {`#${data.id}`}
                </div>
                <div className="pokemon-name">
                    {capitalize(data.species.name)}
                </div>
                <div className="pokemon-types">
                    {data.types.map(type => (
                        <div
                            className="pokemon-type" 
                            key={nanoid()}
                        >
                            {capitalize(type.type.name)}
                        </div>
                    ))}
                </div>
                <img
                    className="pokemon-sprite"
                    src={data.sprites.other["official-artwork"].front_default} 
                />
                <img
                    className="pokeball-bg" 
                    src={Pokeball} 
                />  
            </div>
            }
        </div>
    )
}