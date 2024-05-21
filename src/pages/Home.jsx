import { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard';
import { Box, Button, Heading, Wrap } from '@chakra-ui/react';


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
    <Box bg="#f9f9f9" display="flex" flexDirection="column" alignItems="center" justifyContent="center" w="1300px">
      <Heading>Pokemons</Heading>
        <Wrap padding="1rem" borderRadius=".5rem" justify="center">
          {firstPokemons.length === 0 && <p>Carregando...</p>}
          {firstPokemons.length > 0 && firstPokemons.map((nameAndUrl) => <PokemonCard key={nameAndUrl.name} name={nameAndUrl.name}/>)}
        </Wrap>
        <Button colorScheme="blue" onClick={changeShow} mb="2rem">More</Button>
    </Box>
    
  )
}

export default Home