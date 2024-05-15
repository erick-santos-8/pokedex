import { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard';
import { Box, Flex, Heading, Wrap } from '@chakra-ui/react';



const Home = () => {
    const [firstPokemons, setFirstPokemons] = useState([]);

    const getFirstPokemons = async(url) =>{
        const res = await fetch(url);
        const data = await res.json();
        setFirstPokemons(data.results)
    };

    useEffect(()=>{
        getFirstPokemons("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
    }, [])
  return (
    <Box bg="#fff">
      <Heading bg="#f6f6f6">Pokemons</Heading>
        <Wrap bg="#f6f6f6" padding="2rem" borderRadius=".5rem">
          {firstPokemons.length === 0 && <p>Carregando...</p>}
          {firstPokemons.length > 0 && firstPokemons.map((nameAndUrl) => <PokemonCard key={nameAndUrl.name} name={nameAndUrl.name}/>)}
        </Wrap>
    </Box>
    
  )
}

export default Home