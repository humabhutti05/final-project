import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Page404 from './pages/Page404'
import Products from './pages/Products'
import NavigationBar from './Components/NavigationBar'
import FooterSection from './Components/FooterSection'

export default function App() {

  const [user,setUser] = useState(true)
  return (
    <>
    <NavigationBar/>

{

user

?
(  
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="products" element={<Products />} />
      </Routes>
      )

:
(  
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={  <Page404/>} />


      </Routes>
      )

}

  <FooterSection/>

    </>
  )
}
