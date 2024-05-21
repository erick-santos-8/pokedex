import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react'

import "./PokemonCard.css"

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

  const getDetails = async(url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTypes(data.types)
    setPhotoUrl(data.sprites.other.dream_world.front_default)
    setNumber(data.id)
  }

  function upperCaseFirstLetter(stringName){
    if(!stringName){
      return "";
    }
    return stringName[0].toUpperCase() + stringName.substr(1);
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
  }, [name])

  const typeStyle = {
    fontWeight: "bold",
    fontSize: "14px",
    h: "3rem",
    boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius:".5rem",
    height:"22px", 
    px:".5rem",
    py: ".3rem", 
    display:"flex", 
    alignItems:"center",
  }

  return (
    <Box  h="215px" w="180px" mb="2rem" borderRadius=".5rem" bg="#fff">
      <button className={`button-card ${types[0] && types[0].type.name }-hover`}>
        <Box  h="150px" w="180px" alignContent="baseline" alignItems="baseline" display="flex" flexDirection="column" padding=".55rem"  bg="#fff" borderTopRadius=".5rem">
          <Image src={photoUrl} alt={name} w="100%" maxBlockSize="100%"/>
        </Box>

        <Flex h="35px" w="100%" justifyContent="space-between" borderTopRadius=".5rem" alignItems="center" p=".8rem">
          <Heading fontSize="18px" fontWeight="bold">{upperCaseFirstLetter(name)}</Heading>
          <Text fontStyle="italic" fontSize="15px" p="3px">#{number}</Text>
        </Flex>
        
        <Flex w="100%" justifyContent="space-around" px="1rem" pt=".4rem" maxH="15px" alignItems="center">
          {types.length >0 && <Text sx={typeStyle} bg={typeColor[types[0].type.name][0]} color={typeColor[types[0].type.name][1]} >{types[0].type.name}</Text>}
          {types.length >1 && <Text sx={typeStyle} bg={typeColor[types[1].type.name][0]} color={typeColor[types[1].type.name][1]}>{types[1].type.name}</Text>}
        </Flex>
      </button>         
    </Box>
  )
}

export default PokemonCard