import { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard';



const Home = () => {
    const [firstPokemons, setFirstPokemons] = useState([]);

    const getFirstPokemons = async(url) =>{
        const res = await fetch(url);
        const data = await res.json();
        setFirstPokemons(data.results)
    };

    useEffect(()=>{
        getFirstPokemons("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
    }, [])
  return (
    <div>
        <h4>Pokemons</h4>
        {firstPokemons.length === 0 && <p>Carregando...</p>}
        {firstPokemons.length > 0 && firstPokemons.map((nameAndUrl) => <PokemonCard key={nameAndUrl.name} name={nameAndUrl.name}/>)}
    </div>
  )
}

export default Home