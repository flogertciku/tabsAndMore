import { useState } from "react"
import Todo from "./Todo"
import PokemonList from "./PokemonList"
import PokemonSearch from "./PokemonSearch"
const Tabs =()=>{
    const [openTab,setOpenTab]=useState(1)
    return(
        <div>
            <ul style={{display:"flex",}}>
                <li style={{ marginRight:"40px"}} onClick={(e)=> setOpenTab(1)} > ToDo</li>
                <li style={{ marginRight:"40px"}}  onClick={(e)=> setOpenTab(2)}> List of Pokemons</li>
                <li style={{ marginRight:"40px"}}  onClick={(e)=> setOpenTab(3)}>Search Pokemon </li>
            </ul>
            { openTab === 1 ? <Todo></Todo> : openTab===2 ? <PokemonList></PokemonList> : <PokemonSearch></PokemonSearch>}
        </div>
    )
}

export default Tabs