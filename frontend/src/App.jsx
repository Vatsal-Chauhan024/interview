import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'

const App = () => {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path='/add-user' element = {<AddUser/>}/>
    <Route path='/edit/:id' element = {<EditUser/>}/>
  </Routes>
  </BrowserRouter>
   </>
  )
}

export default App
