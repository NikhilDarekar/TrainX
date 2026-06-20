import React from "react";

const ParagraphSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-24 md:py-40">
      <div id='trainers' className="max-w-5xl mx-auto text-center px-6">

        <p className="font-outfit text-2xl md:text-3xl lg:text-4xl font-light leading-[1.7] tracking-tight text-gray-800">
          Your goals are closer than you think. With expert guidance, personalized training programs, and a community that supports you every step of the way, Train-X is where strength, confidence, and transformation come together.
        </p>

        <button
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
          >
          Start Your Journey
        </button>

      </div>
    </section>
  );
};

export default ParagraphSection;