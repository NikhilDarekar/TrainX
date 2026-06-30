import React from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const TrainerCard = ({ trainer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="
        group relative overflow-hidden rounded-[32px]
        bg-white/[0.04] backdrop-blur-3xl
        border border-white/10
        shadow-[0_25px_80px_rgba(0,0,0,0.55)]
        text-white
      "
    >
      {/* ORANGE AMBIENT GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-orange-500/20 blur-[120px]" />

      {/* IMAGE SECTION */}
      <div className="relative h-100 overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="
            w-full h-full object-cover object-top
            transition duration-700
            group-hover:scale-105 group-hover:rotate-1
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-black/20 to-transparent" />

        {/* ELITE BADGE */}
        <div className="absolute top-6 left-6">
          <div className="
            relative px-4 py-2 rounded-full
            bg-white/10 backdrop-blur-xl
            border border-white/20
            text-xs font-semibold
            overflow-hidden
          ">
            <div className="absolute inset-0 bg-orange-500/20 blur-xl animate-pulse" />

            <span className="relative flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              Elite Coach
            </span>
          </div>
        </div>

        {/* FOOTER HINT */}
        {/* <div className="absolute bottom-5 left-6 text-xs text-white/60">
          Tap to explore profile
        </div> */}
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-4">

        {/* NAME + ROLE */}
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-700 ">
            {trainer.name}
          </h2>
          <p className="text-gray-400 mt-1 tracking-wide">
            {trainer.role}
          </p>
        </div>

        {/* SKILLS */}
        <div className="flex flex-wrap gap-2">
          {trainer.specialities.map((s) => (
            <span
              key={s}
              className="
                px-3 py-1 text-xs
                rounded-full
                bg-white/5 border border-white/10
                text-white/70 backdrop-blur-xl
              "
            >
              {s}
            </span>
          ))}
        </div>

        {/* PHONE BUTTON */}
        <div className="absolute top-125 right-6">
          <button className="
            h-11 w-11 rounded-full
            bg-black backdrop-blur-xl 
            border border-white/20
            flex items-center justify-center
            hover:scale-110 transition
          ">
            <Phone size={16} />
          </button>
        </div>

        {/* STATS */}
        <div className="
          grid grid-cols-3 gap-3
        ">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <div className="text-orange-400 text-xl font-bold">
              {trainer.experience}+
            </div>
            <div className="text-xs text-gray-400">Years</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <div className="text-orange-400 text-xl font-bold">
              {trainer.clients}+
            </div>
            <div className="text-xs text-gray-400">Clients</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <div className="text-orange-400 text-xl font-bold flex items-center justify-center gap-1">
              {trainer.rating} <span className="text-yellow-400">★</span>
            </div>
            <div className="text-xs text-gray-400">Rating</div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <motion.button className="
          mt-16 bg-white text-black border border-black px-10 py-4 font-medium transition-all duration-300 hover:bg-black hover:text-white"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          {/* SHINE */}
          <span className="
            absolute inset-0
            bg-white/20 skew-x-12
            -translate-x-full
            group-hover:translate-x-[200%]
            transition duration-700
          " />

          <span className="relative z-10">
            Book Session
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TrainerCard;