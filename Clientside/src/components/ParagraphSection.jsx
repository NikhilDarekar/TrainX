import React from "react";
import { motion } from "framer-motion";

const ParagraphSection = () => {

  const scrollToTrainers = () => {
    const trainersSection = document.getElementById("trainers");

    if (trainersSection) {
      trainersSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="bg-white py-24 md:py-40">
      <div className="max-w-5xl mx-auto text-center px-6">

        <motion.p
          className="font-outfit text-2xl md:text-3xl lg:text-4xl font-light leading-[1.7] tracking-tight text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Your goals are closer than you think. With expert guidance,
          personalized training programs, and a community that supports
          you every step of the way, Train-X is where strength,
          confidence, and transformation come together.
        </motion.p>

        <motion.button
          onClick={scrollToTrainers}
          className="
            mt-16
            bg-white
            text-black
            border
            border-black
            px-10
            py-4
            font-medium
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Start Your Journey
        </motion.button>

      </div>
    </section>
  );
};

export default ParagraphSection;