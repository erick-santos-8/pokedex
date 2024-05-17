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

const bgCardColor = {
  "bug": "#86B339",
  "fire": "#F06E4F",
  "normal":"#947062",
  "dark": "#7A70FF",
  "flying": "#7C8BCF",
  "poison": "#C345D6",
  "dragon": "#4A8EB0",
  "ghost": "#8B62D9",
  "psychic": "#D65336",
  "electric": "#E3B62B",
  "grass": "#13909C",
  "rock": "#AD7110",
  "fairy": "#CF5127",
  "ground": "#A38F2F",
  "steel": "#728B94",
  "fighting": "#B87A25",
  "ice": "#82AEF5",
  "water": "#5985E3"
}

const PokemonCard = ({name}) => {
  const [types, setTypes] = useState([])
  const [photoUrl, setPhotoUrl] = useState("")
  const [number, setNumber]=useState(0);

  const getDetails = async(url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTypes(data.types)
    setPhotoUrl(data.sprites.other.dream_world.front_default)
    setNumber(data.id)
  }
  useEffect(() => {
    // fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //   .then((res)=> {
    //     if(!res.ok){
    //       throw new Error("Erro ao conectar com a API");
    //     }
    //     return res.json()
    //   }).then((data)=>{
    //     setTypes(data.types)
    //     setPhotoUrl(data.sprites.other.dream_world.front_default)
    //     setNumber(data.id)
    //   }).catch((error)=>{
    //     console.error("Erro detalhe do pokemon",error.message);
    //   })
    getDetails(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }, [])


  return (
    <Box  h="250px" w="250px" mb="2rem" border="1px solid black" borderRadius=".5rem" >
      <Box as='button' cursor="pointer" w="250px" h="250px" borderRadius=".5rem" border="none" bg={types[0] && bgCardColor[types[0].type.name] }>
        <Flex justifyContent="space-between" px="1rem" h="35px" borderTopRadius=".5rem" alignItems="center">
          <Heading as="h2">{name}</Heading>
          <Text fontStyle="italic" fontSize="15px" bg="rgba(255, 255, 255, 0.5)" p="3px" borderRadius="100rem">#{number}</Text>
        </Flex>
        <Box  h="150px" alignContent="top" alignItems="center" display="flex" flexDirection="column" padding=".5rem" mx="1rem"  bg="#fff" borderTopRadius=".5rem" borderBottom="2px solid black">
          <Image src={photoUrl} alt={name} objectFit="contain" maxBlockSize="100%"/>
        </Box>
        
        <Flex justifyContent="space-around" mx="1rem" maxH="40px" px="2rem"  alignItems="center" backgroundColor="rgba(255, 255, 255, 0.5)" borderBottomRadius=".5rem">
          {types.length >0 && <Text fontWeight="bold" h="2rem" bg={typeColor[types[0].type.name][0]} color={typeColor[types[0].type.name][1]} borderRadius=".5rem" height="22px" px=".5rem" display="flex" alignItems="center">{types[0].type.name}</Text>}
          {types.length >1 && <Text fontWeight="bold" h="2rem" bg={typeColor[types[1].type.name][0]} color={typeColor[types[1].type.name][1]} borderRadius=".5rem" height="22px" px=".5rem" display="flex" alignItems="center">{types[1].type.name}</Text>}
        </Flex>
      </Box>         
    </Box>
  )
}

export default PokemonCard