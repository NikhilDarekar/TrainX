
import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import arrow_icon from '../assets/arrow-icon.png';
import group_profiles from '../assets/group_profiles.png';
import parallax from '../assets/parallax.jpg';

const Header = () => {
  const navigate = useNavigate();
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
    <section className="relative min-h-screen w-full overflow-hidden ">  /*ronded-lg removed*/
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
      {/* <div className="relative z-10 min-h-screen flex items-center"> */}
      <div className="relative z-10 min-h-screen flex items-center">
        {/* <div className="w-full px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28"> changed to max-w-5xl */}
        <div className="max-w-5xl">
        {/* <div className="px-6 md:px-10 lg:px-20 max-w-3xl"> */}
        <h1 className="font-josefin text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-bold leading-[0.95]">
          {/* <h1 className="font-josefin text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight"> */}
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
          <button
            onClick={() => {
              navigate('/membership');
              window.scrollTo(0, 0);
            }}
          >
            <span className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-700 font-medium mt-8 hover:scale-105 hover:text-black transition-all duration-300">
              Get Membership
              <img className="w-3" src={arrow_icon} alt="Arrow" />
            </span>
          </button>
          {/* <a
            href="#membership"
            className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-700 font-medium mt-8 hover:scale-105 hover:text-black transition-all duration-300"
          >
            Get Membership
            <img className="w-3" src={arrow_icon} alt="Arrow" />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Header;