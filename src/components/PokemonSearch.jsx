import { useState } from "react"
import axios from "axios"

const PokemonSearch = ()=>{
    const [pokemonName,setPokemonName]=useState("")
    const [pokemon,setPokemon]=useState({})
    const SearchPokemon =(e)=>{
        e.preventDefault()
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response=>{
            console.log(response)
           setPokemon(response.data)
        })
    }
    return(
        <div>
            <h2> Pokemon Search</h2>
            <div>
                <input type="text" placeholder="Enter PokemonName" value={pokemonName}  onChange={ (e)=>setPokemonName(e.target.value)}/>
                <button onClick={SearchPokemon}>Search Pokemon</button>
            </div>
            {
                pokemon.name && pokemon.sprites ?
           
            <div>
                <h2> {pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            : ""
             }
        </div>
    )
}
export default PokemonSearch