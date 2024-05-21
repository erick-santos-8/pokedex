import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Pokemon = () => {
  const {id} = useParams()
  const [data, setData] = useState("")

  const getPokemonDetails = async(url) =>{
    const res = await fetch(url);
    const data = await res.json();

    setData(data.name);
  }

  useEffect(()=> {
    getPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${id}`)
  })
  return (
    <div>Pokemon details {data}</div>
  )
}

export default Pokemon