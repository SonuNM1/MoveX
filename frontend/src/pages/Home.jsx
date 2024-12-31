
/* eslint-disable no-unused-vars */

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center h-screen pt-8 flex justify-between flex-col w-full'>
        <img 
        className='w-16 ml-8'
        src='https://iconape.com/wp-content/png_logo_vector/movex.png' />
        <div className='bg-white pb-7 py-5 px-4'>
            <h2 className='text-2xl font-bold'>Get Started With MoveX</h2>
            <Link
             to='/login'
             className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
