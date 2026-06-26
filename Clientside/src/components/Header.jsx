
// import React, { useEffect, useState } from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import { useNavigate } from 'react-router-dom';
// import arrow_icon from '../assets/arrow-icon.png';
// import group_profiles from '../assets/group_profiles.png';
// import parallax from '../assets/parallax.jpg';

// const Header = () => {
//   const navigate = useNavigate();
//   const [offsetY, setOffsetY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setOffsetY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section className="relative min-h-screen w-full overflow-hidden ">  /*ronded-lg removed*/
//       {/* Parallax Background */}
//       <div
//         className="absolute inset-0 scale-110"
//         style={{
//           backgroundImage: `url(${parallax})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           transform: `translateY(${offsetY * 0.4}px) scale(1.1)`,
//           willChange: 'transform',
//         }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/55" />

//       {/* Content */}
//       {/* <div className="relative z-10 min-h-screen flex items-center"> */}
//       <div className="relative z-10 min-h-screen flex items-center">
//         {/* <div className="w-full px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28"> changed to max-w-5xl */}
//         <div className="max-w-5xl">
//         {/* <div className="px-6 md:px-10 lg:px-20 max-w-3xl"> */}
//         <h1 className="font-josefin text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-bold leading-[0.95]">
//           {/* <h1 className="font-josefin text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight"> */}
//             Build your <br />
//             Dream Physique
//           </h1>

//           <div className="font-josefin text-2xl md:text-4xl font-bold text-yellow-300 mt-4 min-h-[50px]">
//             <TypeAnimation
//               sequence={[
//                 'Fat Loss',
//                 2000,
//                 'Muscle Gain',
//                 2000,
//                 'Strength',
//                 2000,
//                 'Cardio Fitness',
//                 2000,
//                 'Athletic Performance',
//                 2000,
//               ]}
//               speed={50}
//               repeat={Infinity}
//             />
//           </div>

//           <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-white text-sm mt-6">
//             <img
//               className="w-20"
//               src={group_profiles}
//               alt="Community Members"
//             />

//             <p>
//               1500+ happy members who trust TrainX for their fitness
//               journey.
//               <br />
//               Rated <span className="font-semibold">4.9/5⭐</span> by our
//               community.
//             </p>
//           </div>
//           <button
//             onClick={() => {
//               navigate('/membership');
//               window.scrollTo(0, 0);
//             }}
//           >
//             <span className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-700 font-medium mt-8 hover:scale-105 hover:text-black transition-all duration-300">
//               Get Membership
//               <img className="w-3" src={arrow_icon} alt="Arrow" />
//             </span>
//           </button>
//           {/* <a
//             href="#membership"
//             className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-700 font-medium mt-8 hover:scale-105 hover:text-black transition-all duration-300"
//           >
//             Get Membership
//             <img className="w-3" src={arrow_icon} alt="Arrow" />
//           </a> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Header;


// import React from "react";
// import hero1 from "../assets/hero1.png";
// import hero2 from "../assets/hero2.png";
// import hero3 from "../assets/hero3.png";

// const Header = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">

//       {/* ==================== Background Images ==================== */}
//       <div className="absolute inset-0 z-0 flex">

//         {/* tablets */}
//         <div className="absolute inset-0 z-0 hidden md:flex lg:hidden">
//           {/* left image */}
//           <div>
//             <img src={hero1} alt="hero1" className="" />
//           </div>
//           {/* right image */}
//           <div>
//             <img src={hero2} alt="hero2" className="" />
//           </div>
//         </div>
//         {/* mobiles */}


//         {/* Desktop  */}
//         {/* Left Image */}
//         <div className="w-1/3 h-full overflow-hidden">
//           <img
//             src={hero1}
//             alt="Hero Left"
//             className="w-full h-full object-cover scale-105 select-none"
//             draggable="false"
//           />
//         </div>

