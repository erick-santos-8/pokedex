
import { Outlet } from 'react-router-dom'
import './App.css'
import { Box, Text } from '@chakra-ui/react'

function App() {

  return (
    <Box>
      <Text fontSize="16px">NavBar</Text>
      <Outlet/>
    </Box>
  )
}

export default App
