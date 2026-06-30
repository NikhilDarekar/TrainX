import React, { useEffect } from 'react'

const Contact = () => {

  useEffect( () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <p>Hi, this is contact us page</p>
        <form className='bg-white mb-2 w-2xl'>
          <div className='w-full p-2 border rounded-xl'>
            <label>Name</label>
            <input 
              type='text'
              id='name'
              placeholder='Enter your name'
              className='w-xl text-gray-800 p-2 border gap-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400'
              />

            <label>Email</label>
            <input 
              type='text'
              id='name'
              placeholder='Enter your Email'
              className='w-xl text-gray-800 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400'
              />

          </div>

        </form>
    </div>
  )
}

export default Contact