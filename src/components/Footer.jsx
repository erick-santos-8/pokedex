import { Button, Flex, Text } from '@chakra-ui/react'
import { MdOutlineCatchingPokemon } from 'react-icons/md'

const Footer = () => {
  return (
    <Flex flexDirection="column" width="100%" h="200px" bg="blue.500" alignItems="center" justifyContent="center">
        <Button leftIcon={<MdOutlineCatchingPokemon size="60px" style={{transform:"rotate(180deg)"}}/>}color="gray.50" border="none" mt="2rem" variant="ghost" _hover={{color:"gray.200"}} fontSize="40px" cursor="pointer" iconSpacing="1px" fontWeight="bold" fontFamily="Quantico">GreatPokedex!</Button>
        <Text color="gray.50" mt="1rem">2024</Text>
    </Flex>
  )
}

export default Footer