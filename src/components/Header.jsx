import React, { useState } from 'react'
import Logo from '../assest/Logo.png'
import Vehicles from '../dropdown/Vehicles'
import Energy from '../dropdown/Energy'
import Charging from '../dropdown/Charging'
import Discover from '../dropdown/Discover'
import Shop from '../dropdown/Shop'



function Header() {

  const [isOpen, setIsOpen] = useState(false)


  return (


    <header>

      <div className='bg-white text-black lg:px-12 px-7 py-3 flex justify-between align-center fixed w-full z-50 top-0'>
        <div className='content-center'>
          <img src={Logo} alt="" className='w-30 cursor-pointer' />
        </div>
        <nav className='lg:flex hidden justify-between text-sm font-semibold'>
          <Vehicles />
          <Energy />
          <Charging />
          <Discover />
          <Shop />
        </nav>
        <div className='lg:flex hidden'>
          <button title='Support'><i className="bi bi-question-circle text-xl text-black font-light px-2 py-1 hover:bg-gray-200 rounded-md duration-600 cursor-pointer"></i></button>
          <button title='Region & Language'><i className="bi bi-globe text-xl text-black font-light px-2 py-1 hover:bg-gray-200 rounded-md duration-600 cursor-pointer"></i></button>
          <button title='Account'><i className="bi bi-person-circle text-xl text-black font-light px-2 py-1 hover:bg-gray-200 rounded-md duration-600 cursor-pointer"></i></button>
        </div>

        {/* hamburger icon */}
        <div className='lg:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='px-2  bg-black rounded-md text-lg text-white border-2 border-gray-300'>
            {isOpen ? <i class="bi bi-x-lg"></i> : <i class="bi bi-list-nested"></i>}
          </button>
        </div>

        {/* mobile navbar */}
      </div>
      {
        isOpen && (
          <div className={`fixed top-0 right-0 h-[70%] w-screen bg-white z-40 shadow-lg transform transition-transform duration-1000 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}lg:hidden py-15 px-6`}>
            <div className='pe-2 space-y-4 py-4'>
              <div className='flex justify-between hover:bg-gray-100 py-1 pe-3 items-center rounded-lg'><Vehicles /><i className="bi bi-chevron-right text-lg"></i></div>
              <div className='flex justify-between hover:bg-gray-100 py-1 pe-3 items-center rounded-lg'><Energy /><i className="bi bi-chevron-right text-lg"></i></div>
              <div className='flex justify-between hover:bg-gray-100 py-1 pe-3 items-center rounded-lg'><Charging /><i className="bi bi-chevron-right text-lg"></i></div>
              <div className='flex justify-between hover:bg-gray-100 py-1 pe-3 items-center rounded-lg'><Discover /><i className="bi bi-chevron-right text-lg"></i></div>
              <div className='flex justify-between hover:bg-gray-100 py-1 pe-3 items-center rounded-lg'><Shop /><i className="bi bi-chevron-right text-lg"></i></div>
            </div>
            <div className='flex justify-center'>
              <button title='Support'><i className="bi bi-question-circle text-xl text-black font-light px-2 py-1 hover:bg-gray-200 rounded-md duration-600 cursor-pointer"></i></button>
              <button title='Region & Language'><i className="bi bi-globe text-xl text-black font-light px-2 py-1 hover:bg-gray-200 rounded-md duration-600 cursor-pointer"></i></button>
              <button title='Account'><i className="bi bi-person-circle text-xl text-black font-light px-2 py-1 hover:bg-gray-200 rounded-md duration-600 cursor-pointer"></i></button>
            </div>
          </div>

        )
      }
    </header>
  )
}

export default Header
