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
      <div className="relative h-[350px] overflow-hidden">
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

        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-black/30 to-transparent" />
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

          <button
            className="
            h-12
            w-12
            rounded-full
            bg-orange-500
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
        <div
          className="
          mt-6
          grid
          grid-cols-3
          rounded-2xl
          bg-[#1F2937]
          overflow-hidden
          "
        >
          <div className="py-4 text-center border-r border-gray-700">
            <h4 className="text-white text-xl font-bold">
              {trainer.experience}
            </h4>
            <p className="text-gray-400 text-sm">
              Years
            </p>
          </div>

          <div className="py-4 text-center border-r border-gray-700">
            <h4 className="text-white text-xl font-bold">
              {trainer.clients}
            </h4>
            <p className="text-gray-400 text-sm">
              Clients
            </p>
          </div>

          <div className="py-4 text-center">
            <h4 className="text-white text-xl font-bold">
              {trainer.rating}
            </h4>
            <p className="text-gray-400 text-sm">
              Rating
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          className="
          mt-6
          w-full
          rounded-full
          bg-orange-500
          py-4
          text-white
          font-medium
          transition-all
          duration-300
          hover:bg-orange-600
          hover:scale-[1.02]
          "
        >
          Book Session
        </button>
      </div>
    </motion.div>
  );
};

export default TrainerCard;