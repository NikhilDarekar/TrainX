import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TrainerCard from "../components/TrainerCard";
import { trainers } from "../data/trainersData";

const Trainers = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="bg-transparent py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-medium">
            Certified Professionals
          </span>
          {/* <p className="text-orange-500 uppercase tracking-[4px] font-medium">
            Expert Coaches
          </p> */}

          <h1 className="mt-6 text-5xl md:text-6xl font-bold font-outfit text-gray-900">
            Meet Our Elite Trainers
          </h1>

          <p className="mt-6 text-gray-500 max-w-3xl text-lg mx-auto leading-8">
            Our certified coaches specialize in strength, weight loss,
            bodybuilding and functional fitness.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">

          {/* Coaches */}
          <div className="group bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-orange-500 text-3xl font-bold">
              10+
            </div>
            <p className="text-gray-700 font-medium mt-2">
              Certified Coaches
            </p>
          </div>

          {/* Clients */}
          <div className="group bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-orange-500 text-3xl font-bold">
              1500+
            </div>
            <p className="text-gray-700 font-medium mt-2">
              Happy Clients
            </p>
          </div>

          {/* Rating */}
          <div className="group bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-orange-500 text-3xl font-bold flex items-center justify-center gap-1">
              4.9 <span className="text-yellow-400">★</span>
            </div>
            <p className="text-gray-700 font-medium mt-2">
              Average Rating
            </p>
          </div>

          {/* Programs */}
          <div className="group bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-orange-500 text-3xl font-bold">
              12+
            </div>
            <p className="text-gray-700 font-medium mt-2">
              Programs
            </p>
          </div>

        </div>

        {/* search trainer */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button className="px-6 py-3 rounded-full bg-orange-500 text-white">
                All
              </button>
              <button className="px-6 py-3 rounded-full border">Strength</button>
              <button className="px-6 py-3 rounded-full border">Weight Loss</button>
              <button className="px-6 py-3 rounded-full border">Yoga</button>
            </div>

        {/* Cards */}
        <motion.div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-12
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Trainers;