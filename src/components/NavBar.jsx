import { MdOutlineCatchingPokemon } from "react-icons/md";

import "./NavBar.css"
import { Flex, Input, InputGroup, ListItem, UnorderedList, Icon, Button, InputRightElement, Spacer } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const NavBar = () => {
  return (
    <Flex h="60px" maxH="60px" align="center" px="2rem" w="1350px" backgroundColor="#f6f6f6">
        <Button leftIcon={<MdOutlineCatchingPokemon size="30px"/>}color="#1d7ab5" border="none" variant="ghost" _hover={{color:"#1d5ab5"}} fontSize="24px" cursor="pointer" iconSpacing="1px"><p>GreatPokedex!</p></Button>
        <Spacer/>
        <InputGroup w="500px">
            <Input type='text' placeholder='Search a pokemon' size="sm" focusBorderColor="#1d7ab5"/>
            <Button rightIcon={<BiSearchAlt size="20px"/>} size="sm" cursor="pointer" colorScheme="blue" borderLeftRadius="none">
                </Button>
        </InputGroup>
        <Spacer/>
        <UnorderedList styleType="none" display="flex" flexDirection="row" justifyContent="space-evenly" w="300px">
            <ListItem ><Link>Pokemons</Link></ListItem>
            <ListItem ><Link>About</Link></ListItem>
            <ListItem ><Link>Contact</Link></ListItem>
        </UnorderedList>
    </Flex>
)
}

export default NavBar