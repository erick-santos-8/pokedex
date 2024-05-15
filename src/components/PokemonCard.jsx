import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { FaInfoCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react'

const typeColor = {
  "bug": ["#53b339", "black"],
  "fire": ["#ef5350", "black"],
  "normal": ["#6e4a54", "white"],
  "dark": ["#020805", "white"],
  "flying": ["#4a667b", "white"],
  "poison": ["#5e2c8a", "white"],
  "dragon": ["#3d8e90", "black"],
  "ghost": ["#33326e", "white"],
  "psychic": ["#a72972", "white"],
  "electric": ["#e1e22c", "black"],
  "grass": ["#0f793a", "white"],
  "rock": ["#481906", "white"],
  "fairy": ["#921c44", "white"],
  "ground": ["#a2722f", "black"],
  "steel": ["#59736a", "white"],
  "fighting": ["#973a1e", "white"],
  "ice": ["#82d3f5", "black"],
  "water": ["#0e53e3", "white"]
}

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
    <Box bg="#D62B1C" h="350px" w="300px" mb="2rem" border="1px solid black" borderRadius=".5rem" p="none">
      <Flex justifyContent="space-between" marginTop="none" p="none" mx="1rem" maxH="35px" alignItems="center">
        <Heading as="h2">{name}</Heading>
        <Text fontStyle="italic" fontSize="15px">#{number}</Text>
      </Flex>
      <Box  alignContent="top" alignItems="center" display="flex" flexDirection="column" padding="1rem" bg="white" borderBottom="3px solid">
        <Image src={photoUrl} alt={name} objectFit="contain" maxBlockSize="150px"/>
      </Box>
      
      <Flex justifyContent="space-between" mx="1rem" px="2rem" mb="none" h="50px">
        {types.length >0 && <Text fontWeight="bold" h="2rem" bg={typeColor[types[0].type.name][0]} color={typeColor[types[0].type.name][1]} borderRadius=".5rem" h="22px" bgSize="contain" px=".5rem">{types[0].type.name}</Text>}
        {types.length >1 && <Text fontWeight="bold" h="2rem" bg={typeColor[types[1].type.name][0]} color={typeColor[types[1].type.name][1]} borderRadius=".5rem" h="22px" bgSize="contain" px=".5rem">{types[1].type.name}</Text>}
      </Flex>
      <Box display="flex"justifyContent="center" cursor="pointer" mt="none">
        <Button bg="transparent" border="1px solid white" borderRadius=".5rem" h="2.5rem" cursor="pointer" fontWeight="bold"  rightIcon={<FaInfoCircle/>}>More Details</Button>
      </Box>        
    </Box>
  )
}

export default PokemonCard