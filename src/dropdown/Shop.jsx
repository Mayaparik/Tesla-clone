import React from 'react'
import charger2 from '../assest/charger2.png'
import shop1 from '../assest/shop1.png'
import shop2 from '../assest/shop2.png'
import shop3 from '../assest/shop3.png'

function Shop() {
  return (
    <div>
       <div className='relative group '>
            <button className='px-5 py-1 lg:hover:bg-gray-200 rounded-md  duration-600 cursor-pointer'>Shop</button>
            <div className=" w-screen max-h-[100vh] overflow-y-auto overscroll-contain fixed hidden lg:group-hover:flex left-0  bg-white text-black rounded-md mt-0 z-50 shadow-lg">
                <div className='flex mx-auto md:flex-row flex-col px-32 justify-center text-center max-w-6xl py-20'>
                    <div className='space-y-2'>
                       <img src={charger2} alt="" />
                       <p className='text-lg'>Charging</p>
                    </div>
                    <div className='space-y-2'>
                        <img src={shop1} alt="" />
                        <p className='text-lg'>Vehical Accessories</p>
                    </div>
                    <div className='space-y-2'>
                        <img src={shop2} alt="" />
                        <p className='text-lg'>Apparel</p>
                    </div>
                    <div className='space-y-2'>
                        <img src={shop3} alt="" />
                        <p className='text-lg'>Lifestyle</p>
                    </div>
                    
                </div>
            </div>



  {/* <div className={`fixed top-0 right-0 w-screen h-[70%]  bg-white shadow-lg z-40 transform transition-transform duration-1000 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
          <div className='flex flex-col px-6 py-6 space-y-4'>
            <div className='flex justify-end'>
              <button onClick={() => setIsOpen(false)} className='text-xl'>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <Vehicles isMobile={true} />
            <Energy isMobile={true} />
            <Charging isMobile={true} />
            <Discover isMobile={true} />
            <Shop isMobile={true} />

            <div className='flex justify-center gap-4 pt-4'>
              <button title='Support'><i className="bi bi-question-circle text-xl"></i></button>
              <button title='Region & Language'><i className="bi bi-globe text-xl"></i></button>
              <button title='Account'><i className="bi bi-person-circle text-xl"></i></button>
            </div>
          </div>
        </div> */}



        </div>
    </div>
  )
}

export default Shop
