import { Flex, Progress, Text } from '@chakra-ui/react'

const StatsBar = ({type, value}) => {
  return (
    <Flex flexDirection="row">
        <Text>{type.name}:</Text>
        <Progress value={value} max="170" my="1rem" w="500px" h="2rem" borderRadius="1rem"/>
    </Flex>
  )
}

export default StatsBar