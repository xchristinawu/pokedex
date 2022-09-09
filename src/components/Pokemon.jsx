import React from "react"
import useFetch from "./effects/use-fetch"

export default function Pokemon({url}) {
    const {data, isLoading} = useFetch(url)

    return (
        <div>
            {(!isLoading && data) && 
            <div>
                <div>{data.species.name}</div>
            </div>
            }
        </div>
    )
}