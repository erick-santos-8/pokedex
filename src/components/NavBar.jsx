import { MdOutlineCatchingPokemon } from "react-icons/md";

import "./NavBar.css"
import { Flex, ListItem, Spacer, UnorderedList } from '@chakra-ui/react'
const NavBar = () => {
  return (
    <Flex h="60px" maxH="60px" align="center" bg="#fff">
        <button className="logo"><MdOutlineCatchingPokemon/><p>GreatPokedex!</p></button>
        <Spacer/>
        <UnorderedList styleType="none" display="flex" flexDirection="row">
            <ListItem bg="red" w="50px">About</ListItem>
            <ListItem bg="yellow" w="50px">Pokemons</ListItem>
            <ListItem bg="orange" w="50px">Contact</ListItem>
            <ListItem bg="purple" w="50px">Search</ListItem>

        </UnorderedList>
    </Flex>
)
}

export default NavBar