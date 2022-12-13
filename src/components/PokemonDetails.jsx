import React from "react"
import useFetch from "./effects/use-fetch"

export default function PokemonDetails({id, url}) {
    const {data, isLoading} = useFetch(url)

    return (
        <div>
            {(!isLoading && data) && <h1>{data.species.name}</h1>}
        </div>
    )
}