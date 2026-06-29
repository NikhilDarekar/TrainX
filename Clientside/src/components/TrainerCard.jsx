import React from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const TrainerCard = ({ trainer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      bg-[#111827]
      shadow-lg
      transition-all
      duration-500
      hover:-translate-y-3
      hover:shadow-[0_20px_60px_rgba(249,115,22,0.25)]
      "
    >
      {/* Image Section */}
      <div className="relative h-[360px] overflow-hidden group">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />

        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-black/30 to-transparent" /> */}
      <>
        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-black/20 to-transparent" />

        {/* Top Badge */}
        <div className="absolute top-5 left-5">
          <span className="relative inline-flex items-center gap-2
            px-4 py-2
            rounded-full 
            text-xs font-semibold text-white
            bg-white/10
            backdrop-blur-md
            border border-white/20
            shadow-lg
            overflow-hidden">

              <span className="
                absolute inset-0
                bg-orange-500/30
                blur-xl
                animate-pulse" />

                <span className="relative flex h-2 w-2">
                  <span className="animante-ping absolute-hidden inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"/>
                </span>
              🔥 Top Rated
          </span>
        </div>

        <div className="absolute bottom-4 left-5">
          <p className="text-white/70 text-xs">
            Tap below to view profile
          </p>
        </div>
      </>

      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white text-2xl font-semibold">
              {trainer.name}
            </h3>

            <p className="text-gray-400 mt-1">
              {trainer.role}
            </p>

          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {trainer.specialities.map((specialty) => (
              <span
                key={specialty}
                className="
                  rounded-full
                  border
                  border-orange-500/30
                  bg-orange-500/10
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-orange-400
                "
              >
                {specialty}
              </span>
            ))}
          </div>

          <button
            className="
            h-12
            w-12
            rounded-full
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            flex
            items-center
            justify-center
            text-white
            transition
            duration-300
            hover:scale-110
            "
          >
            <Phone size={18} />
          </button>
        </div>

        {/* Stats */}
        <div className="
          mt-6
          grid
          grid-cols-3
          rounded-2xl
          bg-white/5
          border
          border-white/10
          overflow-hidden
        ">
          
          {/* Experience */}
          <div className="py-4 text-center border-r border-white/10">
            <div className="text-orange-400 text-lg font-bold">
              {trainer.experience}
            </div>
            <p className="text-gray-400 text-xs mt-1">
              Years
            </p>
          </div>

          {/* Clients */}
          <div className="py-4 text-center border-r border-white/10">
            <div className="text-orange-400 text-lg font-bold">
              {trainer.clients}
            </div>
            <p className="text-gray-400 text-xs mt-1">
              Clients
            </p>
          </div>

          {/* Rating */}
          <div className="py-4 text-center">
            <div className="flex items-center justify-center gap-1 text-orange-400 font-bold">
              {trainer.rating}
              <span className="text-yellow-400">★</span>
            </div>
            <p className="text-gray-400 text-xs mt-1">
              Rating
            </p>
          </div>

        </div>

        {/* Button */}
        <button
          className="
            mt-6
            w-full
            relative
            overflow-hidden
            rounded-full
            py-4
            font-semibold
            text-white
            bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600
            shadow-lg
            shadow-orange-500/30
            transition-all
            duration-500
            hover:scale-[1.03]
            hover:shadow-orange-500/50
            active:scale-95
          "
        >
          {/* Shine Effect */}
          <span className="
            absolute inset-0 
            bg-white/20 
            translate-x-[-100%] 
            skew-x-12 
            group-hover:translate-x-[200%] 
            transition-transform 
            duration-700
          " />

          <span className="relative z-10">
            Book Session
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default TrainerCard;