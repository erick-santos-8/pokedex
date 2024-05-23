import { Box, Flex, Heading, Image, ListItem, Progress, Text, UnorderedList } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import StatsBar from "../components/StatsBar"


const Pokemon = () => {
  const {id} = useParams()
  const [data, setData] = useState([])
  const [image, setImage] = useState("")
  const [stats, setStats] = useState([])

  const getPokemonDetails = async(url) =>{
    const res = await fetch(url);
    const data = await res.json();

    setData(data);
    setImage(data.sprites.other.dream_world.front_default)
    setStats(data.stats)
  }

  useEffect(()=> {
    getPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }, [id])

  return (
    <Flex flexDirection="column" my="2rem" justifyContent="center" alignItems="center" w="100%">
      <Heading mb="1rem">{data.name}</Heading>
      <Flex flexDirection="row" justifyContent="space-between">
        <Box h="400px" w="300px" boxShadow="xs" rounded="md">
          <Image src={image} h="100%" w="100%" p="1rem"/>
        </Box>
        <Flex flexDirection="column" ml="3rem">
          <UnorderedList fontSize="18px" listStyleType="none" w="250px" h="150px" border="solid 1px red" borderRadius=".5rem"p=".5rem">
            <Text fontWeight="bold" fontSize="20px" display="flex" justifyContent="center">Details</Text>
            <ListItem>Id: #{data.order}</ListItem>
            <ListItem>Base experience: {data.base_experience}xp</ListItem>
            <ListItem>Height: {data.height/10}m</ListItem>
            <ListItem>Weight: {data.weight/10}kg</ListItem>
          </UnorderedList>
          <Flex flexDirection="column" h="400px">
            {stats.length > 0 && stats.map((category) => <StatsBar key={`${id}${category.stat.name}${category.base_stat}`}type={category.stat} value={category.base_stat}/>)}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Pokemon