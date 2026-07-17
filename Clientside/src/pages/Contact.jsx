import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const Contact = () => {

  useEffect( () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  const [contactNumber, setContactNumber] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if(contactNumber.length !== 10) {
      alert('Please enter a valid contact number')
    }
    alert('Form submitted successfully')
  }
    return (
    <section className='bg-fixed bg-cover bg-center'> 
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
          className='text-center mb-16'
          initial={{opacity: 0, y: 40}}
          transition={{duration: 0.8}}
          animate={{opacity: 1, y: 0}}>
          <div className='min-h-screen px-5 text-4xl text-amber-200'>
            <h1 className='text-5xl px-5 py-2 text-center md:text-6xl font-outfit text-gray-900 font-bold'>Get in Touch</h1>
              <div className='bg-white/10 backdrop-blur-lg shadow-lg text-gray-900 text-2xl font-semibold px-5 py-2 border gap-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue'>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className='text-sm text-gray-600'>Name: </label>
                      <input 
                        type='text'
                        id='name'
                        placeholder='Enter your name'
                        className='w-100 p-1.5 border rounded-lg focus:ring-2 focus:ring-yellow-400'
                      />
                  </div>

                  <div className="mb-4 flex gap-2">
                    <label className='text-sm text-gray-600'>Contact Number: </label>
                      <span>+91</span><input 
                        type='tel'
                        id='contactNumber'
                        placeholder='Enter your Contact Number'
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        className='w-100 p-1.5 border rounded-lg focus:ring-2 focus:ring-yellow-400'
                      />
                  </div>

                  <div className="mb-4">
                    <label className='text-sm text-gray-600'>Address: </label>
                      <input 
                        type='text'
                        id='address'
                        placeholder='Enter your address'
                        className='w-100 p-1.5 border rounded-lg focus:ring-2 focus:ring-yellow-400'
                      />
                  </div>   

                  <div>
                    <motion.button
                      // onClick={scrollToTrainers}
                        className="
                          mt-15
                          mb-5
                        bg-white
                        text-black
                          border
                        border-black
                          px-8
                          py-3
                          font-medium
                          transition-all
                          duration-300
                        hover:bg-black
                        hover:text-white
                        type:submit
                        "
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3}}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        >
                        Get in Touch
                    </motion.button>
                  </div>
                  
                </form>
              </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
  
}

export default Contact