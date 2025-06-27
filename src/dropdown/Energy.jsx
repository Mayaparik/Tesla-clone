import React from 'react'
import energy1 from '../assest/energy1.png'
import energy2 from '../assest/energy2.png'
import energy3 from '../assest/energy3.png'
import energy4 from '../assest/energy4.png'

function Energy() {

  const Slides = [
    { image: energy1, carName: "Solar Panels", btnOne: "Learn", btnTwo: "Order" },
    { image: energy2, carName: "Solar Roof", btnOne: "Learn", btnTwo: "Order" },
    { image: energy3, carName: "Powerwall", btnOne: "Learn", btnTwo: "Order" },
    { image: energy4, carName: "Megapack", btnOne: "Learn", btnTwo: "Order" },
  ]

  const list = [
    "Schedule a Consultation", "Why Solar", "Incentives",
     "Support", "Partner with Tesla", "Commercial", "Utilities"
  ]

  return (
    <div className='relative group '>
      <button className='px-5 py-1 lg:hover:bg-gray-200 rounded-md  duration-600 cursor-pointer'>Energy</button>
      <div className=" w-screen lg:max-h-screen max-h-[70vh] overflow-y-auto overscroll-contain fixed hidden lg:group-hover:flex left-0  bg-white text-black rounded-md mt-0 z-50 shadow-lg">
        <div className='grid lg:grid-cols-4 grid-cols-1 px-32 justify-center max-w-6xl py-20'>
          <div className='grid col-span-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pr-10 lg:border-r-2 border-gray-400 text-center'>
            {
              Slides.map((slide, index) => (
                <div key={index} className='space-x-4 space-y-4'>
                  <img src={slide.image} alt="" className='' />
                  <p>{slide.carName}</p>
                  <button className='underline text-gray-600 text-sm cursor-pointer hover:text-black'>{slide.btnOne}</button>
                  <button className='underline text-gray-600 text-sm cursor-pointer hover:text-black'>{slide.btnTwo}</button>
                </div>
              ))
            }
          </div>
          <div>
            <ul className='space-y-3 px-13 lg:text-base text-lg'>
              {
                list.map((lt, index) => (
                  <li key={index}>
                    <li><a className='hover:border-b-2 border-black whitespace-nowrap'>{lt}</a></li>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Energy
