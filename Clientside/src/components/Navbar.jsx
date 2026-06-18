import React, {useState} from 'react'
// import {logo} from '../assets/logo.png'
import logo from '../assets/logo.png'
// import dropdown_icon from '../assets/dropdown-icon'
import profile from '../assets/profile-pic.jpg'
import dropdown_icon from '../assets/dropdown-icon.png'

import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                {/* <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />  */}
                <span className='absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition'>HOME</span>
            </NavLink>
            <NavLink to='/trainers'>
                <li className='py-1'>TRAINERS</li>
                {/* <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' /> */}
                <span className='absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition'>TRAINERS</span>
            </NavLink>
            <NavLink to='/membership'>
                <li className='py-1'>MEMBERSHIP</li>
                {/* <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' /> */}
                <span className='absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition'>MEMBERSHIP</span>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT </li>
                {/* <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' /> */}
                <span className='absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition'>ABOUT</span>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                {/* <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' /> */}
                <span className='absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition'>CONTACT</span>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token 
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-10 rounded-full' src={profile} alt="" />
                    <img className='w-2.5' src={dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('my-membership')} className='hover:text-black cursor-pointer'>My Membership</p>
                            <p className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
                :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hiden md:block'>Login</button>
            }
            {/* <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hiden md:block'>Login</button> */}
        </div>
    </div>
  )
}

export default Navbar