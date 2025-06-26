import React from 'react'
import charger1 from '../assest/charger1.png'
import charger2 from '../assest/charger2.png'
import charger3 from '../assest/charger3.png'
import charger4 from '../assest/charger4.png'

function Charging() {
  const Slides = [
      { image: charger1, carName: "Charging", btnOne: "Learn",  },
      { image: charger2, carName: "Home Charging", btnOne: "Learn", btnTwo: "Shop" },
      { image: charger3, carName: "Supercharging", btnOne: "Learn", btnTwo: "Find" },
      { image: charger4, carName: "Charging for Business", btnOne: "Learn", btnTwo: "Order" },
    ]
  return (
     <div className='relative group '>
      <button className='px-5 py-1 lg:hover:bg-gray-200 rounded-md  duration-600 cursor-pointer'>Charging</button>
      <div className="w-screen max-h-[100vh] overflow-y-auto overscroll-contain fixed hidden lg:group-hover:flex left-0  bg-white text-black rounded-md mt-0 z-50 shadow-lg">
        <div className='grid grid-cols-4  px-32 justify-center max-w-6xl py-20'>
          <div className='grid col-span-3 grid-cols-3 text-center  gap-4 pr-10 border-r-2 border-gray-400 '>
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
          <div className='col-span-1'>
            <ul className='space-y-3 px-13'>
              <li><a className='hover:border-b-2 border-black whitespace-nowrap'>Help me Charge</a></li>
              <li><a className='hover:border-b-2 border-black  whitespace-nowrap'>Charging Calculator</a></li>
              <li><a className='hover:border-b-2 border-black whitespace-nowrap'>Charging with NACS</a></li>
              <li><a className='hover:border-b-2 border-black whitespace-nowrap'>Supercharging Voting</a></li>
              <li><a className='hover:border-b-2 border-black whitespace-nowrap'>Host a Supercharger</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charging
