import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Trainers from './pages/Trainers.jsx'
import About from './pages/About.jsx'
import Membership from './pages/Membership.jsx'
import MyProfile from './pages/MyProfile.jsx'
import Login from './pages/Login.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/trainers' element={<Trainers />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/membership' element={<Membership />} />
        <Route path='my-profile' element={<MyProfile/>} />
        <Route path='login' element={<Login /> } />
        <Route path='contact' element={<Contact />} />

      </Routes>
    </div>
  )
}

export default App
