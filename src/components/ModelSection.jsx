import React from 'react'
import Tesla3 from '../assest/Tesla3.avif'
import Tesla4 from '../assest/Tesla4.avif'
import Tesla5 from '../assest/Tesla5.avif'
import Tesla6 from '../assest/Tesla6.avif'
import Tesla7 from '../assest/Tesla7.avif'
import Modellogo from '../assest/Modellogo.png'

function ModelSection() {

 const slides = [
  {image : Tesla3, carName : "Utility truck", model: "z", offer: "0% APR With Purchase of FSD (Supervised) Ending June 30", btnOne: "Order Now", btnTwo:"Learn More"  },
  {image : Tesla4, carName : "Sports Sedan", model: "3", offer: "Lease From $349/mo With Zero Down", btnOne: "Order Now", btnTwo:"Learn More"  },
  {image : Tesla5, carName : "Midsize SUV", model: "Y", offer: "Lease From $399/mo With $1,000 Down", btnOne: "Order Now", btnTwo:"Learn More"  },
  {image : Tesla6, carName : "Luxury SUV", model: "X", offer: "From $89,990", btnOne: "Order Now", btnTwo:"Learn More"  },
  {image : Tesla7, carName : "Luxury Sedan", model: "S", offer: "From $84,990", btnOne: "Order Now", btnTwo:"Learn More"  }
 ]

  return (
         
    <div className=' snap-x snap-mandatory flex h-screen space-x-7  scroll-smooth overflow-x-auto  scroll-ms-6' style={{scrollbarWidth: "none"}}>
      {
        slides.map((slide, index) => (
           <div  
           key={index}
            className={`md:min-w-[75%] min-w-[96%] bg-cover relative  bg-center text-center rounded-lg min-h-[85%] snap-center items-center flex justify-center  ${index === 0 ? "md:ml-12 md:mr-4 mx-2" : "mx-4"} ${index === 4 ? "md:me-12 md:ms-4" : "mx-0"}`} style={{ backgroundImage: `url(${slide.image})` }}>
       <span className='absolute top-6 md:left-11 left-5 text-lg font-semibold text-white'>{slide.carName}</span>
      <div className='space-y-5 space-x-2 absolute md:left-11 left-5  md:bottom-5 bottom-2 text-white text-left'>
      <h1 className='font-bold lg:text-5xl text-3xl my-2'>Model {slide.model}</h1>
      <p className='border-b w-fit  border-b-white font-semibold lg:text-lg text-base'>{slide.offer}</p>
      <button className='bg-blue-600 cursor-pointer hover:bg-blue-700 py-3 duration-600 items-baseline whitespace-nowrap text-sm font-semibold  rounded-lg px-10'>{slide.btnOne}</button>
      <button className='bg-white py-3 cursor-pointer text-black hover:bg-gray-300 duration-600 items-baseline whitespace-nowrap text-sm font-semibold px-10 rounded-lg'>{slide.btnTwo}</button>
      </div>
    </div>
        ))
      }            
    </div>
    
  )
}

export default ModelSection
