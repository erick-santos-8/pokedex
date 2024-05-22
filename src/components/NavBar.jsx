import { MdOutlineCatchingPokemon } from "react-icons/md";

import { Flex, Input, InputGroup, ListItem, UnorderedList, Button, Spacer } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const NavBar = () => {
  return (
    <Flex h="60px" maxH="60px" align="center" px="2rem" w="1350px" backgroundColor="WhiteAlpha.700" boxShadow="xs">
        <Link to="/">
            <Button leftIcon={<MdOutlineCatchingPokemon size="40px"/>}color="blue.500" border="none" variant="ghost" _hover={{color:"blue.600"}} fontSize="24px" cursor="pointer" iconSpacing="1px" fontWeight="bold" fontFamily="Quantico">GreatPokedex!</Button>
        </Link>
        <Spacer/>
        <InputGroup w="500px">
            <Input type='text' placeholder='Search a pokemon' size="md" focusBorderColor="blue.500" borderRightRadius="none"/>
            <Button rightIcon={<BiSearchAlt size="20px"/>} size="md" cursor="pointer" colorScheme="blue" borderLeftRadius="none">
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