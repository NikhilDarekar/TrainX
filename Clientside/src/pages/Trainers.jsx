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
    <section className="bg-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange-500 uppercase tracking-[4px] font-medium">
            Expert Coaches
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold font-outfit">
            Meet Our Trainers
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Train alongside certified fitness professionals who are dedicated
            to helping you achieve strength, confidence, and long-term results.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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