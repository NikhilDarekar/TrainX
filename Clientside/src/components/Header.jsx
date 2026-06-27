
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
//       <div
//         className="
//         absolute
//         inset-0
//         bg-gradient-to-r
//         from-black/80
//         via-black/50
//         to-black/20
//         "
//         />

//       {/* Content */}
//       {/* <div className="relative z-10 min-h-screen flex items-center"> */}
//       <div className="relative z-10 min-h-screen flex items-center">
//         {/* <div className="w-full px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28"> changed to max-w-5xl */}
//         {/* <div className="max-w-5xl"> */}
//         <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
//         {/* <div className="px-6 md:px-10 lg:px-20 max-w-3xl"> */}
//         <h1
//           className="
//           font-josefin
//           font-extrabold
//           tracking-tight
//           leading-[0.9]
//           text-white
//           text-6xl
//           sm:text-7xl
//           md:text-8xl
//           lg:text-[7rem]
//           xl:text-[8rem]
//           max-w-4xl
//           "
//           >
//           {/* <h1 className="font-josefin text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight"> */}
//             Build Your <br />
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
//               Start Your Journey
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




import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import arrow_icon from "../assets/arrow-icon.png";
import group_profiles from "../assets/group_profiles.png";
import parallax from "../assets/parallax.jpg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Header = () => {
  const navigate = useNavigate();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${parallax})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offsetY * 0.2}px) scale(1.15)`,
          willChange: "transform",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.92),rgba(0,0,0,0.65),rgba(0,0,0,0.2))]" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20"
        >

          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm"
          >
            🔥 Trusted by 1500+ Fitness Members
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="
              font-josefin
              font-extrabold
              tracking-tight
              leading-[1.05]
              text-white
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-7xl
              xl:text-8xl
              max-w-2xl
            "
          >
            Build Your <br /> Dream Physique
          </motion.h1>

          {/* Animated Text */}
          <motion.div
            variants={item}
            className="mt-6 flex items-center gap-3 text-2xl md:text-4xl font-bold"
          >
            <span className="text-gray-300">Train for</span>

            <span className="text-yellow-400">
              <TypeAnimation
                sequence={[
                  "Fat Loss",
                  2000,
                  "Muscle Gain",
                  2000,
                  "Strength",
                  2000,
                  "Cardio",
                  2000,
                  "Athletic Performance",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-gray-300 text-lg leading-relaxed"
          >
            Personalized coaching, structured workouts, and nutrition plans designed
            to help you transform your body and stay consistent long-term.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => {
                navigate("/membership");
                window.scrollTo(0, 0);
              }}
              className="group inline-flex items-center justify-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold shadow-[0_0_30px_rgba(250,204,21,0.25)] hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(250,204,21,0.45)] transition-all duration-300"
            >
              Start Your Journey
              <img
                src={arrow_icon}
                alt="arrow"
                className="w-3 transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300">
              Watch Programs
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-4"
          >
            <img src={group_profiles} alt="users" className="w-24" />
            <div>
              <p className="text-white font-semibold">1,500+ Active Members</p>
              <p className="text-gray-400 text-sm">
                Rated 4.9/5 by the community
              </p>
            </div>
          </motion.div>

          {/* Scroll Hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 text-xs animate-bounce">
            ↓ Scroll
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Header;