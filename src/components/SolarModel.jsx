import React from 'react'
import Solar1 from '../assest/Solar1.png'
import Solar2 from '../assest/Solar2.png'
import Solar3 from '../assest/Solar3.png'
import Solar4 from '../assest/Solar4.png'

function SolarModel() {
  const slides = [
    { image: Solar1, model: "Solar Panels", description: "Use Solar Energy to Power Your Home and Charge Your Tesla", btnOne: "Order Now", btnTwo: "Learn More" },
    { image: Solar2, model: "Powerwall", description: "Keep Your Lights On During Outages", btnOne: "Order Now", btnTwo: "Learn More" },
    { image: Solar3, model: "Solar Roof", description: "Generate Clean Energy With Your Roof", btnOne: "Order Now", btnTwo: "Learn More" },
    { image: Solar4, model: "Megapack", description: "Massive Batteries for Massive Energy Support", btnTwo: "Learn More" }
  ]
  return (
    <div className='snap-x snap-mandatory  flex h-screen space-x-7  scroll-smooth overflow-x-auto  scroll-ms-6' style={{ scrollbarWidth: "none" }}>
      {
        slides.map((slide, index) => (
          <div
            key={index}
            className={`md:min-w-[75%] min-w-[96%] bg-cover relative  bg-center text-center rounded-lg min-h-[85%]  snap-center  items-center flex justify-center  ${index === 0 ? "md:ml-12 md:mr-4 mx-2" : "mx-4"} ${index === 3 ? "md:me-12 md:ms-4" : "mx-0"}`} style={{ backgroundImage: `url(${slide.image})` }}>
            <div className='space-y-5 space-x-2 absolute md:left-11 left-5  md:bottom-5 bottom-2 text-white text-left'>
              <h1 className='font-bold lg:text-5xl text-3xl my-2'>Model {slide.model}</h1>
              <p className=' font-semibold lg:text-lg text-base'>{slide.description}</p>
              {
                index !==3 && (
              <button className='bg-blue-600 hover:bg-blue-700 py-3 duration-600 items-baseline whitespace-nowrap text-sm font-semibold  rounded-lg px-10'>{slide.btnOne}
              </button>
                )
              }
              <button className='bg-white py-3 text-black hover:bg-gray-300 duration-600 items-baseline whitespace-nowrap text-sm font-semibold px-10 rounded-lg'>{slide.btnTwo}</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default SolarModel
