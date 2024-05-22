import { Box, Flex, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Pokemon = () => {
  const {id} = useParams()
  const [data, setData] = useState([])
  const [image, setImage] = useState("")

  const getPokemonDetails = async(url) =>{
    const res = await fetch(url);
    const data = await res.json();

    setData(data);
    setImage(data.sprites.other.dream_world.front_default)
  }

  useEffect(()=> {
    getPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }, [id])

  function heightAdjust(height){
    return height/10
  }

  function weightAdjust(weight){
    return weight/10
  }
  return (
    <Flex flexDirection="column" my="2rem" justifyContent="center" alignItems="center">
      <Heading mb="1rem">{data.name}</Heading>
      <Flex flexDirection="row" justifyContent="space-between">
        <Box h="400px" w="300px" boxShadow="xs" rounded="md">
          <Image src={image} h="100%" w="100%" p="1rem"/>
        </Box>
        <Flex flexDirection="column">
          <UnorderedList>
            <ListItem>Id: #{data.order}</ListItem>
            <ListItem>Base experience: {data.base_experience}xp</ListItem>
            <ListItem>Height: {heightAdjust(data.height)}m</ListItem>
            <ListItem>Weight: {weightAdjust(data.weight)}kg</ListItem>
          </UnorderedList>
          <Text></Text>
        </Flex>
      </Flex>

    </Flex>
  )
}

export default Pokemon