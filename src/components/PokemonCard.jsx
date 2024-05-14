import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
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
    <Box bg="#D62B1C" h="350px" w="300px" mb="2rem" border="1px solid black" borderRadius=".5rem">
      <Box  alignContent="top" alignItems="center" display="flex" flexDirection="column" padding="1rem" bg="white" borderBottom="3px solid" borderTopRadius=".5rem">
        <Image src={photoUrl} alt={name} objectFit="cover" maxBlockSize="200px"/>
      </Box>
      <Flex justifyContent="space-between" marginTop="none" pt="none" mx="1rem" maxH="50px">
        <Heading as="h2">{name}</Heading>
        <Text fontStyle="italic" fontSize="15px">#{number}</Text>
      </Flex>
      <Flex justifyContent="space-between" mx="1rem" px="2rem">
        {types.length >0 && <Text fontWeight="bold">{types[0].type.name}</Text>}
        {types.length >1 && <Text fontWeight="bold">{types[1].type.name}</Text>}
      </Flex>
      <Box display="flex"justifyContent="center" cursor="pointer">
        <Button>Details</Button>
      </Box>        
    </Box>
  )
}

export default PokemonCard