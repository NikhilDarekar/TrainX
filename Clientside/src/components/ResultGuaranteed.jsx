import React from 'react'
import { motion } from "framer-motion"
import Result from '../assets/result.png'

const ResultGuaranteed = () => {
  return (
    <section className='py-16 md:py-24 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 md:px-6'>

        {/* Desktop Layout */}
        <div className='hidden md:block'>
          <div className='relative h-[750px]'>

            {/* Orange Background */}
            <motion.div className='absolute top-0 left-0 w-[650px] h-[600px] bg-orange-500'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} 
            />

            {/* Image */}
            <motion.img
              src={Result}
              alt="Workout"
              className='absolute top-16 left-20 w-[850px] h-[550px] object-cover z-10'
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />

            {/* Content Card */}
            <motion.div
              className='absolute bottom-0 right-0 bg-zinc-900 text-white p-10 w-[500px] z-20'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className='text-5xl font-bold text-orange-500 leading-tight'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                100% Results
                <br />
                Guaranteed
              </motion.h2>

              <motion.p
                className='mt-6 text-gray-300 leading-8'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                Transform your body with expert trainers, personalized workout
                plans, and nutrition guidance designed to help you achieve your
                fitness goals faster.
              </motion.p>
              <motion.button
                        className="
                        items-center
                        justify-center
                        mt-16
                        mx-30
                        bg-zinc-900
                        text-white
                        border
                        border-white
                        px-10
                        py-4
                        font-medium
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-black
                        "
                        // id=""  add it later

                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
              
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        >
                        Learn More
                      </motion.button>
            </motion.div>

          </div>
        </div>

        {/* Mobile Layout */}
        <div className='md:hidden'>

          <div className='bg-orange-500 h-[220px] relative'>

            <img
              src={Result}
              alt="Workout"
              className='absolute left-1/2 -translate-x-1/2 top-8 w-[85%] h-[300px] object-cover'
            />

          </div>

          <div className='bg-zinc-900 text-white pt-28 pb-10 px-6 text-center'>
            <h2 className='text-3xl font-bold text-orange-500 leading-tight'>
              100% Results
              <br />
              Guaranteed
            </h2>

            <p className='mt-5 text-gray-300 leading-7'>
              Transform your body with expert trainers, personalized workout
              plans, and nutrition guidance designed to help you achieve your
              fitness goals faster.
            </p>
            <motion.button
                        className="
                        items-center
                        justify-center
                        mt-10
                        mx-30
                        bg-zinc-900
                        text-white
                        border
                        border-white
                        px-10
                        py-4
                        font-medium
                        transition-all
                        duration-100
                        hover:bg-white
                        hover:text-black
                        "
                        // id=""  add it later

                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
              
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        >
                        Learn More
                      </motion.button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ResultGuaranteed