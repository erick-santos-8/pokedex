import { useEffect, useState } from 'react'

const PokemonCard = ({name}) => {
  const [types, setTypes] = useState([])
  const [photoUrl, setPhotoUrl] = useState("")
  const [number, setNumber]=useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res)=> {
        if(!res.ok){
          throw new Error("Erro ao conectar com a API");
        }
        return res.json()
      }).then((data)=>{
        setTypes(data.types)
        setPhotoUrl(data.sprites.other.dream_world.front_default)
        setNumber(data.id)
      }).catch((error)=>{
        console.error("Erro detalhe do pokemon",error.message);
      })
  }, [])
  return (
    <div>
        <h3>{name}</h3>
        {types.length >0 && <p>{types[0].type.name}</p>}
        {types.length >1 && <p>{types[1].type.name}</p>}
        <img src={photoUrl} alt={name} />
        <p>{number}</p>
        
    </div>
  )
}

export default PokemonCard