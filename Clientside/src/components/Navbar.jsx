import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img src={logo.png} alt="" />
        <ul>
            <NavLink >
                <li>Home</li>
                <hr />
            </NavLink>
            <NavLink >
                <li>Trainers</li>
                <hr />
            </NavLink>
            <NavLink >
                <li>Membership</li>
                <hr />
            </NavLink>
            <NavLink >
                <li>About </li>
                <hr />
            </NavLink>
            <NavLink >
                <li>Contact</li>
                <hr />
            </NavLink>
        </ul>
        <div>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar