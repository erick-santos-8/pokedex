import { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard';
import { Box, Heading, Wrap } from '@chakra-ui/react';


import "../App.css"



const Home = () => {
    const [limit, setLimit] = useState(20)
    const [offset, setOffset] = useState(0)
    const [firstPokemons, setFirstPokemons] = useState([]);

    const getFirstPokemons = async(url) =>{
        const res = await fetch(url);
        const data = await res.json();
        setFirstPokemons(data.results)
    };

    useEffect(()=>{
        getFirstPokemons(`https://pokeapi.co/api/v2/pokemon?limit=${limit}offset=${offset}`);
    }, [limit, offset])

    function changeShow(){
      setLimit(limit+20)
      setOffset(offset+20)
    }
  return (
    <Box bg="#f6f6f6" display="flex" flexDirection="column" alignItems="center">
      <Heading>Pokemons</Heading>
        <Wrap padding="1rem" borderRadius=".5rem" justify="center">
          {firstPokemons.length === 0 && <p>Carregando...</p>}
          {firstPokemons.length > 0 && firstPokemons.map((nameAndUrl) => <PokemonCard key={nameAndUrl.name} name={nameAndUrl.name}/>)}
        </Wrap>
        <button onClick={changeShow} className='button'>More</button>
    </Box>
    
  )
}

export default Home