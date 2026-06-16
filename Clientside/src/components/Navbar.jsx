import React from 'react'
import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AppContext from '../context/AppContext'

const Navbar = () =>  {
    const navigate = useNavigate();

    const { token, setToken, userData } = useContext(AppContext);

    const [showMenu, setShowMenu] = useState(false);

    const logout = () => {
        setToken(false);
        localStorage.removeItem("token");
    };
  return (
    <div className="flex items-center justify-between text-sm py-4 mb- border-b border-gray-400">
        <NavLink to="/">
            <li className='py-1'>Home</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/">
            <li className='py-1'>Programs</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/">
            <li className='py-1'>Trainers</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/">
            <li className='py-1'>Membership</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/">
            <li className='py-1'>Why us?</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/">
            <li className='py-1'>Contact</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
    </div>
  )
}

export default Navbar