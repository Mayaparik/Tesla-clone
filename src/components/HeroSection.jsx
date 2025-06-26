import React, { useEffect, useState } from 'react'
import Tesla1 from '../assest/Tesla1.avif'
import Tesla2 from '../assest/Tesla2.avif'

function HeroSection() {

   const images = [Tesla1, Tesla2];
   const[index, setIndex] = useState(0)

   useEffect(() => {
       const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 15000)
        
        return () => clearInterval(timer)
   }, []);


   const prevSlide = ()=> {
      setIndex((prevIndex) => 
        prevIndex === 0 ? images.length -1 : prevIndex -1
      )
   }

   const nextSlide = () => {
    setIndex ((prevIndex) => (prevIndex + 1) % images.length)
   }

  return (
    <div className='bg-cover bg-center text-center mt-13 h-99' style={{ backgroundImage: `url(${images[index]})` }}>
      <div className='lg:max-w-xl max-w-full m-auto pt-11 space-y-7 space-x-2   text-white text-center'>
      <h1 className='font-bold lg:text-6xl text-4xl my-2'>Model {index === 0 ? "3" : "Y"}</h1>
      <p className='border-b w-fit mx-auto border-b-white font-semibold lg:text-xl text-lg'>{index === 0 ? "1.99% APR Financing" : "0% APR Ending June 30"}</p>
      <button className='bg-blue-600 cursor-pointer hover:bg-blue-700 py-3 duration-600 items-baseline whitespace-nowrap text-sm font-semibold md:w-50 w-38  rounded-lg'>Order Now</button>
      <button className='bg-white py-3 text-black cursor-pointer hover:bg-gray-300 duration-600 items-baseline whitespace-nowrap text-sm font-semibold md:w-50 w-38 rounded-lg'>View Inventory</button>
      <button onClick={prevSlide} className='lg:block cursor-pointer hidden absolute top-60 left-12 shadow-2xl bg-white px-2 py-1.5 rounded-sm hover:bg-gray-200'><i className="bi bi-chevron-left text-black text-xl hover:text-gray-500"></i></button>
      <button onClick={nextSlide} className='lg:block cursor-pointer hidden absolute top-60 right-12 bg-white px-2 py-1.5 rounded-sm hover:bg-gray-200'><i className="bi bi-chevron-right text-xl text-black"></i></button>
      </div>
    </div>
  )
}

export default HeroSection
