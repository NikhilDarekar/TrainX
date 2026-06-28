// import React, {useState} from 'react'
// // import {logo} from '../assets/logo.png'
// import logo from '../assets/logo.png'
// // import dropdown_icon from '../assets/dropdown-icon'
// import profile from '../assets/profile-pic.jpg'
// import dropdown_icon from '../assets/dropdown-icon.png'

// import { NavLink, useNavigate } from 'react-router-dom'
// import {
//   House,
//   Dumbbell,
//   Users,
//   CreditCard,
//   Phone
// } from "lucide-react";

// const navItems = [
//   { name: "HOME", path: "/", icon: House },
//   { name: "PROGRAMS", path: "/programs", icon: Dumbbell },
//   { name: "TRAINERS", path: "/trainers", icon: Users },
//   { name: "MEMBERSHIP", path: "/membership", icon: CreditCard },
//   { name: "CONTACT", path: "/contact", icon: Phone },
// ];


// const Navbar = () => {

//     const navigate = useNavigate();

//     const [showMenu, setShowMenu] = useState(false)
//     const [token, setToken] = useState(true)

//   return (
//     <div className='flex items-center justify-between text-sm py-1 mb-5 border-b border-b-gray-400'>
//         <img className='w-25 cursor-pointer  ' src={logo} alt="" />
//         <ul className='hidden md:flex items-start gap-5 font-medium'>
//             <NavLink to='/' className={({isActive}) => 
//             isActive
//             ? "text-indigo font-semibold"
//             : "text-black hover:text-indigo-600"}>
//                 <li className='py-1'>HOME</li>
//                 {/* <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />  */}
//                 <span className='absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition'>HOME</span>
//             </NavLink>
//             <NavLink to='/about' className={({isActive}) => 
//             isActive
//             ? "text-indigo font-semibold"
//             : "text-black hover:text-indigo-600"}>
//                 <li className='py-1'>PROGRAMS</li>
//                 {/* <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' /> */}
//                 <span className='absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition'>PROGRAMS</span>
//             </NavLink>
//             <NavLink to='/trainers' className={({isActive}) => 
//             isActive
//             ? "text-indigo font-semibold"
//             : "text-black hover:text-indigo-600"}>
//                 <li className='py-1'>TRAINERS</li>
//                 {/* <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' /> */}
//                 <span className='absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition'>TRAINERS</span>
//             </NavLink>
//             <NavLink to='/membership'className={({isActive}) => 
//             isActive
//             ? "text-indigo font-semibold"
//             : "text-black hover:text-indigo-600"} >
//                 <li className='py-1'>MEMBERSHIP</li>
//                 {/* <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' /> */}
//                 <span className='absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition'>MEMBERSHIP</span>
//             </NavLink>
            
//             <NavLink to='/contact' className={({isActive}) => 
//             isActive
//             ? "text-indigo font-semibold"
//             : "text-black hover:text-indigo-600"}>
//                 <li className='py-1'>CONTACT</li>
//                 {/* <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' /> */}
//                 <span className='absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition'>CONTACT</span>
//             </NavLink>
//         </ul>
//         <div className='flex items-center gap-4'>
//             {
//                 token 
//                 ? <div className='flex items-center gap-2 cursor-pointer group relative'>
//                     <img className='w-8 rounded-full' src={profile} alt="" />
//                     <img className='w-2.5' src={dropdown_icon} alt="" />
//                     <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
//                         <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
//                             <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
//                             <p onClick={()=>navigate('my-membership')} className='hover:text-black cursor-pointer'>My Membership</p>
//                             <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
//                         </div>  
//                     </div>
//                 </div>
//                 :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hiden md:block'>Login</button>
//             }
//             {/* <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hiden md:block'>Login</button> */}
//         </div>
//     </div>
//   )
// }

// export default Navbar








import React, { useState } from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile-pic.jpg";
import dropdown_icon from "../assets/dropdown-icon.png";
import { FiMenu } from "react-icons/fi";
import { FiX } from 'react-icons/fi' 

import { NavLink, useNavigate } from "react-router-dom";
import {
  House,
  Dumbbell,
  Users,
  CreditCard,
  Phone,
} from "lucide-react";

const navItems = [
  { name: "HOME", path: "/", icon: House },
  { name: "PROGRAMS", path: "/programs", icon: Dumbbell },
  { name: "TRAINERS", path: "/trainers", icon: Users },
  { name: "MEMBERSHIP", path: "/membership", icon: CreditCard },
  { name: "CONTACT", path: "/contact", icon: Phone },
];

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true);

  return (
    <>
    <div className="flex items-center justify-between h-20 px-8 border-b border-gray-200 bg-white">

      {/* LOGO */}
      <img
        src={logo}
        alt="logo"
        className="w-16 md:w-20 cursor-pointer"
        onClick={() => navigate("/")}
      />
      {/* NAV LINKS */}
      <ul className="hidden md:flex items-center gap-8 lg:gap-10 font-medium">


        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 pb-2 transition-all duration-200
                  ${
                    isActive
                      ? "text-black border-b-[3px] border-black font-semibold"
                      : "text-gray-500 border-b-[3px] border-transparent hover:text-black hover:border-gray-400"
                  }`
                }
              >
                <Icon size={18} />
                <span className="text-xs">{item.name}</span>
              </NavLink>
            </li>
          );
        })}

      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">

            <img className="w-8 h-8 rounded-full" src={profile} alt="profile" />
            <img className="w-3" src={dropdown_icon} alt="dropdown" />

            <div className="absolute top-0 right-0 pt-14 hidden group-hover:block text-sm text-gray-600 z-20">

              <div className="min-w-48 bg-white shadow-md rounded flex flex-col gap-3 p-4">

                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>

                <p
                  onClick={() => navigate("my-membership")}
                  className="hover:text-black cursor-pointer"
                >
                  My Membership
                </p>

                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>

              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-black text-white px-6 py-2 rounded-full hidden md:block hover:bg-gray-800"
          >
            Login
          </button>
        )}
        
                <FiMenu
          onClick={() => setShowMenu(true)}
          className="text-3xl cursor-pointer md:hidden"
        />
      </div>
    </div>

    {/* Mobile Menu */}
    {showMenu && (
      <div className="fixed inset-0 bg-white z-50 md:hidden">
        <div className="flex justify-between items-center p-5 border-b">
          <img
            src={logo}
            alt="logo"
            className="w-16 cursor-pointer"
            onClick={() => {
              navigate("/");
              setShowMenu(false);
            }}
          />

          <FiX
            className="text-3xl cursor-pointer"
            onClick={() => setShowMenu(false)}
          />
        </div>

        <div className="flex flex-col">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setShowMenu(false)}
                className="flex items-center gap-3 px-6 py-4 border-b hover:bg-gray-100"
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    )}
  </>
);
};

export default Navbar;