import "./NavBar.css"
import { Flex, ListItem, UnorderedList } from '@chakra-ui/react'
const NavBar = () => {
  return (
    <Flex h="60px" align="center" bg="#fff">
        <UnorderedList styleType="none" display="flex" flexDirection="row">
            <ListItem bg="blue" w="700px">Logo</ListItem>
            <ListItem bg="red" w="100px">About</ListItem>
            <ListItem bg="yellow" w="100px">Pokemons</ListItem>
            <ListItem bg="orange" w="100px">Contact</ListItem>
            <ListItem bg="purple" w="100px">Search</ListItem>

        </UnorderedList>
    </Flex>
)
}

export default NavBar