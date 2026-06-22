import React from "react";
import { useNavigate } from "react-router-dom";
import TrainerCard from "./TrainerCard";
import { trainers } from "../data/trainersData";

const HomeTrainers = () => {
  const navigate = useNavigate();

  return (
    <section id="trainers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-medium uppercase tracking-wider">
            Expert Coaches
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-semibold font-outfit">
            Meet Our Trainers
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our certified trainers are dedicated to helping you build strength,
            improve fitness, and achieve lasting results through personalized
            guidance and motivation.
          </p>
        </div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.slice(0, 3).map((trainer) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => navigate("/trainers")}
            className="
              px-8
              py-4
              bg-orange-500
              text-white
              rounded-full
              font-medium
              transition-all
              duration-300
              hover:bg-orange-600
              hover:scale-105
            "
          >
            View All Trainers →
          </button>
        </div>

      </div>
    </section>
  );
};

export default HomeTrainers;