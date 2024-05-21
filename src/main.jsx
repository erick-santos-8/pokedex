import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Pokemon from './pages/Pokemon.jsx'


import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='pokemon/:id' element={<Pokemon/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
