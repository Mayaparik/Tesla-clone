import React from 'react'
import Cardimage1 from '../assest/Cardimage1.avif'
import Cardimage2 from '../assest/Cardimage2.avif'
import CardimageOne from '../assest/CardimageOne.png'
import CardimageSecond from '../assest/CardimageSecond.png'

function Card() {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 md:px-12 px-5 gap-5 '>
      <div className='bg-gray-100 flex md:flex-row flex-col justify-between  items-center rounded-lg'>
        <div className='md:px-11 px-5 md:py-0 py-3 space-y-4 lg:order-1 order-2'>
          <h2 className='text-black font-semibold md:text-3xl text-2xl mb-1'>Compare Models</h2>
          <p className='text-gray-500 leading-7 md:text-xl  '>Find the Tesla vehicle that’s right for you.</p>
          <button className='bg-white text-sm font-semibold cursor-pointer rounded-md md:w-[80%] w-full text-black py-2'>Compare Models</button>
        </div>
        <div className='lg:order-2 order-1'>
          <img src={Cardimage1} alt="" className='w-50 md:block hidden rounded-r-lg ' />
          <img src={CardimageSecond} alt="" className='w-full  md:hidden block rounded-t-lg ' />
          
        </div>
      </div>
      <div className='bg-gray-100 flex md:flex-row flex-col justify-between  items-center rounded-lg '>
        <div className=' md:px-11 px-5 md:py-0 py-3 space-y-4 lg:order-1 order-2'>
          <h2 className='text-black font-semibold md:text-3xl text-2xl mb-1'>American Heroes</h2>
          <p className='text-gray-700 leading-7 md:text-xl'>$1,000 off for military, first responders, teachers and students.</p>
          <button className='bg-white  text-sm cursor-pointer font-semibold rounded-md md:w-[80%] w-full text-black py-2'>Learn More</button>
        </div>
        <div className='px-0 py-0 lg:order-2 order-1'>
          <img src={Cardimage2} alt="" className='w-75 rounded-r-lg p-0 md:block hidden' />
          <img src={CardimageOne} alt="" className='w-full  md:hidden block rounded-t-lg' />
          
        </div>
      </div>
    </div>
  )
}

export default Card
