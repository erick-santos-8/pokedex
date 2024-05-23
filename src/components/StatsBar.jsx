import { Flex, Progress, Text } from '@chakra-ui/react'

const StatsBar = ({type, value}) => {
  return (
    <Flex flexDirection="row" justifyContent="space-between" align="center">
        <Text fontSize="18px" mr="1rem">{type.name}:</Text>
        <Progress value={value} max="170" my="1rem" w="300px" h="1rem" borderRadius="1rem" colorScheme='red'/>
    </Flex>
  )
}

export default StatsBar