import { useEffect,useState } from "react"
import axios from "axios"

const PokemonList = ()=>{
    const [pokemonList,setPokemonList] =useState([])
    useEffect( ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0').then(response=>{
            console.log(response.data.results);
            setPokemonList(response.data.results)
        })
    },[])
    return(
        <div>
            <h2> Pokemon List</h2>
            <ul>
                {
                    pokemonList.map((pokemon,index)=>{
                        return <li key={pokemon.name}>{pokemon.name}</li>
                    })
                }
            </ul>

        </div>
    )
}
export default PokemonList