import { useEffect, useState } from 'react'

const PokemonCard = ({name}) => {
  const [types, setTypes] = useState([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res)=> {
        if(!res.ok){
          throw new Error("Erro ao conectar com a API");
        }
        return res.json()
      }).then((data)=>{
        setTypes(data.types)
      }).catch((error)=>{
        console.error("Erro detalhe do pokemon",error.message);
      })
  }, [])
  return (
    <div>
        <h5>{name}</h5>
        {console.log(name, types[0])}
        <p>Tipos: {types.map((details) => {return details.type.name})}</p>
    </div>
  )
}

export default PokemonCard