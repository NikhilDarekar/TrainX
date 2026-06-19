// import React from 'react'
// import { TypeAnimation } from 'react-type-animation';
// import hero from '../assets/hero.png'
// import arrow_icon from '../assets/arrow-icon.png'
// import group_profiles from '../assets/group_profiles.png'
// import parallax from '../assets/parallax.jpg'
// const Header = () => {
//   return (
//     <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>

//         {/* left side */}
//         <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[8vw] md:mb-[-30px]'>
//             <p className='font-josefin text-2xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight md:-mt-6'>
//               Build your <br/> Dream Physique
//             </p>

//             <div className='font:josefin text-2xl md:text-4xl font-bold text-yellow-300'>
//               <TypeAnimation
//                 sequence={[
//                   'Fat Loss', 2000,
//                   'Muscle Gain', 2000,
//                   'Strength', 2000,
//                   'Cardio Fitness', 2000,
//                   'Athletic Performance', 2000,
//                 ]}
//                 speed={50}
//                 repeat={Infinity}
//               />
//             </div>

//             <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
//                 <img className='w-20' src={group_profiles} alt="" />
//                 <p>1500+ happy members,<br className='hidden '/> who trust TrainX for their fitness journey.{" "}  
//                 <br className='hidden ' />
//                   Rated <span className='font-semibold'>4.9/5⭐</span> by our community.
//                 </p>
//             </div>
//             <a href='#trainers' className='flex items-center gap-2 bg-white px-10 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:text-black hover:scale-105 transition-all duration-300'>
//               Get Membership <img className='w-3' src={arrow_icon} alt='' />
//             </a>
//         </div>

//         {/* right side */}
//         <div className='md:w-1/2 relative justify-center items-center'>
//           <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={hero} alt="" />
//         </div>
//     </div>
//   )
// }

// export default Header













import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import arrow_icon from '../assets/arrow-icon.png';
import group_profiles from '../assets/group_profiles.png';
import parallax from '../assets/parallax.jpg';

const Header = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden rounded-lg">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${parallax})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${offsetY * 0.4}px) scale(1.1)`,
          willChange: 'transform',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="px-6 md:px-10 lg:px-20 max-w-3xl">
          <h1 className="font-josefin text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
            Build your <br />
            Dream Physique
          </h1>

          <div className="font-josefin text-2xl md:text-4xl font-bold text-yellow-300 mt-4 min-h-[50px]">
            <TypeAnimation
              sequence={[
                'Fat Loss',
                2000,
                'Muscle Gain',
                2000,
                'Strength',
                2000,
                'Cardio Fitness',
                2000,
                'Athletic Performance',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-white text-sm mt-6">
            <img
              className="w-20"
              src={group_profiles}
              alt="Community Members"
            />

            <p>
              1500+ happy members who trust TrainX for their fitness
              journey.
              <br />
              Rated <span className="font-semibold">4.9/5⭐</span> by our
              community.
            </p>
          </div>

          <a
            href="#trainers"
            className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-700 font-medium mt-8 hover:scale-105 hover:text-black transition-all duration-300"
          >
            Get Membership
            <img className="w-3" src={arrow_icon} alt="Arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;