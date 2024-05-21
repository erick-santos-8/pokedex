import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import './App.css'
import { Box, Text } from '@chakra-ui/react'
import Footer from './components/Footer'

function App() {

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </Box>
  )
}

export default App