//         {/* Middle Image */}
//         <div className="w-1/3 h-full overflow-hidden">
//           <img
//             src={hero2}
//             alt="Hero Center"
//             className="w-full h-full object-cover scale-105 select-none"
//             draggable="false"
//           />
//         </div>

//         {/* Right Image */}
//         <div className="w-1/3 h-full overflow-hidden">
//           <img
//             src={hero3}
//             alt="Hero Right"
//             className="w-full h-full object-cover scale-105 select-none"
//             draggable="false"
//           />
//         </div>

//       </div>

//       {/* ==================== Dark Overlay ==================== */}
//       <div className="absolute inset-0 z-10 bg-black/40"></div>

//       {/* ==================== Hero Content ==================== */}
//       <div className="absolute inset-0 z-20 flex items-center justify-center">

//         {/* We'll add the heading, subtitle and buttons here */}

//       </div>

//     </section>
//   );
// };

// export default Header;











import React, { useEffect, useState } from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import { motion } from "framer-motion";


const Header = () => {

  const [offsetY, setOffsetY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, []);



  return (
    <section className="relative h-screen w-full overflow-hidden opacity-0 animate-fadeIn">

      {/* ================= MOBILE ================= */}

      <div className="absolute inset-0 md:hidden">

        <img
          src={hero2}
          alt=""
          className="w-full h-full object-cover scale-110"
          draggable="false"
        />

      </div>

      {/* ================= TABLET ================= */}

      <div className="absolute inset-0 hidden md:flex lg:hidden">

        <div className="w-1/2 h-full overflow-hidden">

          <img
            src={hero1}
            alt=""
            className="w-full h-full object-cover scale-105"
            draggable="false"
          />

        </div>

        <div className="w-1/2 h-full overflow-hidden">

          <img
            src={hero2}
            alt=""
            className="w-full h-full object-cover scale-105"
            draggable="false"
          />

        </div>

      </div>

      {/* ================= DESKTOP ================= */}

      <div className="absolute inset-0 hidden lg:flex">

        {/* Left */}

        <div className="w-1/3 h-full overflow-hidden">

          <img
            src={hero1}
            alt=""
            className="w-full h-full object-cover scale-105"
            draggable="false"
          />

        </div>

        {/* Middle */}

        <div className="w-1/3 h-full overflow-hidden">

          <img
            src={hero2}
            alt=""
            draggable="false"
            style={{
              transform: `translateY(${-offsetY * 0.08}px)`,
              willChange: "transform",
            }}
            className="
              w-full
              h-[130%]
              object-cover
              object-center
              scale-105
              select-none
            "
          />

        </div>

        {/* Right */}

        <div className="w-1/3 h-full overflow-hidden">

          <img
            src={hero3}
            alt=""
            className="w-full h-full object-cover scale-105"
            draggable="false"
          />

        </div>

      </div>

      {/* ================= Overlay ================= */}

      <div className="absolute inset-0 bg-black/55 z-10"></div>

      {/* ================= Hero Content ================= */}

      <div className="absolute inset-0 z-20 flex items-center justify-center">

        <div className="text-center text-white px-6 max-w-5xl">

          <p className="uppercase tracking-[8px] text-sm md:text-base mb-6 font-light">

            TRAIN-X

          </p>

          <h1 className="font-bold leading-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl translate-y-12
            opacity-0
            animate-title">

            Build Your

            <br />

            Dream Physique

          </h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,  
              delay: 0.6,
              ease: "easeOut",
            }}
            className="mt-18 text-lg md:text-xl font-light text-gray-200 max-w-2xl mx-auto"
          >
            Personalized fitness coaching designed to help you lose fat,
            build muscle, and become the strongest version of yourself.
          </motion.p>

          <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: "easeOut",
              }}
              className="bg-white text-black mt-10 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Get Membership
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1.1,
                ease: "easeOut",
              }}
              className="border border-white px-8 py-4 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
            >
              Explore Programs
            </motion.button>

        </div>

      </div>

    </section>
  );
};

export default Header;